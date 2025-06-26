// import axios from "axios";
import { connectDB } from '../db/db';
import { userModel } from '../model/userModel';

export async function createUser(profile: any) {
  await connectDB();
  let user = await userModel.findOne({ email: profile.email });
  if (!user) {
    user = new userModel(profile);
    await user.save();
  }
  return user;
}

export async function fetchUser(email: string) {
  await connectDB();
  return await userModel.findOne({ email });
}

export async function updateUserInDB(profile: any) {
  await connectDB();
  await userModel.updateOne({ email: profile.email }, { $set: profile }, { upsert: true });
}

// export async function notifyCrudCrud(profile: any) {
//   await axios.post(process.env.CRUD_URL!, profile);
// }
