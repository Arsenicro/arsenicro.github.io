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

interface ClassGeneral {
  nameOfClass: string;
  technicalSolutionTestimonials: Testimonial[];
  generalTestimonials: Testimonial[];
}

interface OverallClass extends ClassGeneral {
  type: "lecture";
  lectureAttendance: LectureAttendance;
  finalPrepTime: OverallPrepTime;
  wouldRecommendLecture: WouldRecommend;
  wouldRecommendLecturer: WouldRecommend;
  ectsFeedback: EctsFeedback;
  technicalSolutions: TechnicalSolutions;
}

interface RegularClass extends ClassGeneral {
  type: "laboratory" | "seminar" | "exercises";
  averagePrepTime: AveragePrepTime;
  lectureHelpful: WouldRecommend;
  lecturerHelpful: WouldRecommend;
  technicalSolutions: TechnicalSolutions;
}

type Class = OverallClass | RegularClass;

export interface SemesterData {
  nameOfSemester: string;
  classes: Class[];
}
