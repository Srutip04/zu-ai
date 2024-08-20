"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import courseWorkStore from "@/store/courseWorkStore";
import SelectDropdown from "../common/Select";
import Upload from "./FileUpload";
import UploadingAnimation from "./UploadAnimation";
import Error from "./ErrorDisplay";

function EvaluateCourse() {
  const [fileData, setFileData] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [errors, setErrors] = useState({
    file: "",
    filesize: "",
    CourseType: "",
    subject: "",
    title: "",
  });
  const router = useRouter();

  const [courseWork, setCourseWork] = useState({
    id: "",
    fileName: fileData,
    CourseType: "",
    subject: "",
    title: "",
    feedback: [
      {
        strength: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        improvement: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        weakness: [""],
        score: 7,
        heading: "UnderStanding Knowledge Questions",
        shortSummary:
          "The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.",
      },
      {
        strength: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        improvement: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        weakness: [""],
        score: 5,
        heading: "UnderStanding Knowledge Questions",
        shortSummary:
          "The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.",
      },
      {
        strength: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        improvement: [
          "Demonstrates a good understanding of the prescribed title and the associated knowledge questions.",
          "Addresses the nature of disputes in both the Natural Sciences and Human Sciences effectively.",
        ],
        weakness: [""],
        score: 3,
        heading: "UnderStanding Knowledge Questions",
        shortSummary:
          "The essay identifies and focuses on the knowledge question regarding the resolvability of disputes over knowledge claims within disciplines.",
      },
    ],
    time: "",
    totalScore: 0,
    score: [],
  });

  const addCourse = courseWorkStore((state) => state.addCourse);

  const montharr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const courseTypeOptions = [
    { value: "research paper", label: "Research Paper" },
    { value: "term paper", label: "Term Paper" },
    { value: "non-fiction", label: "Non-Fiction" },
    { value: "thesis", label: "Thesis" },
  ];

  const subjectOptions = [
    { value: "physics", label: "Physics" },
    { value: "maths", label: "Maths" },
    { value: "computer", label: "Computer" },
    { value: "javascript", label: "JavaScript" },
  ];

  const uploadeDoc = (e) => {
    const file = e.target.files[0];
    if (!sizeCheck(file)) {
      setFileData(file.name);
      setCourseWork((prevCourseWork) => ({
        ...prevCourseWork,
        fileName: file.name,
      }));
    }
  };

  const resetUpload = () => {
    setFileData("");
    setErrors((prevErrors) => ({ ...prevErrors, file: "" }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0 && !sizeCheck(droppedFiles[0])) {
      setFileData(droppedFiles[0].name);
      setCourseWork((prevCourseWork) => ({
        ...prevCourseWork,
        fileName: droppedFiles[0].name,
      }));
    }
  };

  const sizeCheck = (file) => {
    const fileSizeInMB = file.size / (1024 * 1024); // Convert size to MB
    setErrors((prevErrors) => ({ ...prevErrors, file: "" }));

    if (fileSizeInMB > 25) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        filesize: "File size exceeds 25 MB.",
      }));
      PDFUploader(file);
      return true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        filesize: "",
      }));
      return false;
    }
  };

  const isCourseWorkBlank = (courseWork) => {
    let errorMessages = {};
    if (!courseWork.fileName) {
      errorMessages.file = "File is required.";
    }
    if (!courseWork.CourseType)
      errorMessages.CourseType = "Course Type is required.";
    if (!courseWork.subject) errorMessages.subject = "Subject is required.";
    if (!courseWork.title) errorMessages.title = "Title is required.";
    setErrors((prevErrors) => ({ ...prevErrors, ...errorMessages }));

    return Object.keys(errorMessages).length > 0;
  };

  const onOptionChange = (e) => {
    const { name, value } = e.target;
    setCourseWork((prevCourseWork) => ({
      ...prevCourseWork,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const evaluateScore = () => {
    if (!isCourseWorkBlank(courseWork)) {
      let obj = new Date();
      let day = obj.getUTCDate();
      let month = obj.getUTCMonth();
      let year = obj.getUTCFullYear();
      const nanoidd = nanoid();

      setShowLoading(true);
      
      setTimeout(() => {
        addCourse({
          ...courseWork,
          id: nanoidd,
          totalScore: 13,
          score: [7, 5, 3],
          time: `${day} ${montharr[month]} ${year}`
        });
        resetUpload();
        setCourseWork((prevCourseWork) => ({
          ...prevCourseWork,
          CourseType: "",
          subject: "",
          title: "",
        }));
        
        router.push(`/evaluation/${nanoidd}`);
      }, 3500);
    } 
  };

  return (
    <div className="flex gap-4 md:px-14 lg:px-0">
      {/* Upload section */}
      <div>
        <h1 className="font-bold text-3xl text-[#1E2026]">
          Hey IB Folks! Unsure about the quality of your answers?{" "}
          <span className="text-[#6947BF]">We get you.</span>
        </h1>

        <div className="rounded-sm border-2 p-4 border-[#D6DFE4] bg-[#FCFBFDB8] mt-6 relative overflow-hidden">
          <div className="relative">
            <Upload
              fileData={fileData}
              uploadeDoc={uploadeDoc}
              handleDragOver={handleDragOver}
              handleDragLeave={handleDragLeave}
              handleDrop={handleDrop}
              isDragging={isDragging}
              resetUpload={resetUpload}
              error={errors.filesize}
            />
            {errors.file && (
              <Error errormssg={errors.file} customClass={"top-20 right-[40%]"}>
                {errors.file}
              </Error>
            )}
          </div>

          {/* Select dropdowns */}
          <div className="w-1/2">
            <h5 className="mt-4 mb-1 text-xs text-[#7A8196]">
              Select your course & subjects*
            </h5>
            <div className="flex">
              <div className="relative">
                <SelectDropdown
                  name="CourseType"
                  value={courseWork.CourseType}
                  options={courseTypeOptions}
                  onChange={onOptionChange}
                  placeholder="Coursework Type"
                />
                {errors.CourseType && <Error>{errors.CourseType}</Error>}
              </div>

              <div className="relative">
                <SelectDropdown
                  name="subject"
                  value={courseWork.subject}
                  options={subjectOptions}
                  onChange={onOptionChange}
                  placeholder="Subject"
                />
                {errors.subject && <Error>{errors.subject}</Error>}
              </div>
            </div>
          </div>

          {/* Title input */}
          <div className="lg:w-1/2">
            <h5 className="mt-4 mb-1 text-xs text-[#7A8196]">
              Enter your essay title* (Required)
            </h5>
            <div className="relative">
              <input
                className="w-full p-2 rounded-md border-2 border-orange-500 "
                name="title"
                value={courseWork.title}
                placeholder="How nations work..."
                onChange={onOptionChange}
              />
              {errors.title && <Error>{errors.title}</Error>}
            </div>
          </div>

          {/* Evaluate score button */}
          <>
            <div
              className={`w-full sm:w-64 flex gap-2 rounded-md p-2 mt-5 bg-[#ADB8C9] text-[#FFFFFF] cursor-pointer  ${
                errors.file ||
                errors.CourseType ||
                errors.subject ||
                errors.title
                  ? "bg-[#ef7d7d] animate-bounce"
                  : "hover:animate-pulse"
              }`}
              onClick={evaluateScore}
            >
              <img src="/home/sparkel.svg" alt="sparkel" />
              <span>
                {errors.file ||
                errors.CourseType ||
                errors.subject ||
                errors.title
                  ? "Please fill the required"
                  : "Evaluate your score"}
              </span>
            </div>
          </>

          {/* Loading animation */}
          <div
            className={`w-full h-full absolute inset-0 flex items-center justify-center ${
              showLoading ? "bg-[#FCFBFDB8] z-20" : "-z-10"
            } `}
          >
            <UploadingAnimation showload={showLoading} />
          </div>
        </div>
      </div>

      {/* Left image part */}
      <div className="w-[420px] hidden lg:flex flex-col  justify-end  items-end">
        <img src="/home/astronaut.svg" alt="astronaut" />
        <div className="rounded-sm  w-full z-20">
          <img src="/home/evaluate.svg" alt="evaluate" />
        </div>
      </div>
    </div>
  );
}

export default EvaluateCourse;
