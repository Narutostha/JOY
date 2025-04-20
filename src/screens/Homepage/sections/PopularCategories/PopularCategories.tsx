import React from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Smartphone",
    image: "/public/SMARTPHONE.jpeg",
    link: "/products/smartphones"
  },
  {
    id: 2,
    name: "SmartWatch",
    image: "/public/image-10-2.png",
    link: "/products/smartwatches"
  },
  {
    id: 3,
    name: "iPad",
    image: "/public/IPAD.jpeg",
    link: "/products/ipads"
  },
  {
    id: 4,
    name: "Laptop",
    image: "/public/MACBOOK.png",
    link: "/products/laptops"
  },
  {
    id: 5,
    name: "Headphone",
    image: "/public/HEADDPHONE.webp",
    link: "/products/headphones"
  }
];

export const PopularCategories = () => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainer.current) {
      const { current } = scrollContainer;
      const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Popular Categories</h2>

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
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-none w-40"
                style={{ scrollSnapAlign: "start" }}
              >
                <Link
                  to={category.link}
                  className="block text-center group"
                >
                  <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-gray-900 font-medium">{category.name}</h3>
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

export default PopularCategories;