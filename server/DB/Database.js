import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log("Database connected")
    } catch (error) {
        console.log("Error in Connecting DB " , error);
        
    }
}
export default connectDB;