import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./testimonial-card.css";

export function TestimonialCard() {
  const FilledStart = () => {
    return <AiFillStar color={"#fddb00"} fontSize={24} />;
  };

  return (
    <div className={"testimonial-card"}>
      <div style={{ marginBottom: 8 }}>
        <FilledStart />
        <FilledStart />
        <FilledStart />
        <FilledStart />
        <FilledStart />
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <div>
          <img
            src={
              "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            }
            alt={"John doe "}
            width={60}
            height={60}
            style={{ borderRadius: 30 }}
          />
        </div>
        <div>
          <p style={{ color: "black", fontSize: 16 }}>John doe</p>
        </div>
      </div>
      <article>
        <p className={"testimony"}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </article>
    </div>
  );
}
