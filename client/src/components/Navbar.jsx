import { School } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import DarkMode from "@/DarkMode";

const Navbar = () => {
    const user = true;
    return (
        <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
            <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between gap-10 h-full">
                <div className="flex items-center gap-2">
                    <School size={30} />
                    <h1 className="hidden md:block font-extrabold text-2xl">E-Learning</h1>
                </div>
                <div className="flex items-center gap-8">
                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-44 relative right-10">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            My Learning
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Edit Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        DashBoard
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="flex items-center gap-5">
                                <Button variant="outline">Login</Button>
                                <Button>Signup</Button>
                            </div>
                        )
                    }
                    <DarkMode/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;