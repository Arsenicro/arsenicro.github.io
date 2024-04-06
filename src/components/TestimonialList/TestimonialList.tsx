import useTestimonials from "@/providers/TestimonialsProvider/useTestimonials";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TestimonialAccordion from "./TestimonialAccordion";

export default function TestimonialList({ className }: { className?: string }) {
  const testimonialsObject = useTestimonials();

  return (
    <div className={className}>
      <Tabs defaultValue="bySemester" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bySemester">By Semester</TabsTrigger>
          <TabsTrigger value="byClass">By Class</TabsTrigger>
        </TabsList>
        <TabsContent value="bySemester">
          <TestimonialAccordion
            values={testimonialsObject.testimonialsBySemester}
            outerOrder={testimonialsObject.semesters}
            innerOrder={testimonialsObject.classes}
            outerLength={testimonialsObject.semesterTestimonialsCount}
          />
        </TabsContent>
        <TabsContent value="byClass">
          <TestimonialAccordion
            values={testimonialsObject.testimonialsByClass}
            outerOrder={testimonialsObject.classes}
            innerOrder={testimonialsObject.semesters}
            outerLength={testimonialsObject.classTestimonialsCount}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
