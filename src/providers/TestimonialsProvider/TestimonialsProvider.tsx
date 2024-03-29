import { shuffleArray } from "@/lib/utils";
import testimonialsJson from "@/resources/testimonials.json";
import { createContext, useMemo } from "react";
import { v4 as uuid } from "uuid";
import {
  ISentiment,
  ITestimonial,
  ITestimonialsJson,
} from "./Testimonials.type";

interface ITestimonialsContext {
  testimonials: ITestimonial[];
  highlightedTestimonials: ITestimonial[];
  classes: string[];
  semesters: string[];
}

export const TestimonialsContext = createContext<
  ITestimonialsContext | undefined
>(undefined);

function isSentiment(sentiment: string): sentiment is ISentiment {
  return ["positive", "neutral", "negative"].includes(sentiment);
}

function parseTestimonials(testimonialsJson: ITestimonialsJson) {
  const testimonials: ITestimonial[] = [];
  const semesters = new Set<string>();
  const classes = new Set<string>();

  for (const semester in testimonialsJson) {
    semesters.add(semester);
    for (const course of testimonialsJson[semester]) {
      classes.add(course.name);
      for (const testimonial of course.testimonials) {
        testimonials.push({
          id: uuid(),
          text: testimonial.text,
          highlighted: testimonial.highlighted,
          sentiment: isSentiment(testimonial.sentiment)
            ? testimonial.sentiment
            : "neutral",
          class: course.name,
          semester: semester,
        });
      }
    }
  }
  return { testimonials, semesters, classes };
}

export default function TestimonialsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextValue = useMemo(() => {
    const { testimonials, semesters, classes } =
      parseTestimonials(testimonialsJson);

    const highlightedTestimonials = shuffleArray(
      testimonials.filter((testimonial) => testimonial.highlighted)
    );

    return {
      testimonials,
      highlightedTestimonials,
      classes: Array.from(classes),
      semesters: Array.from(semesters),
    };
  }, []);

  return (
    <TestimonialsContext.Provider value={contextValue}>
      {children}
    </TestimonialsContext.Provider>
  );
}
