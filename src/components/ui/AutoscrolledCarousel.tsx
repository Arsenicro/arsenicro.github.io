import Autoscroll from "embla-carousel-auto-scroll";
import React from "react";
import { Carousel } from "./carousel";

interface IProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function AutoscrolledCarousel({
  children,
  speed = 2,
  className,
}: IProps) {
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[
        Autoscroll({
          speed,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      className={className}
    >
      {children}
    </Carousel>
  );
}
