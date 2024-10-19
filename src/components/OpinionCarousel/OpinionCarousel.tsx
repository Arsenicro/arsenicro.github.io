import { CarouselContent } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import AutoscrolledCarousel from "../ui/AutoscrolledCarousel";
import { Testimonials } from "./Testimonials";

interface IProps {
  className?: string;
}

export function OpinionCarousel({ className }: IProps) {
  return (
    <AutoscrolledCarousel speed={0.5} className={cn("w-full", className)}>
      <CarouselContent>
        <Testimonials />
      </CarouselContent>
    </AutoscrolledCarousel>
  );
}
