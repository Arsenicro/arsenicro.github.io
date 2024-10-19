import { SemesterData } from "@/resources/SemesterData.type";
import { WouldRecommend } from "@/types/ChartValues.type";
import { v4 as uuid } from "uuid";
import {
  Opinions,
  OverallClass,
  OverallSemester,
  RegularClass,
  RegularSemester,
} from "./Opinions.type";

interface Testimonial {
  id: string;
  text: string;
  universityClass: string;
  semester: string;
}

const classesSorter = (
  a: Opinions["classes"][number],
  b: Opinions["classes"][number]
) => {
  const classNameA = a.nameOfClass.replace(/\([^()]*\)/g, "").trim();
  const classNameB = b.nameOfClass.replace(/\([^()]*\)/g, "").trim();

  if (classNameA !== classNameB) {
    return classNameA.localeCompare(classNameB);
  }

  const getTypePriority = (course: string) => {
    if (course.includes("(Wykład)")) return 1;
    if (course.includes("(Pracownia)")) return 2;
    if (course.includes("(Ćwiczenia)")) return 3;
    return 4;
  };

  const typePriorityA = getTypePriority(a.nameOfClass);
  const typePriorityB = getTypePriority(b.nameOfClass);

  return typePriorityA - typePriorityB;
};

function sumSameTypeObjects<T extends Record<string, number>>(
  obj1: T,
  obj2: T
) {
  for (const key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      obj1[key] = ((obj1[key] as number) + (obj2[key] as number)) as T[Extract<
        keyof T,
        string
      >];
    }
  }
}

function shuffle<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
}

export const getOpinions = (semesters: SemesterData[]) => {
  const highlightedTestimonials: Testimonial[] = [];
  const wouldRecommendLecturer: WouldRecommend = {
    definitelyNot: 0,
    probablyNot: 0,
    unsure: 0,
    probably: 0,
    definitely: 0,
  };
  const lecturerHelpful: WouldRecommend = {
    definitelyNot: 0,
    probablyNot: 0,
    unsure: 0,
    probably: 0,
    definitely: 0,
  };
  const classes: Opinions["classes"] = [];

  for (const semester of semesters) {
    for (const universityClass of semester.classes) {
      if (!classes.find((c) => c.nameOfClass === universityClass.nameOfClass)) {
        if (universityClass.type === "lecture") {
          const newClass: OverallClass = {
            id: uuid(),
            nameOfClass: universityClass.nameOfClass,
            lectureAttendance: {
              none: 0,
              rarely: 0,
              irregularly: 0,
              regularly: 0,
            },
            finalPrepTime: {
              overTwoWeeks: 0,
              week: 0,
              severalDays: 0,
              oneDay: 0,
              none: 0,
            },
            wouldRecommendLecture: {
              definitelyNot: 0,
              probablyNot: 0,
              unsure: 0,
              probably: 0,
              definitely: 0,
            },
            wouldRecommendLecturer: {
              definitelyNot: 0,
              probablyNot: 0,
              unsure: 0,
              probably: 0,
              definitely: 0,
            },
            ectsFeedback: {
              "+3": 0,
              "+2": 0,
              "+1": 0,
              "0": 0,
              "-1": 0,
              "-2": 0,
            },
            technicalSolutions: {
              bad: 0,
              average: 0,
              good: 0,
              veryGood: 0,
            },
            technicalSolutionTestimonials: [],
            generalTestimonials: [],
            type: "lecture",
            semesters: [],
          };
          classes.push(newClass);
        } else {
          const newClass: RegularClass = {
            id: uuid(),
            nameOfClass: universityClass.nameOfClass,
            averagePrepTime: {
              overTwoDays: 0,
              twoDays: 0,
              oneDay: 0,
              twoHours: 0,
              lessThanHour: 0,
            },
            lectureHelpful: {
              definitelyNot: 0,
              probablyNot: 0,
              unsure: 0,
              probably: 0,
              definitely: 0,
            },
            lecturerHelpful: {
              definitelyNot: 0,
              probablyNot: 0,
              unsure: 0,
              probably: 0,
              definitely: 0,
            },
            technicalSolutions: {
              bad: 0,
              average: 0,
              good: 0,
              veryGood: 0,
            },
            technicalSolutionTestimonials: [],
            generalTestimonials: [],
            type: universityClass.type,
            semesters: [],
          };
          classes.push(newClass);
        }
      }

      const foundClass = classes.find(
        (c) => c.nameOfClass === universityClass.nameOfClass
      )!;

      if (
        !foundClass.semesters.find(
          (s) => s.nameOfSemester === semester.nameOfSemester
        )
      ) {
        if (foundClass.type !== universityClass.type) {
          throw new Error(
            `Class type mismatch for ${universityClass.nameOfClass}`
          );
        }

        if (
          foundClass.type === "lecture" &&
          universityClass.type === "lecture"
        ) {
          const newSemester: OverallSemester = {
            id: uuid(),
            nameOfSemester: semester.nameOfSemester,
            technicalSolutionTestimonials: [],
            generalTestimonials: [],
            lectureAttendance: {
              none: 0,
              rarely: 0,
              irregularly: 0,
              regularly: 0,
            },
            finalPrepTime: {
              overTwoWeeks: 0,
              week: 0,
              severalDays: 0,
              oneDay: 0,
              none: 0,
            },
            wouldRecommendLecture: {
              definitelyNot: 0,
              probablyNot: 0,
              unsure: 0,
              probably: 0,
              definitely: 0,
            },
            wouldRecommendLecturer: {
              definitelyNot: 0,
              probablyNot: 0,
              unsure: 0,
              probably: 0,
              definitely: 0,
            },
            ectsFeedback: {
              "+3": 0,
              "+2": 0,
              "+1": 0,
              "0": 0,
              "-1": 0,
              "-2": 0,
            },
            technicalSolutions: {
              bad: 0,
              average: 0,
              good: 0,
              veryGood: 0,
            },
          };
          foundClass.semesters.push(newSemester);
        } else if (
          foundClass.type !== "lecture" &&
          universityClass.type !== "lecture"
        ) {
          const newSemester: RegularSemester = {
            id: uuid(),
            nameOfSemester: semester.nameOfSemester,
            technicalSolutionTestimonials: [],
            generalTestimonials: [],
            averagePrepTime: {
              overTwoDays: 0,
              twoDays: 0,
              oneDay: 0,
              twoHours: 0,
              lessThanHour: 0,
            },
            lectureHelpful: {
              definitelyNot: 0,
              probablyNot: 0,
              unsure: 0,
              probably: 0,
              definitely: 0,
            },
            lecturerHelpful: {
              definitelyNot: 0,
              probablyNot: 0,
              unsure: 0,
              probably: 0,
              definitely: 0,
            },
            technicalSolutions: {
              bad: 0,
              average: 0,
              good: 0,
              veryGood: 0,
            },
          };
          foundClass.semesters.push(newSemester);
        }
      }

      if (universityClass.type === "lecture" && foundClass.type === "lecture") {
        const foundSemester = foundClass.semesters.find(
          (s) => s.nameOfSemester === semester.nameOfSemester
        ) as OverallSemester;

        sumSameTypeObjects(
          foundSemester.lectureAttendance,
          universityClass.lectureAttendance
        );
        sumSameTypeObjects(
          foundSemester.finalPrepTime,
          universityClass.finalPrepTime
        );
        sumSameTypeObjects(
          foundSemester.wouldRecommendLecture,
          universityClass.wouldRecommendLecture
        );
        sumSameTypeObjects(
          foundSemester.wouldRecommendLecturer,
          universityClass.wouldRecommendLecturer
        );
        sumSameTypeObjects(
          foundSemester.ectsFeedback,
          universityClass.ectsFeedback
        );
        sumSameTypeObjects(
          foundSemester.technicalSolutions,
          universityClass.technicalSolutions
        );

        sumSameTypeObjects(
          foundClass.lectureAttendance,
          universityClass.lectureAttendance
        );
        sumSameTypeObjects(
          foundClass.finalPrepTime,
          universityClass.finalPrepTime
        );
        sumSameTypeObjects(
          foundClass.wouldRecommendLecture,
          universityClass.wouldRecommendLecture
        );
        sumSameTypeObjects(
          foundClass.wouldRecommendLecturer,
          universityClass.wouldRecommendLecturer
        );
        sumSameTypeObjects(
          foundClass.ectsFeedback,
          universityClass.ectsFeedback
        );
        sumSameTypeObjects(
          foundClass.technicalSolutions,
          universityClass.technicalSolutions
        );
      } else if (
        universityClass.type !== "lecture" &&
        foundClass.type !== "lecture"
      ) {
        const foundSemester = foundClass.semesters.find(
          (s) => s.nameOfSemester === semester.nameOfSemester
        ) as RegularSemester;

        sumSameTypeObjects(
          foundSemester.averagePrepTime,
          universityClass.averagePrepTime
        );
        sumSameTypeObjects(
          foundSemester.lectureHelpful,
          universityClass.lectureHelpful
        );
        sumSameTypeObjects(
          foundSemester.lecturerHelpful,
          universityClass.lecturerHelpful
        );
        sumSameTypeObjects(
          foundSemester.technicalSolutions,
          universityClass.technicalSolutions
        );

        sumSameTypeObjects(
          foundClass.averagePrepTime,
          universityClass.averagePrepTime
        );
        sumSameTypeObjects(
          foundClass.lectureHelpful,
          universityClass.lectureHelpful
        );
        sumSameTypeObjects(
          foundClass.lecturerHelpful,
          universityClass.lecturerHelpful
        );
        sumSameTypeObjects(
          foundClass.technicalSolutions,
          universityClass.technicalSolutions
        );
      }

      if (universityClass.type === "lecture") {
        sumSameTypeObjects(
          wouldRecommendLecturer,
          universityClass.wouldRecommendLecturer
        );
      } else {
        sumSameTypeObjects(lecturerHelpful, universityClass.lecturerHelpful);
      }

      for (const testimonial of universityClass.technicalSolutionTestimonials) {
        const newTestimonial: Testimonial = {
          id: uuid(),
          text: testimonial.text,
          universityClass: universityClass.nameOfClass,
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
      for (const testimonial of universityClass.generalTestimonials) {
        const newTestimonial: Testimonial = {
          id: uuid(),
          text: testimonial.text,
          universityClass: universityClass.nameOfClass,
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
