import useTestimonials from "@/providers/TestimonialsProvider/useTestimonials";
import { Testimonial } from "../Testimonial/Testimonial";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function TestimonialList({ className }: { className?: string }) {
  const { testimonials } = useTestimonials();

  return (
    <div className={className}>
      <Accordion type="single" collapsible>
        {Object.entries(testimonials).map(([semester, semesterData]) => (
          <AccordionItem key={semester} value={semester}>
            <AccordionTrigger>
              {semester} (
              {semesterData.reduce(
                (acc, course) => acc + course.testimonials.length,
                0
              )}
              )
            </AccordionTrigger>
            <AccordionContent className="pl-2 md:pl-5">
              <Accordion type="single" collapsible>
                {semesterData.map((course) => (
                  <AccordionItem key={course.name} value={course.name}>
                    <AccordionTrigger>
                      {course.name} ({course.testimonials.length})
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {course.testimonials.map((testimonial) => (
                          <Testimonial
                            key={testimonial.id}
                            testimonial={testimonial.text}
                            withoutScroll
                            sentiment={testimonial.sentiment}
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
