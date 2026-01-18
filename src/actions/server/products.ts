"use server"
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export type Product = {
  _id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  creator_name?: string;
  creator_email?: string;
  creator_image?: string;
  createdAt: string;
};

type ProductDocument = {
  _id: ObjectId;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  creator_name?: string;
  creator_email?: string;
  creator_image?: string;
  createdAt?: Date;
};

// Fetch all products
export const getProducts = async (): Promise<Product[]> => {
  const products = await dbConnect(collections.PRODUCTS)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  // Convert ObjectId to string
  return (products as unknown as ProductDocument[]).map((p) => ({
    ...p,
    _id: p._id.toString(),
    createdAt: p.createdAt ? p.createdAt.toISOString() : new Date().toISOString(),
  }));
};

// Fetch a single product by ID
export const getProductById = async (id: string): Promise<Product | null> => {
  if (!ObjectId.isValid(id)) return null;

  const product = await dbConnect(collections.PRODUCTS).findOne({
    _id: new ObjectId(id),
  });

  if (!product) return null;

  const productDoc = product as unknown as ProductDocument;
  return {
    ...productDoc,
    _id: productDoc._id.toString(),
    createdAt: productDoc.createdAt ? productDoc.createdAt.toISOString() : new Date().toISOString(),
  };
};
