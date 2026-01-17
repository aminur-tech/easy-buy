import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env");
}
const dbname = process.env.DBNAME;
export const collections = {
  USERS: "users",

};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export const dbConnect = (cname: string) => {
  return client.db(dbname).collection(cname);
};
