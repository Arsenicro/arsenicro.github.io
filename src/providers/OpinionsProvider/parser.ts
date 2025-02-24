import {
  isOverallSemesterClass,
  isRegularSemesterClass,
  SemesterData,
} from "@/resources/SemesterData.type";
import { WouldRecommend } from "@/types/ChartValues.type";
import { shuffle } from "lodash";
import { v4 as uuid } from "uuid";
import {
  classesSorter,
  createOverallClass,
  createOverallSemester,
  CreateRegularClass as createRegularClass,
  createRegularSemester,
  sumSameTypeObjects,
} from "./helpers";
import {
  isOverallOpinionClass,
  isRegularOpinionClass,
  Opinions,
} from "./Opinions.type";

interface Testimonial {
  id: string;
  text: string;
  universityClass: string;
  semester: string;
}

export const getOpinions = (semesters: SemesterData[]) => {
  const highlightedTestimonials: Testimonial[] = [];
  const wouldRecommendLecturer: WouldRecommend = {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  };
  const lecturerHelpful: WouldRecommend = {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  };
  const classes: Opinions["classes"] = [];

  for (const semester of semesters) {
    for (const semesterClass of semester.classes) {
      if (!classes.some((c) => c.nameOfClass === semesterClass.nameOfClass)) {
        classes.push(
          isOverallSemesterClass(semesterClass)
            ? createOverallClass(semesterClass.nameOfClass, "lecture")
            : createRegularClass(semesterClass.nameOfClass, semesterClass.type)
        );
      }

      const foundClass = classes.find(
        (c) => c.nameOfClass === semesterClass.nameOfClass
      )!;

      if (foundClass.type !== semesterClass.type) {
        throw new Error(`Class type mismatch for ${semesterClass.nameOfClass}`);
      }

      if (
        !foundClass.semesters.some(
          (s) => s.nameOfSemester === semester.nameOfSemester
        )
      ) {
        if (
          isOverallSemesterClass(semesterClass) &&
          isOverallOpinionClass(foundClass)
        ) {
          foundClass.semesters.push(
            createOverallSemester(semester.nameOfSemester)
          );
        }

        if (
          isRegularSemesterClass(semesterClass) &&
          isRegularOpinionClass(foundClass)
        ) {
          foundClass.semesters.push(
            createRegularSemester(semester.nameOfSemester)
          );
        }
      }

      if (
        isOverallOpinionClass(foundClass) &&
        isOverallSemesterClass(semesterClass)
      ) {
        const foundSemester = foundClass.semesters.find(
          (s) => s.nameOfSemester === semester.nameOfSemester
        );

        if (!foundSemester) {
          throw new Error(
            `Semester ${semester.nameOfSemester} not found for ${semesterClass.nameOfClass}`
          );
        }

        const sumProperties = [
          "lectureAttendance",
          "finalPrepTime",
          "wouldRecommendLecture",
          "wouldRecommendLecturer",
          "ectsFeedback",
          "technicalSolutions",
        ] as const;

        for (const prop of sumProperties) {
          sumSameTypeObjects(foundSemester[prop], semesterClass[prop]);
          sumSameTypeObjects(foundClass[prop], semesterClass[prop]);
        }
      }

      if (
        isRegularOpinionClass(foundClass) &&
        isRegularSemesterClass(semesterClass)
      ) {
        const foundSemester = foundClass.semesters.find(
          (s) => s.nameOfSemester === semester.nameOfSemester
        );

        if (!foundSemester) {
          throw new Error(
            `Semester ${semester.nameOfSemester} not found for ${semesterClass.nameOfClass}`
          );
        }

        const sumProperties = [
          "averagePrepTime",
          "lectureHelpful",
          "lecturerHelpful",
          "technicalSolutions",
        ] as const;

        for (const prop of sumProperties) {
          sumSameTypeObjects(foundSemester[prop], semesterClass[prop]);
          sumSameTypeObjects(foundClass[prop], semesterClass[prop]);
        }
      }

      if (isOverallSemesterClass(semesterClass)) {
        sumSameTypeObjects(
          wouldRecommendLecturer,
          semesterClass.wouldRecommendLecturer
        );
      }

      if (isRegularSemesterClass(semesterClass)) {
        sumSameTypeObjects(lecturerHelpful, semesterClass.lecturerHelpful);
      }

      for (const testimonial of semesterClass.technicalSolutionTestimonials) {
        const newTestimonial: Testimonial = {
          id: uuid(),
          text: testimonial.text,
          universityClass: semesterClass.nameOfClass,
          semester: semester.nameOfSemester,
        };

        if (testimonial.highlighted) {
          highlightedTestimonials.push(newTestimonial);
        }

        foundClass.technicalSolutionTestimonials.push(newTestimonial);
        foundClass.semesters
          .find((s) => s.nameOfSemester === semester.nameOfSemester)!
          .technicalSolutionTestimonials.push(newTestimonial);
      }
      for (const testimonial of semesterClass.generalTestimonials) {
        const newTestimonial: Testimonial = {
          id: uuid(),
          text: testimonial.text,
          universityClass: semesterClass.nameOfClass,
          semester: semester.nameOfSemester,
        };

        if (testimonial.highlighted) {
          highlightedTestimonials.push(newTestimonial);
        }

        foundClass.generalTestimonials.push(newTestimonial);
        foundClass.semesters
          .find((s) => s.nameOfSemester === semester.nameOfSemester)!
          .generalTestimonials.push(newTestimonial);
      }
    }
  }

  return {
    highlightedTestimonials: shuffle(highlightedTestimonials),
    wouldRecommendLecturer,
    lecturerHelpful,
    classes: classes.sort(classesSorter),
  };
};
