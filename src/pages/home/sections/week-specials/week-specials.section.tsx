import React from "react";
import { Button } from "../../../../components/buttom";
import { Specials } from "../../../../components/specials/specials";

export function WeekSpecialsSection() {
  return (
    <div className={"container-xlg"} style={{ marginTop: "200px" }}>
      <div className={"container"} style={{ flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ color: "black", fontSize: 44, padding: 0, margin: 10 }}>
            This weeks specials!
          </h2>
          <Button> Online Menu </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 50,
            marginTop: 30,
          }}
        >
          <Specials />
          <Specials />
          <Specials />
        </div>
      </div>
    </div>
  );
}
