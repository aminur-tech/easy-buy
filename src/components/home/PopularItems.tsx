
import React from "react";
import ProductCard from "../products/ProductCard";
import { getProducts } from "@/actions/server/products";


const PopularItems = async() => {
   const products = await getProducts();
  
    // Convert products to plain JSON-serializable objects
    const serializedProducts = products.map((product) => ({
      _id: product._id.toString(), // convert ObjectId to string
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      description: product.description,
      creator_name: product.creator_name,
      creator_email: product.creator_email,
      creator_image: product.creator_image,
    }));

  return (
    <section className="py-20 bg-base-100">
      <div className="w-full text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Popular <span className="text-primary">Items</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          Check out our top-selling products loved by customers.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-11/12 mx-auto mt-10 mb-10">
      {serializedProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
      
      </div>
    </section>
  );
};

export default PopularItems;
