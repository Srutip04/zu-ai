"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressCircle({ value = 13, classes, pathColor = "#3CC28A", testId }) {
  return (
    <div className={`${classes} font-bold`} data-test-id={testId}>
      <CircularProgressbar
        value={(value / 20) * 100}
        text={`${value}/20`}
        styles={buildStyles({
          textColor: "#1E2026",
          pathColor: pathColor,
          trailColor: "#EAF0F2",
          strokeWidth: 8,
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
}

export default ProgressCircle;
