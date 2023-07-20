import mongoose, { Document, Schema, Model } from "mongoose";
import { IRole } from "./role.model";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  roles: IRole[];
}

interface IUserModel extends Model<IUser> {
  // Ajoute des méthodes personnalisées si nécessaire
}

const userSchema = new Schema<IUser, IUserModel>({
  username: String,
  email: String,
  password: String,
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

const User: IUserModel = mongoose.model<IUser, IUserModel>("User", userSchema);

export default User;
