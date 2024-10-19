import { ChartConfig } from "../ui/chart";

export const wouldRecommendChartConfig = {
  definitely: {
    label: "Definitely",
    color: "hsl(var(--chart-5))",
  },
  probably: {
    label: "Probably",
    color: "hsl(var(--chart-4))",
  },
  unsure: {
    label: "Unsure",
    color: "hsl(var(--chart-3))",
  },
  probablyNot: {
    label: "Probably Not",
    color: "hsl(var(--chart-2))",
  },
  definitelyNot: {
    label: "Definitely Not",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const attendanceChartConfig = {
  regularly: {
    label: "Regularly",
    color: "hsl(var(--chart-5))",
  },
  irregularly: {
    label: "Irregularly",
    color: "hsl(var(--chart-4))",
  },
  rarely: {
    label: "Rarely",
    color: "hsl(var(--chart-3))",
  },
  none: {
    label: "Never",
    color: "hsl(var(--chart-1))",
  },
};

export const finalPrepTimeChartConfig = {
  none: {
    label: "None",
    color: "hsl(var(--chart-5))",
  },
  oneDay: {
    label: "One Day",
    color: "hsl(var(--chart-4))",
  },
  severalDays: {
    label: "Several Days",
    color: "hsl(var(--chart-3))",
  },
  week: {
    label: "Week",
    color: "hsl(var(--chart-2))",
  },
  overTwoWeeks: {
    label: "Over Two Weeks",
    color: "hsl(var(--chart-1))",
  },
};

export const technicalSolutionsChartConfig = {
  veryGood: {
    label: "Very Good",
    color: "hsl(var(--chart-5))",
  },
  good: {
    label: "Good",
    color: "hsl(var(--chart-4))",
  },
  average: {
    label: "Average",
    color: "hsl(var(--chart-3))",
  },
  bad: {
    label: "Bad",
    color: "hsl(var(--chart-1))",
  },
};

export const averagePrepTimeChartConfig = {
  lessThanHour: {
    label: "Less Than Hour",
    color: "hsl(var(--chart-5))",
  },
  twoHours: {
    label: "Two Hours",
    color: "hsl(var(--chart-4))",
  },
  oneDay: {
    label: "One Day",
    color: "hsl(var(--chart-3))",
  },
  twoDays: {
    label: "Two Days",
    color: "hsl(var(--chart-2))",
  },
  overTwoDays: {
    label: "Over Two Days",
    color: "hsl(var(--chart-1))",
  },
};
