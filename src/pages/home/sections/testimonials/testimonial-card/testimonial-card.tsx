import { Grid, Paper } from "@mui/material";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./testimonial-card.css";

export function TestimonialCard() {
  const FilledStart = () => {
    return <AiFillStar color={"#fddb00"} fontSize={24} />;
  };

  return (
    <Grid item xs={12} md={3}>
      <Paper sx={{ padding: 2 }}>
        <Grid container direction={"column"}>
          <Grid item sx={{ mb: 2 }}>
            <FilledStart />
            <FilledStart />
            <FilledStart />
            <FilledStart />
            <FilledStart />
          </Grid>
          <Grid item container gap={2}>
            <Grid item>
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
            </Grid>
            <Grid item>
              <p style={{ color: "black", fontSize: 16 }}>John doe</p>
            </Grid>
          </Grid>
          <Grid item>
            <article>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu"
              </p>
            </article>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
