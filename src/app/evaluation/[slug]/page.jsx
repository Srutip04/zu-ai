"use client";
import CardDropdown from "@/components/common/CardDropdown";
import CircularProgress from "@/components/common/ProgressCircle";
import CommanCard from "@/components/common/CommonCard";
import PdfExpandCard from "@/components/evaluation/ExpandablePdfCard";
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

  const scoringArray=["Bad","Average","Good","Excellent"]
  const scoreColor=["#EB751F","#F9C94E","#3CC28A","#3CC28A"]

  useEffect(() => {
    setEvaluteData(filteredData[0]);
  }, []);

  const score=Math.ceil((evaluteData?.totalScore)/5)-1
  const scoreType=scoringArray[score]

  function Remark(){
    return(
      <CommanCard classes="rounded-3xl bg-[#FFFFFF] mt-0">
      <div className="flex  justify-between items-center p-2">
        <div>
          <h6 className="text-[#cbd0e4] font-semibold">Overall Score</h6>
          <h1 className="text-[#3D404B] font-extrabold text-2xl">
            Remark : <span style={{color:scoreColor[score]}}>{scoreType}</span>
          </h1>
          <span className="font-semibold text-xs text-[#98A1BB]"> Evaluated on {""}
            {evaluteData?.time}
          </span>
        </div>
        <CircularProgress
          value={evaluteData?.totalScore}
          classes={"w-20 h-20 text-xl"}
          pathColor={scoreColor[score]}
        />
      </div>
    </CommanCard>
    )
  }

  return (
    <div className="pt-10 pb-5 w-full lg:flex  gap-6">
      <div className="sm:hidden mb-4">
        <Remark/>
        </div>
      <div className="lg:w-[55%]">
      <PdfExpandCard data={evaluteData}/>
      </div>
      <div className="lg:w-[45%] mt-4">
        <div className="hidden sm:block">
        <Remark/>
        </div>
    
      
      {/*  */}
      <div className="flex flex-col">
      {evaluteData?.feedback.map((item,index) => {
        return <CardDropdown dataItem={item} criteria={index} key={nanoid()} />;
      })}
      <div className="w-[282px] hidden sm:flex ">

      <CommanCard>
        <span className="text-[#6947BF] font-extrabold hidden sm:block">

        Check detailed Evaluation →
        </span>
      </CommanCard>
      </div>
      </div>
      </div>
    </div>
  );
}
