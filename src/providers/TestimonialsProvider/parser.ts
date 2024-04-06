import { v4 as uuid } from "uuid";
import {
  ISentiment,
  ITestimonial,
  ITestimonialObject,
  ITestimonialsJson,
} from "./Testimonials.type";
import { courseSorter, semesterSorter } from "./sorters";

function isSentiment(sentiment: string): sentiment is ISentiment {
  return ["positive", "neutral", "negative"].includes(sentiment);
}

function insertIntoNestedObject<T>(
  obj: Record<string, Record<string, T[]>>,
  outerKey: string,
  innerKey: string,
  value: T[]
) {
  if (!obj[outerKey]) {
    obj[outerKey] = {};
  }
  if (!obj[outerKey][innerKey]) {
    obj[outerKey][innerKey] = [];
  }
  obj[outerKey][innerKey].push(...value);
}

export function parseTestimonials(testimonialsJson: ITestimonialsJson) {
  const testimonialsBySemester: ITestimonialObject = {};
  const testimonialsByClass: ITestimonialObject = {};
  const flattenedTestimonials: ITestimonial[] = [];
  const semesters = new Set<string>();
  const classes = new Set<string>();

  for (const semesterData of testimonialsJson) {
    semesters.add(semesterData.nameOfSemester);
    for (const classesData of semesterData.classes) {
      classes.add(classesData.nameOfClass);
      const parsedTestimonials = classesData.testimonials.map(
        (testimonial) => ({
          ...testimonial,
          id: uuid(),
          sentiment: isSentiment(testimonial.sentiment)
            ? testimonial.sentiment
            : "neutral",

          nameOfClass: classesData.nameOfClass,
          nameOfSemester: semesterData.nameOfSemester,
        })
      );

      insertIntoNestedObject(
        testimonialsBySemester,
        semesterData.nameOfSemester,
        classesData.nameOfClass,
        parsedTestimonials
      );

      insertIntoNestedObject(
        testimonialsByClass,
        classesData.nameOfClass,
        semesterData.nameOfSemester,
        parsedTestimonials
      );

      flattenedTestimonials.push(...parsedTestimonials);
    }
  }

  return {
    testimonialsBySemester,
    testimonialsByClass,
    flattenedTestimonials,
    semesters: [...semesters].sort(semesterSorter),
    classes: [...classes].sort(courseSorter),
  };
}
