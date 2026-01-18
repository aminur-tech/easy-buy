import { GetProducts } from "@/actions/server/products";
import ProductCard from "@/components/products/ProductCard";

const ProductsPage = async () => {
  const products = await GetProducts();

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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      {serializedProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
