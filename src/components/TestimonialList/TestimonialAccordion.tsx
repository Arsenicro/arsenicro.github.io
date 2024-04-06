import {
  ITestimonialObject,
  ITestimonialsCount,
} from "@/providers/TestimonialsProvider/Testimonials.type";
import { Testimonial } from "../Testimonial/Testimonial";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface IProps {
  values: ITestimonialObject;
  outerOrder: string[];
  innerOrder: string[];
  outerLength: ITestimonialsCount;
}

export default function TestimonialAccordion({
  values,
  outerOrder,
  innerOrder,
  outerLength,
}: IProps) {
  return (
    <Accordion type="single" collapsible>
      {outerOrder
        .filter((key) => values[key] !== undefined)
        .map((outerKey) => (
          <AccordionItem key={outerKey} value={outerKey}>
            <AccordionTrigger>
              {outerKey} ({outerLength[outerKey]})
            </AccordionTrigger>
            <AccordionContent className="pl-2 md:pl-5">
              <Accordion type="single" collapsible>
                {innerOrder
                  .filter((key) => values[outerKey][key] !== undefined)
                  .map((innerKey) => (
                    <AccordionItem key={innerKey} value={innerKey}>
                      <AccordionTrigger>
                        {innerKey} ({values[outerKey][innerKey].length})
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {values[outerKey][innerKey].map((testimonial) => (
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
  );
}
