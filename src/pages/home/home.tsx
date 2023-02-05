import React from "react";
import {
  AboutSection,
  HeroSection,
  TestimonialsSection,
  WeekSpecialsSection,
} from "./sections";

export function Home() {
  return (
    <main>
      <HeroSection />
      <WeekSpecialsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
}
