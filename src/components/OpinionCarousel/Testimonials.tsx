import useTestimonials from "@/providers/TestimonialsProvider/useTestimonials";
import { Testimonial } from "../Testimonial/Testimonial";
import { CarouselItem } from "../ui/carousel";

export function Testimonials() {
  const { highlightedTestimonials } = useTestimonials();
  return (
    <>
      {highlightedTestimonials.map((testimonial) => (
        <CarouselItem
          key={testimonial.id}
          className="md:basis-1/2 lg:basis-1/3 flex px-4"
        >
          <Testimonial
            testimonial={testimonial.text}
            sentiment={testimonial.sentiment}
            universityClass={testimonial.class}
            semester={testimonial.semester}
          />
        </CarouselItem>
      ))}
    </>
  );
}
