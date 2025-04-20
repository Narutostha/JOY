import { atom } from 'jotai';

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export const wishlistAtom = atom<WishlistItem[]>([]);

export const isInWishlistAtom = atom(
  (get) => (productId: number) => get(wishlistAtom).some(item => item.id === productId)
);