import mongoose, { Document, Schema, Model } from "mongoose";

export interface IRole extends Document {
  name: string;
}

interface IRoleModel extends Model<IRole> {
  // Ajoute des méthodes personnalisées si nécessaire
}

const roleSchema = new Schema<IRole, IRoleModel>({
  name: String,
});

const Role: IRoleModel = mongoose.model<IRole, IRoleModel>("Role", roleSchema);

export default Role;
