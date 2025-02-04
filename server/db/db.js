import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI);
        if(connectDB){
            console.log('Database is connected');
        }
        else{
            console.log('Something is Wrong');
        }
    } catch (error) {
        console.log(error.message,'error');
    }
}

export default connectDB;