import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

//RegisterUser Business logic

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        else {
            const hashedPassword = await bcryptjs.hash(password, 10);
            const newUser = await User.create({
                name,
                email,
                password: hashedPassword,
            });
            if (newUser) {
                return res.status(200).json({
                    success: true,
                    message: "User created successfully",
                })
            }
        }
    } catch (error) {
        console.log(error.message, 'error');
        return res.status(500).json({
            success: false,
            message: "Failed To Register"
        })
    }
};


//LoginUser Business logic
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Incorrect email or password",
            })
        }

        const isPasswordMatch = await bcryptjs.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(404).json({
                success: false,
                message: "Incorrect email or password",
            })
        }

        generateToken(res, user, `Welcome to ${user.email}`);
    } catch (error) {
        console.log(error.message, 'error');
    }
};


//Logout User Business logic
export const logout = (_, res) => {
    try {
        return res.status(200).cookie('token', "", { maxAge: 0 }).json({
            success: true,
            message: "User logged out successfully"
        })
    } catch (error) {
        console.log(error.message, 'error');
        return res.status(500).json({
            success: false,
            message: "Failed to Logout"
        })
    }
}


//getUserDetails Business Logic
export const getUserProfile = async(req,res) => {
    try {
        const userId = req.id;
        const User = await User.findById(userId).select("-password");
        if(!User){
            return res.status(404).json({
                success:false,
                message:"Profile not found"
            })
        };

        return res.status(200).json({
            success: true,
            message: "User Profile Retrieved Successfully",
            User
        })
    } catch (error) {
        console.log(error.message,'error');
        return res.status(404).json({
            success: false,
            message: "Failed to load user"
        })
    }
}