import { atom } from 'jotai';

export interface FilterState {
  category: string[];
  subcategory: string[];
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export const defaultFilters: FilterState = {
  category: [],
  subcategory: [],
  priceRange: {
    min: 0,
    max: 2000
  },
  rating: 0,
  sortBy: 'date',
  sortOrder: 'desc'
};

export const filtersAtom = atom<FilterState>(defaultFilters);