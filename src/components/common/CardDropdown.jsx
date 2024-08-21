"use client";
import React, { useState } from "react";
import CommonCard from "./CommonCard";
import FeedbackCard from "./feedbackCard";
import ProgressCircle from "./ProgressCircle";

function CardDropdown({ dataItem, criteria }) {
  const [open, setOpen] = useState(false);
  const Alphabet = ["A", "B", "C", "D", "E"];
  const criteriaType = Alphabet[criteria];
  const scoreColor = ["#EB751F", "#F9C94E", "#3CC28A", "#3CC28A"];

  const score = Math.ceil(dataItem?.score / 5) - 1;

  return (
    <CommonCard>
      <div className=" w-full">
        <div
          className="flex gap-4 justify-around items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <ProgressCircle
            value={dataItem?.score}
            classes={"w-20 h-20 text-xl"}
            pathColor={scoreColor[score]}
          />

          <div>
            <h6 className="text-[#98A1BB] font-bold text-xs">
              Criteria {criteriaType} :
            </h6>
            <h1 className="text-[#3D404B] font-bold xl:text-xl">
              {dataItem?.heading || "Understanding Knowledge Questions"}
            </h1>
          </div>
          <img
            src="/home/arrow.svg"
            alt="arrow"
            className={`${open && "rotate-180 transition-all duration-500"}`}
          />
        </div>
        {open && <div className="border-b-2 border-[#D6DFE4]  " />}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden  ${
            open
              ? "opacity-100 max-h-[600px] scroolbar overflow-y-scroll pt-5"
              : "opacity-0 max-h-0"
          }`}
        >
          <div className="pt-2">
            <span className="text-[#5B6170] font-semibold text-sm">
              {dataItem?.shortSummary}
              The essay identifies and focuses on the knowledge question
              regarding the resolvability of disputes over knowledge claims
              within disciplines.
            </span>
          </div>

          <FeedbackCard type="good" textData={dataItem?.strength} />
          <FeedbackCard type="average" textData={dataItem?.improvement} />
          <FeedbackCard type="bad" textData={dataItem?.bad} />
        </div>
      </div>
    </CommonCard>
  );
}

export default CardDropdown;
