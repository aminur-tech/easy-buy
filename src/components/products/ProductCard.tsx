import React from "react";

type Product = {
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, category, image } = product;

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
          <button className="btn btn-sm btn-ghost border border-base-300 flex-1">
            View
          </button>
          <button className="btn btn-sm btn-primary flex-1">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
