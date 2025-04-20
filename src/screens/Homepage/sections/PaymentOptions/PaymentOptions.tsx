import React from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaymentOption {
  id: number;
  name: string;
  image: string;
}

const paymentOptions: PaymentOption[] = [
  {
    id: 1,
    name: "Esewa",
    image: "/public/esewa-logo-1.png"
  },
  {
    id: 2,
    name: "Khalti",
    image: "/public/khalti.png"
  },
  {
    id: 3,
    name: "IME Pay",
    image: "/public/imepay.png  "
  },
  {
    id: 4,
    name: "Connect IPS",
    image: "/public/cips_logo.png"
  }
];

export const PaymentOptions = () => {
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
        <h2 className="text-2xl font-bold text-center mb-10">Choose Your Payment Options</h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainer}
            className="flex overflow-x-auto scrollbar-hide space-x-8 px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {paymentOptions.map((option) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-none"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="h-12 object-contain"
                  />
                </div>
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

export default PaymentOptions;