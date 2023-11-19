import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const URI = `mongodb+srv://aqib:aqib@nodeapp.buisl.mongodb.net/?retryWrites=true&w=majority`;
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
