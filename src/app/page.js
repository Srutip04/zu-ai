import CourseEvaluation from "@/components/home/CourseEvaluation";
import CourseExplorer from "@/components/home/CourseExplorer";
import MyCourseWork from "@/components/home/MyCourses";

export default function Home() {
  return (
    <>
      <CourseEvaluation />
      <MyCourseWork />
      <CourseExplorer />
    </>
  );
}
