export type OverallPrepTime = {
  overTwoWeeks: number;
  week: number;
  severalDays: number;
  oneDay: number;
  none: number;
};

export type WouldRecommend = {
  definitelyNot: number;
  probablyNot: number;
  unsure: number;
  probably: number;
  definitely: number;
};

export type EctsFeedback = {
  "+3": number;
  "+2": number;
  "+1": number;
  "0": number;
  "-1": number;
  "-2": number;
};

export type TechnicalSolutions = {
  bad: number;
  average: number;
  good: number;
  veryGood: number;
};

export type AveragePrepTime = {
  overTwoDays: number;
  twoDays: number;
  oneDay: number;
  twoHours: number;
  lessThanHour: number;
};

export type LectureAttendance = {
  none: number;
  rarely: number;
  irregularly: number;
  regularly: number;
};
