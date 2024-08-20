"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import courseWorkStore from "@/store/courseWorkStore";
import CourseCardSkeleton from "./CourseCardSkeleton";

function ExploreCourseWork() {
  const [currentActive, setCurrentActive] = useState(0);
  let [coursedata, setcoursedata] = useState(null);
  const options = [
    "All",
    "research paper",
    "Term paper",
    "Non-Fiction",
    "Thesis",
  ];
  const filterCourseData = courseWorkStore((state) => state.filterCourse);
  const selectedCourseWork = courseWorkStore(
    (state) => state.selectedCourseWork
  );

  const data = courseWorkStore((state) => state.courseData);
  useEffect(() => {
    setcoursedata(data);
  }, [data]);
  if (currentActive != 0) {
    coursedata = coursedata?.filter((filter) => {
      return filter.CourseType == selectedCourseWork;
    });
  }

  useEffect(() => {
    filterCourseData(options[currentActive]);
  }, [currentActive]);

  return (
    <div className="mt-8">
      <h5 className="text-xl text-[#5B6170] font-semibold mb-3">
        Explore coursework
      </h5>

      <div className="flex items-center sm:gap-4 flex-wrap mb-4 ">
        {options.map((opt, index) => {
          return (
            <div
              className={`p-4  font-bold text-xs rounded-xl cursor-pointer  ${
                currentActive == index
                  ? "bg-[#FFFFFF] text-[#6947BF] transition-colors ease-linear duration-500 "
                  : "text-[#98A1BB]"
              }`}
              key={index}
              onClick={() => setCurrentActive(index)}
            >
              {opt}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4  transition-opacity duration-500 ease-in-out ">
        {coursedata?.length > 0 ? (
          <>
            {coursedata.map((course) => {
              return <CourseCard coursedata={course} key={course?.id} />;
            })}
          </>
        ) : (
          <>
            <CourseCardSkeleton />
            <CourseCardSkeleton />
          </>
        )}
      </div>
    </div>
  );
}

export default ExploreCourseWork;
