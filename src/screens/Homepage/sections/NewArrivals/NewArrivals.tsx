import React from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Apple Watch SE",
    price: 299.99,
    originalPrice: 349.99,
    image: "/public/apple-watch-image.png",
    rating: 4.5,
    link: "/product/apple-watch-se"
  },
  {
    id: 2,
    name: "iPhone 15 128 GB",
    price: 799.99,
    originalPrice: 899.99,
    image: "/public/SMARTPHONE.jpeg",
    rating: 4.8,
    link: "/product/iphone-15"
  },
  // Add more products...
];

export const NewArrivals = () => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const { current } = scrollContainer;
      const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <Link to="/new-arrivals" className="text-[#AD5C10] hover:underline">
            View all products
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainer}
            className="flex overflow-x-auto scrollbar-hide space-x-6 px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-none w-72"
                style={{ scrollSnapAlign: "start" }}
              >
                <Link to={product.link} className="block">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </span>
                      </div>
                    </div>

                    <h3 className="text-gray-900 font-medium mb-2">{product.name}</h3>

                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-900 font-bold text-lg">
                          ${product.price}
                        </span>
                        <span className="text-gray-500 line-through text-sm ml-2">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <Button size="sm" className="bg-[#AD5C10] hover:bg-[#8A4A0D]">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;