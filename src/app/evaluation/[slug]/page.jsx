"use client";
import CardDropdown from "@/components/common/CardDropdown";
import ProgressCircle from "@/components/common/ProgressCircle";
import CommonCard from "@/components/common/CommonCard";
import ExpandablePdfCard from "@/components/evaluation/ExpandablePdfCard";
import courseWorkStore from "@/store/courseWorkStore";
import { nanoid } from "nanoid";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const [evaluteData, setEvaluteData] = useState(null);
  const userID = useParams().slug;

  const data = courseWorkStore((state) => state.courseData);
  const filteredData = data.filter((item) => {
    return item.id == userID;
  });

  const scoringArray = ["Bad", "Average", "Good", "Excellent"];
  const scoreColor = ["#EB751F", "#F9C94E", "#3CC28A", "#3CC28A"];

  useEffect(() => {
    setEvaluteData(filteredData[0]);
  }, []);

  const score = Math.ceil(evaluteData?.totalScore / 5) - 1;
  const scoreType = scoringArray[score];

  function Remark() {
    return (
      <CommonCard classes="rounded-3xl bg-[#FFFFFF] mt-0" data-test-id="remark-card">
        <div className="flex justify-between items-center p-2">
          <div>
            <h6 className="text-[#cbd0e4] font-semibold" data-test-id="overall-score-label">
              Overall Score
            </h6>
            <h1 className="text-[#3D404B] font-extrabold text-2xl" data-test-id="remark-text">
              Remark: <span style={{ color: scoreColor[score] }}>{scoreType}</span>
            </h1>
            <span className="font-semibold text-xs text-[#98A1BB]" data-test-id="evaluated-time">
              Evaluated on {evaluteData?.time}
            </span>
          </div>
          <ProgressCircle
            value={evaluteData?.totalScore}
            classes={"w-20 h-20 text-xl"}
            pathColor={scoreColor[score]}
            data-test-id="progress-circle"
          />
        </div>
      </CommonCard>
    );
  }

  return (
    <div className="pt-10 pb-5 w-full lg:flex gap-6" data-test-id="evaluation-page">
      <div className="sm:hidden mb-4" data-test-id="mobile-remark">
        <Remark />
      </div>
      <div className="lg:w-[55%]" data-test-id="pdf-card-section">
        <ExpandablePdfCard data={evaluteData} data-test-id="expandable-pdf-card" />
      </div>
      <div className="lg:w-[45%] mt-4" data-test-id="feedback-section">
        <div className="hidden sm:block" data-test-id="desktop-remark">
          <Remark />
        </div>
        <div className="flex flex-col" data-test-id="feedback-list">
          {evaluteData?.feedback.map((item, index) => {
            return (
              <CardDropdown
                dataItem={item}
                criteria={index}
                key={nanoid()}
                data-test-id={`feedback-item-${index}`}
              />
            );
          })}
          <div className="w-[282px] hidden sm:flex" data-test-id="detailed-evaluation-link">
            <CommonCard>
              <span className="text-[#6947BF] font-extrabold hidden sm:block">
                Check detailed Evaluation →
              </span>
            </CommonCard>
          </div>
        </div>
      </div>
    </div>
  );
}
