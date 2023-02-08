import { render, screen } from "@testing-library/react";
import React from "react";
import { AboutSection } from "./about.section";

describe("about.section", () => {
  it("Should render", () => {
    const { container } = render(<AboutSection />);
    expect(container).toMatchSnapshot();
  });

  it("Should render texts", () => {
    render(<AboutSection />);
    expect(screen.getByText(/Little Lemon/)).toBeInTheDocument();
    expect(screen.getByText(/Chicago/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipisicing elit./
      )
    ).toBeInTheDocument();
  });
});
