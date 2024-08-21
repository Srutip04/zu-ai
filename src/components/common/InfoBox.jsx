import React from "react";
import CommonCard from "./CommonCard";

function InfoBox({ classs = "hidden md:block absolute md:top-0 right-2 lg-right-5" }) {
  function RoundedCard({ src, text }) {
    return (
      <CommonCard>
        <div className="flex items-center gap-2 rounded-2xl">
          <img src={`/home/info/${src}.svg`} alt="src" height={20} width={20} />
          <span className="text-[#5B6170] font-extrabold text-sm">{text}</span>
        </div>
      </CommonCard>
    );
  }
  function Allround({ src }) {
    return (
      <CommonCard classes="w-14 h-14 rounded-full bg-[#FFFFFFA3] mt-4 flex items-center justify-center p-0 cursor-pointer hover:bg-violet-100 hover:animate-pulse">
        <div className="bg-[#FFFFFF] w-full h-full rounded-full flex items-center justify-center shadow-md shadow-[#EAF0F2] ">
          <img
            src={`/home/info/${src}.svg`}
            alt="src"
            className="p-1 w-full h-full"
          />
        </div>
      </CommonCard>
    );
  }
  return (
    <div className={`${classs}`}>
      <div className=" flex flex-col items-center justify-center  ">
        <RoundedCard src="coin" text="120" />
        <RoundedCard src="streak" text="24" />
        <Allround src={"calender"} />
        <Allround src={"pagecard"} />
      </div>
    </div>
  );
}

export default InfoBox;
