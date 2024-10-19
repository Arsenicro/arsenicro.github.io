import { ITestimonialBase, ITestimonialsCount } from "./Testimonials.type";

export function countTestimonials(
  obj: Record<string, Record<string, ITestimonialBase[]>>
) {
  return Object.entries(obj).reduce((acc, [key, inner]) => {
    acc[key] = Object.values(inner).reduce(
      (acc, testimonials) => acc + testimonials.length,
      0
    );
    return acc;
  }, {} as ITestimonialsCount);
}
