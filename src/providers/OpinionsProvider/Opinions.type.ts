import {
  AveragePrepTime,
  EctsFeedback,
  LectureAttendance,
  OverallPrepTime,
  TechnicalSolutions,
  WouldRecommend,
} from "@/types/ChartValues.type";

interface Testimonial {
  id: string;
  text: string;
  universityClass: string;
  semester: string;
}

interface OpinionClassGeneral {
  id: string;
  nameOfClass: string;
  technicalSolutionTestimonials: Testimonial[];
  generalTestimonials: Testimonial[];
}

interface SemesterGeneral {
  id: string;
  nameOfSemester: string;
  technicalSolutionTestimonials: Testimonial[];
  generalTestimonials: Testimonial[];
}

interface OverallChartValues {
  lectureAttendance: LectureAttendance;
  finalPrepTime: OverallPrepTime;
  wouldRecommendLecture: WouldRecommend;
  wouldRecommendLecturer: WouldRecommend;
  ectsFeedback: EctsFeedback;
  technicalSolutions: TechnicalSolutions;
}

interface RegularChartValues {
  averagePrepTime: AveragePrepTime;
  lectureHelpful: WouldRecommend;
  lecturerHelpful: WouldRecommend;
  technicalSolutions: TechnicalSolutions;
}

export interface OverallSemester extends SemesterGeneral, OverallChartValues {}
export interface RegularSemester extends SemesterGeneral, RegularChartValues {}

export interface OverallOpinionClass
  extends OpinionClassGeneral,
    OverallChartValues {
  type: "lecture";
  semesters: OverallSemester[];
}

export const isOverallOpinionClass = (
  classData: OpinionClass
): classData is OverallOpinionClass => classData.type === "lecture";

export interface RegularOpinionClass
  extends OpinionClassGeneral,
    RegularChartValues {
  type: "laboratory" | "seminar" | "exercises";
  semesters: RegularSemester[];
}

export const isRegularOpinionClass = (
  classData: OpinionClass
): classData is RegularOpinionClass =>
  classData.type === "laboratory" ||
  classData.type === "seminar" ||
  classData.type === "exercises";

export type OpinionClass = OverallOpinionClass | RegularOpinionClass;

export interface Opinions {
  highlightedTestimonials: Testimonial[];
  wouldRecommendLecturer: WouldRecommend;
  lecturerHelpful: WouldRecommend;
  classes: OpinionClass[];
}
