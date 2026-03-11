import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(
      String(process.env.MONGODB_CONNECTION_STRING),
    );
    isConnected = conn.connections[0].readyState === 1;
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    throw err;
  }
}
