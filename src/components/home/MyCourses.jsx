"use client";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import courseWorkStore from "@/store/courseWorkStore";
import CourseCardSkeleton from "./CourseCardSkeleton";

function MyCourseWork() {
  const [coursedata, setcoursedata] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const data = courseWorkStore((state) => state.courseData);
  useEffect(() => {
    setcoursedata(data);
  }, [data]);
  const visibleCourses = showAll ? coursedata : coursedata?.slice(0, 2);

  return (
    <div className="mt-8 transition-all">
      <h5 className="text-xl mb-3 text-[#5B6170] font-semibold">
        My Coursework
      </h5>
      <div className={`flex flex-wrap gap-4`}>
        {visibleCourses?.length > 0 ? (
          <>
            {visibleCourses.map((course) => {
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
      {visibleCourses?.length > 1 && (
        <div
          className="text-center text-[#98A1BB] font-bold text-xs hover:text-[#6947BF]  mt-4 cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "view less" : "view all"}
        </div>
      )}
    </div>
  );
}

export default MyCourseWork;
