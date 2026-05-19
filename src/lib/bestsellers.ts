import { BEST_SELLER_IDS } from "@/data/menu-structure";

export function isBestSeller(itemId: number): boolean {
  return (BEST_SELLER_IDS as readonly number[]).includes(itemId);
}
