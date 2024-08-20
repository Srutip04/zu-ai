import EvaluateCourse from "@/components/home/CourseEvaluation";
import ExploreCourseWork from "@/components/home/CourseExplorer";
import MyCourseWork from "@/components/home/MyCourses";

export default function Home() {
  return (
    <>
      <EvaluateCourse />
      <MyCourseWork />
      <ExploreCourseWork />
    </>
  );
}
