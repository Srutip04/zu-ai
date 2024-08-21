"use client";
import React, { useState } from "react";
import CommonCard from "./CommonCard";
import FeedbackCard from "./FeedbackCard";
import ProgressCircle from "./ProgressCircle";

function CardDropdown({ dataItem, criteria }) {
  const [open, setOpen] = useState(false);
  const Alphabet = ["A", "B", "C", "D", "E"];
  const criteriaType = Alphabet[criteria];
  const scoreColor = ["#EB751F", "#F9C94E", "#3CC28A", "#3CC28A"];

  const score = Math.ceil(dataItem?.score / 5) - 1;

  return (
    <CommonCard data-test-id={`common-card-${criteriaType}`}>
      <div className="w-full" data-test-id={`card-dropdown-${criteriaType}`}>
        <div
          className="flex gap-4 justify-around items-center cursor-pointer"
          onClick={() => setOpen(!open)}
          data-test-id={`dropdown-toggle-${criteriaType}`}
        >
          <ProgressCircle
            value={dataItem?.score}
            classes={"w-20 h-20 text-xl"}
            pathColor={scoreColor[score]}
            data-test-id={`progress-circle-${criteriaType}`}
          />

          <div data-test-id={`criteria-heading-${criteriaType}`}>
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
            data-test-id={`dropdown-arrow-${criteriaType}`}
          />
        </div>
        {open && <div className="border-b-2 border-[#D6DFE4]" />}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            open
              ? "opacity-100 max-h-[600px] scrollbar overflow-y-scroll pt-5"
              : "opacity-0 max-h-0"
          }`}
          data-test-id={`dropdown-content-${criteriaType}`}
        >
          <div className="pt-2">
            <span
              className="text-[#5B6170] font-semibold text-sm"
              data-test-id={`short-summary-${criteriaType}`}
            >
              {dataItem?.shortSummary}
              The essay identifies and focuses on the knowledge question
              regarding the resolvability of disputes over knowledge claims
              within disciplines.
            </span>
          </div>

          <FeedbackCard
            type="good"
            textData={dataItem?.strength}
            data-test-id={`feedback-good-${criteriaType}`}
          />
          <FeedbackCard
            type="average"
            textData={dataItem?.improvement}
            data-test-id={`feedback-average-${criteriaType}`}
          />
          <FeedbackCard
            type="bad"
            textData={dataItem?.bad}
            data-test-id={`feedback-bad-${criteriaType}`}
          />
        </div>
      </div>
    </CommonCard>
  );
}

export default CardDropdown;
