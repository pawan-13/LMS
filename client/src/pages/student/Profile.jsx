import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import Course from "./Course";
import { useLoadUserQuery } from "@/redux/api/authApi.js";

const Profile = () => {
    const{data,isLoading}  = useLoadUserQuery();
    console.log(data)
    const enrolledCourses = [1,2,3,4,5,6];
    return (
        <div className="max-w-4xl mx-auto my-24 px-4">
            <h1 className="font-bold text-center md:text-start text-2xl">Profile</h1>
            <div className="flex flex-col md:flex-row item-center md:items-start gap-8 my-5">
                <div className="flex flex-col items-center">
                    <Avatar className='w-24 h-24 md:w-32 md:h-32 mb-4'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <div className="mb-2">
                        <h1 className="font-semibold text-base text-gray-900 dark:text-gray-100">
                            Name:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">Pawan MernStack</span>
                        </h1>
                    </div>
                    <div className="mb-2">
                        <h1 className="font-semibold text-base text-gray-900 dark:text-gray-100">
                            Email:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">Pawan30jul@gmail.com</span>
                        </h1>
                    </div>
                    <div className="mb-2">
                        <h1 className="font-semibold text-base text-gray-900 dark:text-gray-100">
                            Role:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">Instructor</span>
                        </h1>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" size='sm' className='mt-2'>Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you are done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name">
                                        Name
                                    </Label>
                                    <Input id="name" type="text" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username">
                                        Profile Photo
                                    </Label>
                                    <Input id="username" type="file" accept="image/*" className="col-span-3" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={isLoading}>
                                    {
                                        isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...</> : <div>Save Changes</div>
                                    }
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div>
                <h1 className="font-medium text-lg">Courses You have Enrolled in</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
                    {
                        enrolledCourses.length === 0 ? 'You have not enrolled yet' : enrolledCourses.map((_, index) => <Course key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default Profile;