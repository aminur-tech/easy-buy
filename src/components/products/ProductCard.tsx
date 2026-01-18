import Link from "next/link";
import React from "react";

type Product = {
  _id: string;         // Added ID
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  creator_name?: string;
  creator_email?: string;
  creator_image?: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { _id, name, price, category, image } = product;

  return (
    <div className="
      bg-base-100 
      rounded-xl 
      border 
      border-base-200
      shadow-sm 
      hover:shadow-lg 
      hover:-translate-y-1
      transition-all 
      duration-300
    ">

      {/* Image */}
      <div className="relative overflow-hidden rounded-t-xl h-44">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Floating badge */}
        <span className="absolute top-2 left-2 badge badge-secondary badge-sm">
          NEW
        </span>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold line-clamp-2">
          {name}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primary">
            ${price}
          </span>
          <span className="badge badge-outline text-xs">
            {category}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <Link
            href={`/products/${_id}`}
            className="btn btn-outline hover:bg-gradient-to-r from-blue-500 to-violet-600 text-base-content border border-base-300 flex-1 text-center"
          >
            View
          </Link>
          <button className="btn bg-gradient-to-r from-blue-500 to-violet-600 text-white border-none hover:from-blue-600 hover:to-violet-700 flex-1">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
