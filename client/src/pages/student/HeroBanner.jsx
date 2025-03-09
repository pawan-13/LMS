import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-4">Find The Best Courses For You.</h1>
                <p className="text-gray-300 dark:text-gray-400 mb-8">Discover, Learn, and Upskills with our wide range of courses.</p>

                <form action="" className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6">
                    <Input type="text" className="flex-grow border-none focus-visible:ring-0 px-6 py-6 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"  placeholder="Search for a course" />
                    <Button type="submit" className="bg-blue-600 w-auto dark:bg-blue-700 text-white px-6 py-6 rounded-r-full shadow-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 transition-colors duration-300">Search</Button>
                </form>
                <Button className="bg-white dark:bg-gray-800 text-blue-600 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">Explore Courses</Button>
            </div>
        </div>
    )
}
export default HeroBanner;
