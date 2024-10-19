import BlogCards from "@/components/BlogCards/BlogCards";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: Index,
});

function Index() {
  return (
    <div className="px-10 pt-10 flex flex-grow">
      <BlogCards />
    </div>
  );
}
