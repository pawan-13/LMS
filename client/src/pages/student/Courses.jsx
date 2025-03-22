import { Skeleton } from "@/components/ui/skeleton"
import Course from "./Course";


const Courses = () => {
  const isLoading = false;
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            isLoading ? Array.from({ length: 8 }, (_, index) => (<CourseSkeleton key={index} />)) : <Course />
          }
        </div>
      </div>
    </div>
  )
}
export default Courses;


const CourseSkeleton = () => {
  return (
    <div className="card bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="w-3/4 h-6" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-20 h-4" />
          </div>
          <Skeleton className="w-16 h-4" />
        </div>
        <Skeleton className="w-1/4 h-4" />
      </div>
    </div>
  )
}

export { CourseSkeleton };