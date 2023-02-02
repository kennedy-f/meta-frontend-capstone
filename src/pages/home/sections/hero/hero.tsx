import React from "react";
import { Button } from "components/buttom";

export function HeroSection() {
  return (
    <div className={"container-xlg about-container bg-green"}>
      <article className={"container"}>
        <div className={"about"}>
          <h1 className={"subtitle"}> Little lemon </h1>
          <h2> Chicago </h2>
          <p className={"content"}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Button style={{ marginTop: 10 }}>Reserve a Table</Button>
        </div>
        <div className={"about-2"}>
          <img src={"/imgs/restauranfood.jpg"} alt={"restaurant food"} />
        </div>
      </article>
    </div>
  );
}
