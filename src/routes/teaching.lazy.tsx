import { wouldRecommendChartConfig } from "@/components/Charts/configs";
import { OpinionsChart } from "@/components/Charts/OpinionsChart";
import OverallClassCharts from "@/components/Charts/OverallClassCharts";
import RegularClassCharts from "@/components/Charts/RegularClassCharts";
import { OpinionCarousel } from "@/components/OpinionCarousel/OpinionCarousel";
import { Testimonial } from "@/components/Testimonial/Testimonial";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useOpinions from "@/providers/OpinionsProvider/useOpinions";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/teaching")({
  component: Index,
});

function Index() {
  const { lecturerHelpful, wouldRecommendLecturer, classes } = useOpinions();

  const wouldRecommendLecturerData = Object.entries(wouldRecommendLecturer).map(
    ([answer, responses]) => ({ answer, responses })
  );
  const lecturerHelpfulData = Object.entries(lecturerHelpful).map(
    ([answer, responses]) => ({ answer, responses })
  );

  return (
    <div className="px-10 pt-10">
      <OpinionCarousel className="mb-[100px]" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-[100px]">
        <OpinionsChart
          data={wouldRecommendLecturerData}
          config={wouldRecommendChartConfig}
          title="Would I recommend this lecturer?"
        />
        <OpinionsChart
          data={lecturerHelpfulData}
          config={wouldRecommendChartConfig}
          title="Was this lecturer helpful?"
        />
      </div>

      <Accordion type="single" collapsible>
        {classes.map((classData) => (
          <AccordionItem key={classData.id} value={classData.id}>
            <AccordionTrigger>{classData.nameOfClass}</AccordionTrigger>
            <AccordionContent className="p-10">
              {classData.type === "lecture" ? (
                <OverallClassCharts classData={classData} />
              ) : (
                <RegularClassCharts classData={classData} />
              )}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 mt-[50px]">
                {classData.technicalSolutionTestimonials.map((testimonial) => (
                  <Testimonial
                    key={testimonial.id}
                    testimonial={testimonial.text}
                    semester={testimonial.semester}
                    className="min-w-[300px]"
                  />
                ))}
                {classData.generalTestimonials.map((testimonial) => (
                  <Testimonial
                    key={testimonial.id}
                    testimonial={testimonial.text}
                    semester={testimonial.semester}
                    className="min-w-[300px]"
                  />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
