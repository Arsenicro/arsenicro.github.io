import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

interface IProps {
  testimonial: string;
  universityClass?: string;
  semester?: string;
  withoutScroll?: boolean;
  className?: string;
}

export function Testimonial({
  testimonial,
  withoutScroll,
  universityClass,
  semester,
  className,
}: IProps) {
  return (
    <figure className={cn("max-w-prose mx-auto text-center", className)}>
      <svg
        className="w-10 h-10 mx-auto mb-3 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <ScrollArea className={cn([!withoutScroll && "h-[200px]"])}>
          <p className="p-2">{testimonial}</p>
        </ScrollArea>
      </blockquote>
      {(universityClass || semester) && (
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
            {universityClass && (
              <cite className="pe-3 font-medium text-white">
                {universityClass}
              </cite>
            )}
            {semester && (
              <cite className="ps-3 text-sm text-gray-400">{semester}</cite>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  );
}
