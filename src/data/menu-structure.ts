import type { MenuCategoryId } from "./menu-types";

export interface MenuItemStructure {
  id: number;
  price: string;
  takeawayPrice?: string;
  halal?: boolean;
}

export interface MenuCategoryStructure {
  id: MenuCategoryId;
  items: MenuItemStructure[];
}

/** Prices and structure only — names/descriptions come from i18n */
export const MENU_STRUCTURE: MenuCategoryStructure[] = [
  {
    id: "vorspeisen",
    items: [
      { id: 1, price: "5,60 €" },
      { id: 2, price: "6,90 €" },
      { id: 3, price: "6,50 €" },
      { id: 4, price: "7,60 €" },
      { id: 5, price: "6,70 €" },
    ],
  },
  {
    id: "salate",
    items: [
      { id: 6, price: "12,90 €" },
      { id: 7, price: "13,90 €", halal: true },
      { id: 8, price: "12,90 €" },
      { id: 9, price: "14,90 €" },
    ],
  },
  {
    id: "pita",
    items: [
      { id: 10, price: "8,50 €", takeawayPrice: "6,50 €" },
      { id: 11, price: "8,50 €", takeawayPrice: "6,50 €", halal: true },
      { id: 12, price: "8,50 €", takeawayPrice: "6,50 €" },
      { id: 13, price: "8,50 €", takeawayPrice: "6,50 €" },
      { id: 14, price: "8,50 €", takeawayPrice: "6,50 €", halal: true },
      { id: 15, price: "11,90 €" },
    ],
  },
  {
    id: "fleisch",
    items: [
      { id: 16, price: "12,90 €" },
      { id: 17, price: "12,90 €", halal: true },
      { id: 18, price: "14,90 €" },
      { id: 19, price: "12,90 €" },
      { id: 20, price: "12,90 €" },
      { id: 21, price: "12,90 €", halal: true },
    ],
  },
  {
    id: "teller-2",
    items: [
      { id: 22, price: "32,30 €" },
      { id: 23, price: "33,40 €", halal: true },
    ],
  },
  {
    id: "grill",
    items: [
      { id: 24, price: "10,60 €", halal: true },
      { id: 25, price: "7,50 €", halal: true },
    ],
  },
  {
    id: "fast-food",
    items: [
      { id: 26, price: "8,90 €", halal: true },
      { id: 27, price: "8,90 €", halal: true },
      { id: 28, price: "7,90 €" },
      { id: 29, price: "11,40 €" },
    ],
  },
  {
    id: "ueberbacken",
    items: [
      { id: 30, price: "13,90 €" },
      { id: 31, price: "14,20 €" },
      { id: 32, price: "13,90 €" },
      { id: 33, price: "14,10 €" },
    ],
  },
  {
    id: "pasta",
    items: [
      { id: 34, price: "13,50 €", halal: true },
      { id: 35, price: "13,00 €" },
    ],
  },
  {
    id: "burger",
    items: [
      { id: 36, price: "9,90 €" },
      { id: 37, price: "10,50 €" },
      { id: 38, price: "10,50 €", halal: true },
      { id: 39, price: "14,90 €" },
    ],
  },
  {
    id: "schnitzel",
    items: [
      { id: 40, price: "11,50 €" },
      { id: 41, price: "11,50 €", halal: true },
    ],
  },
  {
    id: "kinder",
    items: [
      { id: 42, price: "9,10 €" },
      { id: 43, price: "8,90 €" },
      { id: 44, price: "8,90 €" },
    ],
  },
  {
    id: "beilagen",
    items: [
      { id: 45, price: "3,90 €" },
      { id: 46, price: "3,90 €" },
      { id: 47, price: "4,20 €" },
    ],
  },
];

export const BEST_SELLER_IDS = [16, 17, 11, 39, 23] as const;
