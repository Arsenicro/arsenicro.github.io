import { RegularClass } from "@/providers/OpinionsProvider/Opinions.type";
import { OpinionsChart } from "./OpinionsChart";
import {
  averagePrepTimeChartConfig,
  technicalSolutionsChartConfig,
  wouldRecommendChartConfig,
} from "./configs";

interface IProps {
  classData: RegularClass;
}

export default function RegularClassCharts({ classData }: IProps) {
  const averagePrepTimeChartData = Object.entries(
    classData.averagePrepTime
  ).map(([answer, responses]) => ({
    answer,
    responses,
  }));
  const lectureHelpfulChartData = Object.entries(classData.lectureHelpful).map(
    ([answer, responses]) => ({
      answer,
      responses,
    })
  );
  const lecturerHelpfulChartData = Object.entries(
    classData.lecturerHelpful
  ).map(([answer, responses]) => ({
    answer,
    responses,
  }));
  const technicalSolutionsChartData = Object.entries(
    classData.technicalSolutions
  ).map(([answer, responses]) => ({
    answer,
    responses,
  }));

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <OpinionsChart
        data={averagePrepTimeChartData}
        title="How much time did you spend preparing for the final?"
        config={averagePrepTimeChartConfig}
        className="w-[500px]"
      />
      <OpinionsChart
        data={lectureHelpfulChartData}
        title="How helpful was this lecture?"
        config={wouldRecommendChartConfig}
        className="w-[500px]"
      />
      <OpinionsChart
        data={lecturerHelpfulChartData}
        title="How helpful was this lecturer?"
        config={wouldRecommendChartConfig}
        className="w-[500px]"
      />
      <OpinionsChart
        data={technicalSolutionsChartData}
        title="How would you rate the technical solutions used in the class?"
        config={technicalSolutionsChartConfig}
        className="w-[500px]"
      />
    </div>
  );
}
