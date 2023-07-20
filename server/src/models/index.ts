import mongoose, { Mongoose } from "mongoose";
import { IUser } from "./user.model";
import { IRole } from "./role.model";

interface Database {
  mongoose: Mongoose;
  user: mongoose.Model<IUser>;
  role: mongoose.Model<IRole>;
  ROLES: string[];
}

const db: Database = {
  mongoose: mongoose as Mongoose,
  user: require("./user.model").default,
  role: require("./role.model").default,
  ROLES: ["user", "admin", "moderator"],
};

export default db;
