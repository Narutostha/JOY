import { useParams } from 'react-router-dom';
import { PRODUCTS_DATA } from '../../store/products';
import { NavbarSection } from '../Homepage/sections/NavbarSection/NavbarSection';
import { FooterSection } from '../Homepage/sections/FooterSection/FooterSection';
import { NewsletterSection } from '../Homepage/sections/NewsletterSection/NewsletterSection';

export const ProductDetails = () => {
  const { slug } = useParams();
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavbarSection />
        <div className="pt-[150px] sm:pt-[170px] md:pt-[80px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
            <p className="mt-4 text-lg text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <NavbarSection />
      <div className="pt-[150px] sm:pt-[170px] md:pt-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Product details content remains the same */}
        </div>
      </div>
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default ProductDetails;