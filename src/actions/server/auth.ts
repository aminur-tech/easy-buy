"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

type AuthPayload = {
  email: string;
  password: string;
  name?: string;
};

export const postUser = async (payload: AuthPayload) => {
  const { email, password, name } = payload;

  if (!email || !password) {
    return { success: false, message: "Missing fields" };
  }

  const users = dbConnect(collections.USERS);

  const isExist = await users.findOne({ email });
  if (isExist) {
    return { success: false, message: "User already exists" };
  }

  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
    createdAt: new Date(),
  };

  const result = await users.insertOne(newUser);

  return {
    success: true,
    userId: result.insertedId.toString(),
  };
};

export const loginUser = async (payload: AuthPayload) => {
  const { email, password } = payload;

  if (!email || !password) return null;

  const user = await dbConnect(collections.USERS).findOne({ email });
  if (!user) return null;

  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) return null;

  return {
    id: user._id.toString(),
    email: user.email,
    name: user.name,
    role: user.role,
  };
};
