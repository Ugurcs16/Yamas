import { MENU_STRUCTURE } from "@/data/menu-structure";
import type { MenuCategory, MenuCategoryId, MenuItem } from "@/data/menu-types";

export type MenuMessages = {
  categories: Record<MenuCategoryId, string>;
  items: Record<string, { name: string; description: string }>;
  takeawayLabel: string;
};

export function buildMenuCategories(menuMessages: MenuMessages): MenuCategory[] {
  return MENU_STRUCTURE.map((category) => ({
    id: category.id,
    label: menuMessages.categories[category.id],
    items: category.items.map((item): MenuItem => {
      const translation = menuMessages.items[String(item.id)];
      return {
        id: item.id,
        name: translation?.name ?? "",
        description: translation?.description ?? "",
        price: item.price,
        takeawayPrice: item.takeawayPrice,
        halal: item.halal,
      };
    }),
  }));
}
