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

interface ClassGeneral {
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

export interface OverallClass extends ClassGeneral, OverallChartValues {
  type: "lecture";
  semesters: OverallSemester[];
}

export interface RegularClass extends ClassGeneral, RegularChartValues {
  type: "laboratory" | "seminar" | "exercises";
  semesters: RegularSemester[];
}

type Class = OverallClass | RegularClass;

export interface Opinions {
  highlightedTestimonials: Testimonial[];
  wouldRecommendLecturer: WouldRecommend;
  lecturerHelpful: WouldRecommend;
  classes: Class[];
}
