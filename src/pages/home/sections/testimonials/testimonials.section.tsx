import React from "react";
import { TestimonialCard } from "pages/home/sections/testimonials/testimonial-card";

export function TestimonialsSection() {
  return (
    <div
      className={"container-xlg"}
      style={{ background: "rgba(227,227,227,0.65)", height: 600 }}
    >
      <div
        className={"container "}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <h2 style={{ color: "black", textAlign: "center", fontSize: 48 }}>
            Testimonials
          </h2>
          <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
}
