import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useLoginUserMutation, useRegisterUserMutation } from "@/redux/api/authApi"
import { useState } from "react"

const Login = () => {
    const [loginInput, setLoginInput] = useState({ email: "", password: "", error: { email: "", password: "" } });
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "", error: { name: "", email: "", password: "" } });

    const [loginUser, { data: loginData, isLoading: loginIsLoading, error: loginError, isError: loginIsError, isSuccess: loginIsSuccess }] = useLoginUserMutation();
    const [registerUser, { data: registerData, isLoading: registerIsLoading, error: registerError, isError: registerIsError, isSuccess: registerIsSuccess }] = useRegisterUserMutation();

    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === 'login') {
            setLoginInput({ ...loginInput, [name]: value, error: { ...loginInput.error, [name]: "" } });
        } else {
            setSignupInput({ ...signupInput, [name]: value, error: { ...signupInput.error, [name]: "" } });
        }
    }

    const handleSubmit = async (e, type) => {
        e.preventDefault();
        const inputData = type === 'login' ? loginInput : signupInput
        const action = type === 'login' ? loginUser : registerUser
        const { name, email, password } = inputData;
        let errors = { ...inputData.error };
        let flag = true;

        // Validate login or signup fields
        if (type === 'signup') {
            if (name === "") {
                errors.name = "Name is required";
                flag = false;
            } else if (name.length < 2) {
                errors.name = "Name should be at least 2 characters";
                flag = false;
            }
        }


        if (email === "") {
            errors.email = "Email is required";
            flag = false;
        } else if (!email.includes('@')) {
            errors.email = "Email should be valid";
            flag = false;
        }

        if (password === "") {
            errors.password = "Password is required";
            flag = false;
        } else if (password.length < 8) {
            errors.password = "Password should be at least 8 characters";
            flag = false;
        }


        if (flag) {
            if (type === "login") {
                console.log("Login form submitted");
                await action(inputData);
            } else {
                console.log("Signup form submitted");
                await action(inputData);
            }
            if (type === 'login') {
                setLoginInput({ ...loginInput, email: "", password: "" });
            } else {
                setSignupInput({ ...signupInput, name: "", email: "", password: "", });
            }
        } else {
            if (type === 'login') {
                setLoginInput({ ...loginInput, error: errors });
            } else {
                setSignupInput({ ...signupInput, error: errors });
            }
        }
    }

    return (
        <>
            <div className="w-full bg-red-600 text-white p-4">
                <h1 className="text-2xl text-center">Welcome Here!</h1>
            </div>
            <div className="w-96 m-auto mt-10">
                <Tabs defaultValue="login" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="Signup">Register</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Login to your account. After signup, you will be able to log in.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={loginInput.email}
                                        placeholder="Enter Your Email..."
                                        onChange={(e) => handleChange(e, 'login')}
                                    />
                                    {loginInput.error.email && <p className="text-red-500 text-sm">{loginInput.error.email}</p>}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        maxLength="10"
                                        value={loginInput.password}
                                        placeholder="Enter Your Password..."
                                        onChange={(e) => handleChange(e, 'login')}
                                    />
                                    {loginInput.error.password && <p className="text-red-500 text-sm">{loginInput.error.password}</p>}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button disabled={loginIsLoading} type="submit" onClick={(e) => handleSubmit(e, 'login')}>{loginIsLoading ? ("Loading Data...") : ("Login")}</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="Signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>Signup</CardTitle>
                                <CardDescription>
                                    Create a new account and click signup when you are done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={signupInput.name}
                                        placeholder="Enter Your Name..."
                                        onChange={(e) => handleChange(e, 'signup')}
                                    />
                                    {signupInput.error.name && <p className="text-red-500 text-sm">{signupInput.error.name}</p>}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={signupInput.email}
                                        placeholder="Enter Your Email..."
                                        onChange={(e) => handleChange(e, 'signup')}
                                    />
                                    {signupInput.error.email && <p className="text-red-500 text-sm">{signupInput.error.email}</p>}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        maxLength = "10"
                                        value={signupInput.password}
                                        placeholder="Enter Your Password..."
                                        onChange={(e) => handleChange(e, 'signup')}
                                    />
                                    {signupInput.error.password && <p className="text-red-500 text-sm">{signupInput.error.password}</p>}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button disabled={registerIsLoading} type="submit" onClick={(e) => handleSubmit(e, 'signup')}>{registerIsLoading ? ("Loading Data...") : ("SignUp")}</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}

export default Login;
