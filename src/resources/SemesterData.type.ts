import {
  AveragePrepTime,
  EctsFeedback,
  LectureAttendance,
  OverallPrepTime,
  TechnicalSolutions,
  WouldRecommend,
} from "@/types/ChartValues.type";

interface Testimonial {
  text: string;
  highlighted: boolean;
}

interface SemesterClassGeneral {
  nameOfClass: string;
  shouldExcludeFromOverall?: boolean;
  technicalSolutionTestimonials: Testimonial[];
  generalTestimonials: Testimonial[];
}

interface OverallSemesterClass extends SemesterClassGeneral {
  type: "lecture";
  lectureAttendance: LectureAttendance;
  finalPrepTime: OverallPrepTime;
  wouldRecommendLecture: WouldRecommend;
  wouldRecommendLecturer: WouldRecommend;
  ectsFeedback: EctsFeedback;
  technicalSolutions: TechnicalSolutions;
}

export const isOverallSemesterClass = (
  classData: SemesterClass
): classData is OverallSemesterClass => classData.type === "lecture";

interface RegularSemesterClass extends SemesterClassGeneral {
  type: "laboratory" | "seminar" | "exercises";
  averagePrepTime: AveragePrepTime;
  lectureHelpful: WouldRecommend;
  lecturerHelpful: WouldRecommend;
  technicalSolutions: TechnicalSolutions;
}

export const isRegularSemesterClass = (
  classData: SemesterClass
): classData is RegularSemesterClass =>
  classData.type === "laboratory" ||
  classData.type === "seminar" ||
  classData.type === "exercises";

export type SemesterClass = OverallSemesterClass | RegularSemesterClass;

export interface SemesterData {
  nameOfSemester: string;
  classes: SemesterClass[];
}
