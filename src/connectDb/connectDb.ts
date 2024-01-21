import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully...");
    });

    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running..." +
          error,
        error.message
      );
      process.exit();
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
