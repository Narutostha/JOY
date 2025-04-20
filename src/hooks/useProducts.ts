import { useAtom } from 'jotai';
import { productsAtom } from '../store/products';
import { filtersAtom, type FilterState } from '../store/filters';
import type { Product } from '../store/products';

export const useProducts = () => {
  const [products] = useAtom(productsAtom);
  const [filters, setFilters] = useAtom(filtersAtom);

  const filterProducts = (products: Product[], filters: FilterState): Product[] => {
    return products.filter(product => {
      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false;
      }

      // Subcategory filter
      if (filters.subcategory.length > 0 && !filters.subcategory.includes(product.subcategory)) {
        return false;
      }

      // Price range filter
      if (
        product.price < filters.priceRange.min ||
        product.price > filters.priceRange.max
      ) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      const sortField = filters.sortBy as keyof Product;
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return filters.sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return filters.sortOrder === 'asc'
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0;
    });
  };

  const filteredProducts = filterProducts(products, filters);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      category: [],
      subcategory: [],
      priceRange: {
        min: 0,
        max: 2000
      },
      rating: 0,
      sortBy: 'date',
      sortOrder: 'desc'
    });
  };

  return {
    products: filteredProducts,
    filters,
    updateFilters,
    resetFilters
  };
};