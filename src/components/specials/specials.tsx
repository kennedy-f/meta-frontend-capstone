import React from "react";

export function Specials() {
  return (
    <div style={{ width: "30%", background: "#e4e7e5" }}>
      <img
        src={"/imgs/restauranfood.jpg"}
        alt={"greek salad"}
        height={300}
        style={{ borderRadius: "15px 15px 0 0", width: "100%" }}
      />
      <div style={{ padding: 20 }}>
        <div style={{ display: "flex" }}>
          <span style={{ color: "#000" }}>Greek salad</span>
          <span style={{ color: "#efb88d", marginLeft: "auto" }}>$12.99</span>
        </div>
        <p style={{ color: "#000", width: "100%" }}>
          The famous greek salad of crispy lettuce, peppers, olives, and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          courtons
        </p>
        <a
          href={"#order-a-delivery"}
          style={{ color: "#000", textDecoration: "none" }}
        >
          Order a delivery
        </a>
      </div>
    </div>
  );
}
