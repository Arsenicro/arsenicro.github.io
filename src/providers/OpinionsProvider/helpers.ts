import { v4 as uuid } from "uuid";
import {
  Opinions,
  OverallOpinionClass,
  OverallSemester,
  RegularOpinionClass,
  RegularSemester,
} from "./Opinions.type";

export const classesSorter = (
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

export function sumSameTypeObjects<T extends Record<string, number>>(
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

export function shuffle<T>(array: T[]): T[] {
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

export const createOverallClass = (
  name: string,
  type: OverallOpinionClass["type"]
): OverallOpinionClass => ({
  id: uuid(),
  nameOfClass: name,
  lectureAttendance: { regularly: 0, irregularly: 0, rarely: 0, none: 0 },
  finalPrepTime: {
    none: 0,
    oneDay: 0,
    severalDays: 0,
    week: 0,
    overTwoWeeks: 0,
  },
  wouldRecommendLecture: {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  },
  wouldRecommendLecturer: {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  },
  ectsFeedback: { "+3": 0, "+2": 0, "+1": 0, "0": 0, "-1": 0, "-2": 0 },
  technicalSolutions: { veryGood: 0, good: 0, average: 0, bad: 0 },
  technicalSolutionTestimonials: [],
  generalTestimonials: [],
  type,
  semesters: [],
});

export const CreateRegularClass = (
  name: string,
  type: RegularOpinionClass["type"]
): RegularOpinionClass => ({
  id: uuid(),
  nameOfClass: name,
  averagePrepTime: {
    lessThanHour: 0,
    twoHours: 0,
    oneDay: 0,
    twoDays: 0,
    overTwoDays: 0,
  },
  lectureHelpful: {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  },
  lecturerHelpful: {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  },
  technicalSolutions: { veryGood: 0, good: 0, average: 0, bad: 0 },
  generalTestimonials: [],
  technicalSolutionTestimonials: [],
  type,
  semesters: [],
});

export const createOverallSemester = (name: string): OverallSemester => ({
  id: uuid(),
  nameOfSemester: name,
  technicalSolutionTestimonials: [],
  generalTestimonials: [],
  lectureAttendance: {
    regularly: 0,
    irregularly: 0,
    rarely: 0,
    none: 0,
  },
  finalPrepTime: {
    none: 0,
    oneDay: 0,
    severalDays: 0,
    week: 0,
    overTwoWeeks: 0,
  },
  wouldRecommendLecture: {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  },
  wouldRecommendLecturer: {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
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
    veryGood: 0,
    good: 0,
    average: 0,
    bad: 0,
  },
});

export const createRegularSemester = (name: string): RegularSemester => ({
  id: uuid(),
  nameOfSemester: name,
  technicalSolutionTestimonials: [],
  generalTestimonials: [],
  averagePrepTime: {
    lessThanHour: 0,
    twoHours: 0,
    oneDay: 0,
    twoDays: 0,
    overTwoDays: 0,
  },
  lectureHelpful: {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  },
  lecturerHelpful: {
    definitely: 0,
    probably: 0,
    unsure: 0,
    probablyNot: 0,
    definitelyNot: 0,
  },
  technicalSolutions: {
    veryGood: 0,
    good: 0,
    average: 0,
    bad: 0,
  },
});
