import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Course = () => {
    return (
        <Card className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
            <div className="relative">
                <img src="https://picsum.photos/200/300" alt="Course Image" className="w-full h-36 object-cover rounded-t-lg" />
            </div>
            <CardContent>
                <h1 className="hover:underline font-bold text-lg truncate">Next.js Completed Courses in Hindi!!</h1>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className='w-8 h-8'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className="font-medium text-sm">Pawan Kumar</h1>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default Course;