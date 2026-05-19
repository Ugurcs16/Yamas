export type MenuCategoryId =
  | "vorspeisen"
  | "salate"
  | "pita"
  | "fleisch"
  | "teller-2"
  | "grill"
  | "fast-food"
  | "ueberbacken"
  | "pasta"
  | "burger"
  | "schnitzel"
  | "kinder"
  | "beilagen";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  takeawayPrice?: string;
  halal?: boolean;
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  items: MenuItem[];
}
