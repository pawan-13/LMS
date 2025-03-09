import { Skeleton } from "@/components/ui/skeleton"


const Courses = () => {
  const isLoading = true;
  return (
    <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>

            {
              isLoading ? <CourseSkeleton/> : ""
            }
        </div>
    </div>
  )
}
export default Courses;


const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className ="px-5 py-4 space-y-3">
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

export {CourseSkeleton};