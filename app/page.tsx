import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from "@/components/ProductCard";

// Dummy product data (replace with your actual data source)
const featuredProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    price: "$19.99",
    image: "https://source.unsplash.com/featured/?product&1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    price: "$29.99",
    image: "https://source.unsplash.com/featured/?product&2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    price: "$39.99",
    image: "https://source.unsplash.com/featured/?product&3",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Description of Product 4",
    price: "$49.99",
    image: "https://source.unsplash.com/featured/?product&4",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="mb-8">
        <div className="relative h-64 overflow-hidden rounded-lg">
          <Image
            src="https://source.unsplash.com/featured/?ecommerce,shopping" // Placeholder hero image
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
              <p className="text-lg mb-6">Discover amazing products at great prices.</p>
              <Link href="/products" legacyBehavior>
                <a className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-foreground hover:text-primary transition duration-300">
                  Shop Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section (Optional) */}
      {/* Add a categories section here if needed */}
    </div>
  );
}
