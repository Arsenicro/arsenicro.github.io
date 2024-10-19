export type ISentiment = "positive" | "neutral" | "negative";

export interface ITestimonialBase {
  id: string;
  text: string;
  highlighted: boolean;
  sentiment: ISentiment;
}

export interface ITestimonial extends ITestimonialBase {
  nameOfClass: string;
  nameOfSemester: string;
}

export type ITestimonialsJson = {
  nameOfSemester: string;
  classes: {
    nameOfClass: string;
    testimonials: {
      text: string;
      highlighted: boolean;
      sentiment: string;
    }[];
  }[];
}[];

export interface ITestimonialObject {
  [outerKey: string]: {
    [innerKey: string]: ITestimonialBase[];
  };
}

export interface ITestimonialsCount {
  [key: string]: number;
}
