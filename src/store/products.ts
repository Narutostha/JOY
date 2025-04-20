import { atom } from 'jotai';

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  stock: number;
  description: string;
  features: string[];
  colors: string[];
  date: string;
}

export const PRODUCTS_DATA: Product[] = [
  // Apple Products
  {
    id: 1,
    name: 'iPhone 15 Pro',
    slug: 'iphone-15-pro',
    category: 'Apple Products',
    subcategory: 'iPhone',
    price: 999.99,
    originalPrice: 1099.99,
    image: '/image-10-2.png',
    rating: 4.8,
    reviews: 245,
    stock: 50,
    description: 'The most advanced iPhone ever with A17 Pro chip.',
    features: ['A17 Pro chip', 'Pro camera system', 'Titanium design'],
    colors: ['Natural', 'Blue', 'White', 'Black'],
    date: '2024-03-01'
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    slug: 'macbook-air-m3',
    category: 'Apple Products',
    subcategory: 'MacBook',
    price: 1299.99,
    originalPrice: 1399.99,
    image: '/image-7-1.png',
    rating: 4.9,
    reviews: 189,
    stock: 35,
    description: 'Incredibly thin and light with the M3 chip.',
    features: ['M3 chip', 'Up to 18 hours battery', 'Liquid Retina display'],
    colors: ['Space Gray', 'Silver', 'Gold'],
    date: '2024-03-02'
  },
  {
    id: 3,
    name: 'iPad Pro M2',
    slug: 'ipad-pro-m2',
    category: 'Apple Products',
    subcategory: 'iPad',
    price: 799.99,
    originalPrice: 899.99,
    image: '/image-19-2.png',
    rating: 4.7,
    reviews: 156,
    stock: 42,
    description: 'The ultimate iPad experience.',
    features: ['M2 chip', 'Liquid Retina XDR', 'ProMotion'],
    colors: ['Space Gray', 'Silver'],
    date: '2024-03-03'
  },

  // Marshall Products
  {
    id: 4,
    name: 'Marshall Stanmore III',
    slug: 'marshall-stanmore-iii',
    category: 'Marshall',
    subcategory: 'Speakers',
    price: 379.99,
    originalPrice: 429.99,
    image: '/image-22-2.png',
    rating: 4.8,
    reviews: 123,
    stock: 30,
    description: 'Iconic Marshall sound in a classic design.',
    features: ['Bluetooth 5.2', 'Multi-host functionality', 'Custom tuning'],
    colors: ['Black', 'Brown'],
    date: '2024-03-04'
  },
  {
    id: 5,
    name: 'Marshall Major IV',
    slug: 'marshall-major-iv',
    category: 'Marshall',
    subcategory: 'Headphones',
    price: 149.99,
    originalPrice: 169.99,
    image: '/image-3-1.png',
    rating: 4.7,
    reviews: 98,
    stock: 45,
    description: 'Wireless headphones with 80+ hours of playtime.',
    features: ['80+ hours battery', 'Wireless charging', 'Custom drivers'],
    colors: ['Black'],
    date: '2024-03-05'
  },

  // JBL Products
  {
    id: 6,
    name: 'JBL Flip 6',
    slug: 'jbl-flip-6',
    category: 'JBL',
    subcategory: 'Speakers',
    price: 129.99,
    originalPrice: 149.99,
    image: '/image-6-2.png',
    rating: 4.6,
    reviews: 167,
    stock: 55,
    description: 'Bold sound for every adventure.',
    features: ['PartyBoost', 'IP67 waterproof', '12 hours playtime'],
    colors: ['Black', 'Blue', 'Red'],
    date: '2024-03-06'
  },
  {
    id: 7,
    name: 'JBL Quantum',
    slug: 'jbl-quantum',
    category: 'JBL',
    subcategory: 'Headphones',
    price: 149.99,
    originalPrice: 179.99,
    image: '/image-17-1-3.png',
    rating: 4.5,
    reviews: 88,
    stock: 40,
    description: 'Professional gaming headset.',
    features: ['QuantumSURROUND', 'Discord certified', 'Noise cancelling mic'],
    colors: ['Black'],
    date: '2024-03-07'
  },

  // Belkin Products
  {
    id: 8,
    name: 'Belkin MagSafe Charger',
    slug: 'belkin-magsafe-charger',
    category: 'Belkin',
    subcategory: 'Chargers',
    price: 39.99,
    originalPrice: 49.99,
    image: '/image-4-1-1.png',
    rating: 4.4,
    reviews: 76,
    stock: 60,
    description: 'Fast wireless charging for iPhone.',
    features: ['15W fast charging', 'MagSafe compatible', 'Slim design'],
    colors: ['White'],
    date: '2024-03-08'
  },
  {
    id: 9,
    name: 'Belkin Screen Protector',
    slug: 'belkin-screen-protector',
    category: 'Belkin',
    subcategory: 'Screen Protectors',
    price: 19.99,
    originalPrice: 24.99,
    image: '/image-5-1-1.png',
    rating: 4.3,
    reviews: 92,
    stock: 100,
    description: 'Premium tempered glass protection.',
    features: ['9H hardness', 'Anti-fingerprint', 'Easy installation'],
    colors: ['Clear'],
    date: '2024-03-09'
  },

  // Momax Products
  {
    id: 10,
    name: 'Momax Power Bank',
    slug: 'momax-power-bank',
    category: 'Momax',
    subcategory: 'Power Banks',
    price: 49.99,
    originalPrice: 59.99,
    image: '/image-21-1.png',
    rating: 4.5,
    reviews: 64,
    stock: 50,
    description: '20000mAh portable charger.',
    features: ['20000mAh capacity', 'Fast charging', 'Multiple ports'],
    colors: ['Black', 'White'],
    date: '2024-03-10'
  },
  {
    id: 11,
    name: 'Momax Smart Watch',
    slug: 'momax-smart-watch',
    category: 'Momax',
    subcategory: 'Smart Home',
    price: 89.99,
    originalPrice: 99.99,
    image: '/image-10-2.png',
    rating: 4.2,
    reviews: 45,
    stock: 30,
    description: 'Feature-rich smartwatch.',
    features: ['Heart rate monitor', 'Sleep tracking', 'Water resistant'],
    colors: ['Black', 'Silver'],
    date: '2024-03-11'
  }
];

export const productsAtom = atom<Product[]>(PRODUCTS_DATA);

export const filteredProductsAtom = atom((get) => get(productsAtom));

// Helper function to get unique categories
export const getUniqueCategories = () => {
  return [...new Set(PRODUCTS_DATA.map(product => product.category))];
};

// Helper function to get unique subcategories for a category
export const getUniqueSubcategories = (category: string) => {
  return [...new Set(
    PRODUCTS_DATA
      .filter(product => product.category === category)
      .map(product => product.subcategory)
  )];
};

// Helper function to get price range
export const getPriceRange = () => {
  const prices = PRODUCTS_DATA.map(product => product.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};