import { collections, dbConnect } from "@/lib/dbConnect";

export const GetProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS)
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return products;
};
