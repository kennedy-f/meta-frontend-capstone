import React from "react";
import {
  AboutSection,
  HeroSection,
  TestimonialsSection,
  WeekSpecialsSection,
} from "./sections";

export function Home() {
  return (
    <>
      <HeroSection />
      <WeekSpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </>
  );
}
