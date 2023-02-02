import React from "react";

export function AboutSection() {
  return (
    <div className={"container-xlg"} style={{ height: 400 }}>
      <div
        className={"container"}
        style={{ color: "#000", display: "flex", flexDirection: "row" }}
      >
        <article style={{ width: "50%" }}>
          <h3 style={{ fontSize: 40, marginBottom: 0, color: "#000000" }}>
            Little Lemon
          </h3>
          <h4 style={{ fontSize: 20, marginTop: 0 }}> Chicago </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            esse reiciendis reprehenderit? Dolore dolorem doloribus dolorum
            excepturi itaque maxime modi non nulla possimus, quia quisquam saepe
            sed, veritatis voluptas voluptatum.
          </p>
        </article>
        <div style={{ width: "50%" }}>
          <div style={{ position: "relative" }}>
            <img
              src={"/imgs/Mario and Adrian b.jpg"}
              alt={"food"}
              height={250}
              width={350}
              style={{
                position: "absolute",
                top: 130,

                right: -15,
                borderRadius: 20,
              }}
            />
            <img
              src={"/imgs/Mario and Adrian A.jpg"}
              alt={"food"}
              height={250}
              width={350}
              style={{
                top: 30,
                position: "absolute",
                borderRadius: 20,
                left: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
