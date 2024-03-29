import useTestimonials from "@/providers/TestimonialsProvider/useTestimonials";
import _ from "lodash";
import { useState } from "react";
import { Testimonial } from "../Testimonial/Testimonial";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Filter from "./Filter";

export default function TestimonialList({ className }: { className?: string }) {
  const { testimonials, semesters, classes } = useTestimonials();
  const [filters, setFilters] = useState<{
    class: string;
    sentiment: string;
  }>({
    class: "",
    sentiment: "",
  });

  const testimonialsBySemester = _.groupBy(
    testimonials.filter(
      (testimonial) =>
        (!filters.class || testimonial.class === filters.class) &&
        (!filters.sentiment || testimonial.sentiment === filters.sentiment)
    ),
    "semester"
  );

  return (
    <div className={className}>
      <div className="flex flex-col gap-1 flex-wrap pb-5 md:flex-row md:gap-5 md:justify-end">
        <Filter
          value={filters.class}
          setValue={(value) => setFilters({ ...filters, class: value })}
          placeholder="Filter by Class"
          options={classes}
        />
        <Filter
          value={filters.sentiment}
          setValue={(value) => setFilters({ ...filters, sentiment: value })}
          placeholder="Filter by Sentiment"
          options={["positive", "neutral", "negative"]}
          getOptionLabel={(option) => _.capitalize(option)}
        />
      </div>
      <Accordion type="single" collapsible>
        {semesters.map((semester) => (
          <AccordionItem key={semester} value={semester}>
            <AccordionTrigger>
              {semester} ({testimonialsBySemester[semester]?.length || 0})
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {testimonialsBySemester[semester]?.map((testimonial) => (
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
    </div>
  );
}
