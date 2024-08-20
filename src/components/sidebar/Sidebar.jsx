"use client";
import { useState } from "react";
import Sideicons from "./SidebarIcons";
import Information from "../common/InfoBox";

function Sidebar() {
  const [sideOpen, setSideOpen] = useState(false);
  const [active, setActive] = useState(0);

  const svgicons = ["icon1", "icon2", "icon3", "icon4"];

  function SideOne() {
    return (
      <div
        className={`w-[120px] md:w-[68px] md:p-2 h-full fixed top-0 md:left-0 transition-all duration-200    ${
          sideOpen
            ? "right-0 z-20 pt-[60px] animate-fade-in-side"
            : "-right-48 "
        }`}
      >
        <div className="flex justify-between  items-center flex-col gap-4 bg-[#F8FAFC] sm:rounded-sm h-full">
          <div className="mt-1 flex flex-col items-center gap-4">
            <Sideicons
              src={"/zuailogo.svg"}
              alt={"zuai"}
              style={"h-12 w-12 hidden md:block"}
              link="/"
            />
            {svgicons.map((item, index) => {
              return (
                <div key={index} onClick={() => setActive(index)}>
                  <Sideicons
                    src={`/sidebaricons/${item}.svg`}
                    alt={item}
                    style={`h-9 w-9   ${
                      active !== index
                        ? "bg-white hover:bg-[#6947bfbd]"
                        : "bg-[#6947bfbd] fill-[#FFFFFF]"
                    }`}
                    link="/"
                  />
                </div>
              );
            })}
          </div>
          <Information classs="md:hidden" />
          <Sideicons
            src={"/sidebaricons/human.svg"}
            alt={"human"}
            style={"mb-2 bg-[white]"}
          />
        </div>
      </div>
    );
  }

  function HeadOne() {
    return (
      <div className={`fixed h-[60px] w-full top-0 right-0 z-30 md:hidden `}>
        <div
          className={
            "bg-[#F8FAFC] flex justify-between  items-center gap-4  h-full p-6"
          }
        >
          <Sideicons
            src={"/zuailogo.svg"}
            alt={"zuai"}
            style={"h-12 w-12"}
            link="/"
          />
          <div onClick={() => setSideOpen(!sideOpen)}>
            <img
              src={
                !sideOpen ? "/sidebaricons/hamburger.svg" : "/home/cross.svg"
              }
              alt="hamburger"
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <SideOne />
      <HeadOne />
    </>
  );
}

export default Sidebar;
