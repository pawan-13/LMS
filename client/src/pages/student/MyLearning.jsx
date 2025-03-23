import Course from "./Course";

const MyLearning = () => {
  const isLoading = false;
  const myLearningCourses = [1];
  return (
    <div className="container max-w-4xl mx-auto my-24 px-4 md:px-0">
      <h2 className="text-2xl font-bold">My Learning</h2>
      <div className="my-5">
        {
          isLoading ? <MyLearningSkeleton /> : myLearningCourses.length === 0 ? 'Courses are empty please select any courses' : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {
              [1,2,3,4,5,6].map((_, i) => <Course key={i} />)
            }
          </div>
        }
      </div>
    </div>
  )
}
export default MyLearning;

const MyLearningSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {
        [...Array(3)].map((_, i) => {
          return (
            <div key={i} className="h-40 bg-gray-300 dark:bg-gray-700 rounded-lg w-full animate-pulse"></div>
          )
        })
      }

    </div>
  );
};