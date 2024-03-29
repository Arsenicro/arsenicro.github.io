export type ISentiment = "positive" | "neutral" | "negative";

export interface ITestimonialBase {
  id: string;
  text: string;
  highlighted: boolean;
  sentiment: ISentiment;
}

export interface ITestimonial extends ITestimonialBase {
  class: string;
  semester: string;
}

export interface ITestimonialsJson {
  [semester: string]: {
    name: string;
    testimonials: {
      text: string;
      highlighted: boolean;
      sentiment: string;
    }[];
  }[];
}

export interface ITestimonials {
  [semester: string]: {
    name: string;
    testimonials: {
      id: string;
      text: string;
      highlighted: boolean;
      sentiment: ISentiment;
    }[];
  }[];
}
