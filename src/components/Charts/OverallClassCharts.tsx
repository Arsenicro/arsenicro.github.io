import { OverallClass } from "@/providers/OpinionsProvider/Opinions.type";
import { OpinionsChart } from "./OpinionsChart";
import {
  attendanceChartConfig,
  finalPrepTimeChartConfig,
  technicalSolutionsChartConfig,
  wouldRecommendChartConfig,
} from "./configs";

interface IProps {
  classData: OverallClass;
}

export default function OverallClassCharts({ classData }: IProps) {
  const lectureAttendanceChartData = Object.entries(
    classData.lectureAttendance
  ).map(([answer, responses]) => ({
    answer,
    responses,
  }));
  const finalPrepTimeChartData = Object.entries(classData.finalPrepTime).map(
    ([answer, responses]) => ({
      answer,
      responses,
    })
  );
  const wouldRecommendLectureChartData = Object.entries(
    classData.wouldRecommendLecture
  ).map(([answer, responses]) => ({
    answer,
    responses,
  }));
  const wouldRecommendLecturerChartData = Object.entries(
    classData.wouldRecommendLecturer
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
        data={lectureAttendanceChartData}
        title="How often did you attend lectures?"
        config={attendanceChartConfig}
        className="w-[500px]"
      />
      <OpinionsChart
        data={finalPrepTimeChartData}
        title="How much time did you spend preparing for the final?"
        config={finalPrepTimeChartConfig}
        className="w-[500px]"
      />
      <OpinionsChart
        data={wouldRecommendLectureChartData}
        title="Would you recommend this lecture?"
        config={wouldRecommendChartConfig}
        className="w-[500px]"
      />
      <OpinionsChart
        data={wouldRecommendLecturerChartData}
        title="Would you recommend this lecturer?"
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
