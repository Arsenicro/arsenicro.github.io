import useOpinions from "@/providers/OpinionsProvider/useOpinions";
import { Testimonial } from "../Testimonial/Testimonial";
import { CarouselItem } from "../ui/carousel";

export function Testimonials() {
  const { highlightedTestimonials } = useOpinions();
  return (
    <>
      {highlightedTestimonials.map((testimonial) => (
        <CarouselItem
          key={testimonial.id}
          className="md:basis-1/2 lg:basis-1/3 flex px-4"
        >
          <Testimonial
            testimonial={testimonial.text}
            universityClass={testimonial.universityClass}
            semester={testimonial.semester}
          />
        </CarouselItem>
      ))}
    </>
  );
}
