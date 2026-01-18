"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProductById } from "@/actions/server/products";

type Product = {
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

const ProductsDetails: React.FC = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async (id: string) => {
    try {
      const res = await getProductById(id);
      setProduct(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id && typeof params.id === "string") {
      fetchProduct(params.id);
    }
  }, [params.id]);

  if (loading)
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  if (!product)
    return (
      <div className="text-center py-20 text-red-500">Product not found</div>
    );

  return (
    <div className="md:w-11/12 mx-auto px-6 py-12 mt-10">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Image with overlay */}
        <div className="relative rounded-xl overflow-hidden shadow-lg group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Floating badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="badge badge-primary">NEW</span>
            <span className="badge badge-outline">{product.category}</span>
          </div>

          {/* Price overlay */}
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline">In Stock</span>
            <span className="badge badge-outline">Free Shipping</span>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="btn bg-gradient-to-r from-blue-500 to-violet-600 text-white border-none hover:from-blue-600 hover:to-violet-700 flex-1 hover:scale-105 transition-transform">
              Add to Cart
            </button>
            <button className="btn btn-outline hover:bg-gradient-to-r from-blue-500 to-violet-600 text-base-content flex-1 hover:scale-105 transition-transform">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Optional Related Products */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Related Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Placeholder cards */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4"
            >
              <div className="h-40 w-full mb-4 bg-gray-200 rounded-lg" />
              <h3 className="font-semibold text-lg mb-2">Product {i}</h3>
              <span className="text-blue-600 font-bold">$99.99</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsDetails;
