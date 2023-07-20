import mongoose from "mongoose";
import dotenv from "dotenv";
import db from "../models";

const Role = db.role;

async function connectDB() {
  try {
    const roleCount = await Role.estimatedDocumentCount();
    if (roleCount === 0) {
      const roles = [
        { name: "user" },
        { name: "moderator" },
        { name: "admin" },
      ];
      await Role.insertMany(roles);
      console.log("Added roles to roles collection");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

mongoose
  .connect(
    dotenv.config().parsed?.MONGODB_URI || "mongodb://localhost:27017/kanban",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    connectDB();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit(1);
  });

mongoose.set("strictQuery", true);
