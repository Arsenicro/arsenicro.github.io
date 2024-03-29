import { shuffleArray } from "@/lib/utils";
import testimonialsJson from "@/resources/testimonials.json";
import { createContext, useMemo } from "react";
import { v4 as uuid } from "uuid";
import {
  ISentiment,
  ITestimonial,
  ITestimonials,
  ITestimonialsJson,
} from "./Testimonials.type";

interface ITestimonialsContext {
  testimonials: ITestimonials;
  highlightedTestimonials: ITestimonial[];
}

export const TestimonialsContext = createContext<
  ITestimonialsContext | undefined
>(undefined);

function isSentiment(sentiment: string): sentiment is ISentiment {
  return ["positive", "neutral", "negative"].includes(sentiment);
}

function parseTestimonials(testimonialsJson: ITestimonialsJson) {
  const parsedTestimonials: ITestimonials = {};

  for (const semester in testimonialsJson) {
    const coursesForSemester = testimonialsJson[semester];
    const parsedCoursesForSemester = coursesForSemester.map((course) => {
      const parsedTestimonials = course.testimonials.map((testimonial) => {
        const parsedTestimonial = {
          ...testimonial,
          id: uuid(),
          sentiment: isSentiment(testimonial.sentiment)
            ? testimonial.sentiment
            : "neutral",
        };
        return parsedTestimonial;
      });
      return { ...course, testimonials: parsedTestimonials };
    });
    parsedTestimonials[semester] = parsedCoursesForSemester;
  }

  return parsedTestimonials;
}

function flattenTestimonials(testimonials: ITestimonials) {
  const flattenedTestimonials: ITestimonial[] = [];

  for (const semester in testimonials) {
    const coursesForSemester = testimonials[semester];
    for (const course of coursesForSemester) {
      for (const testimonial of course.testimonials) {
        flattenedTestimonials.push({
          ...testimonial,
          class: course.name,
          semester: semester,
        });
      }
    }
  }

  return flattenedTestimonials;
}

export default function TestimonialsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValue = useMemo(() => {
    const testimonials = parseTestimonials(testimonialsJson);

    const highlightedTestimonials = shuffleArray(
      flattenTestimonials(testimonials).filter(
        (testimonial) => testimonial.highlighted
      )
    );

    return {
      testimonials,
      highlightedTestimonials,
    };
  }, []);

  return (
    <TestimonialsContext.Provider value={contextValue}>
      {children}
    </TestimonialsContext.Provider>
  );
}
