import { OpinionCarousel } from "@/components/OpinionCarousel/OpinionCarousel";
import TestimonialList from "@/components/TestimonialList/TestimonialList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teaching")({
  component: Index,
});

function Index() {
  return (
    <div className="px-10 pt-10">
      <OpinionCarousel className="pb-[200px]" />
      <TestimonialList />
    </div>
  );
}
