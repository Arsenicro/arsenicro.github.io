import { shuffleArray } from "@/lib/utils";
import testimonialsJson from "@/resources/testimonials.json";
import { createContext, useMemo } from "react";
import {
  ITestimonial,
  ITestimonialObject,
  ITestimonialsCount,
} from "./Testimonials.type";
import { countTestimonials } from "./counter";
import { parseTestimonials } from "./parser";

interface ITestimonialsContext {
  testimonialsBySemester: ITestimonialObject;
  testimonialsByClass: ITestimonialObject;
  semesterTestimonialsCount: ITestimonialsCount;
  classTestimonialsCount: ITestimonialsCount;
  highlightedTestimonials: ITestimonial[];
  semesters: string[];
  classes: string[];
}

export const TestimonialsContext = createContext<
  ITestimonialsContext | undefined
>(undefined);

export default function TestimonialsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const testimonialsObject = useMemo(() => {
    const {
      testimonialsBySemester,
      testimonialsByClass,
      flattenedTestimonials,
      semesters,
      classes,
    } = parseTestimonials(testimonialsJson);

    const highlightedTestimonials = shuffleArray(
      flattenedTestimonials.filter((testimonial) => testimonial.highlighted)
    );

    const semesterTestimonialsCount = countTestimonials(testimonialsBySemester);

    const classTestimonialsCount = countTestimonials(testimonialsByClass);

    return {
      testimonialsBySemester,
      testimonialsByClass,
      semesterTestimonialsCount,
      classTestimonialsCount,
      highlightedTestimonials,
      semesters,
      classes,
    };
  }, []);

  return (
    <TestimonialsContext.Provider value={testimonialsObject}>
      {children}
    </TestimonialsContext.Provider>
  );
}
