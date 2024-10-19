import { useContext } from "react";
import { TestimonialsContext } from "./TestimonialsProvider";

export default function useTestimonials() {
  const testimonialsContext = useContext(TestimonialsContext);
  if (!testimonialsContext) {
    throw new Error(
      "useTestimonials must be used within a TestimonialsProvider"
    );
  }
  return testimonialsContext;
}
