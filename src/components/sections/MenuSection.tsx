"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { BestSellerBadge, HalalBadge } from "@/components/ui/HalalBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { MenuCategoryId, MenuItem } from "@/data/menu-types";
import { isBestSeller } from "@/lib/bestsellers";
import { buildMenuCategories, type MenuMessages } from "@/lib/menu";
import { usePrefersReducedMotion } from "@/lib/use-media";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

function MenuItemCard({
  item,
  index,
  takeawayLabel,
  reducedMotion,
}: {
  item: MenuItem;
  index: number;
  takeawayLabel: string;
  reducedMotion: boolean;
}) {
  const bestseller = isBestSeller(item.id);

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.4, delay: reducedMotion ? 0 : index * 0.03 }}
      className="group rounded-sm bg-gradient-to-br from-ivory/[0.05] to-transparent border border-champagne/12 p-4 sm:p-5 md:p-6 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h4 className="font-display text-base sm:text-lg text-ivory font-medium leading-snug pr-1">
              {item.name}
            </h4>
            {bestseller && <BestSellerBadge />}
            {item.halal && <HalalBadge />}
          </div>
          {item.description && (
            <p className="text-[15px] sm:text-sm text-ivory-muted font-light leading-relaxed">
              {item.description}
            </p>
          )}
          {item.takeawayPrice && (
            <p className="mt-2.5 text-xs sm:text-xs text-olive-light tracking-wide">
              {takeawayLabel} · {item.takeawayPrice}
            </p>
          )}
        </div>
        <p className="font-display text-lg sm:text-xl text-champagne whitespace-nowrap shrink-0 pt-0.5 tabular-nums">
          {item.price}
        </p>
      </div>
    </motion.article>
  );
}

export function MenuSection() {
  const t = useTranslations("menuSection");
  const messages = useMessages();
  const menuMessages = messages.menu as MenuMessages;
  const reducedMotion = usePrefersReducedMotion();

  const MENU_CATEGORIES = useMemo(
    () => buildMenuCategories(menuMessages),
    [menuMessages]
  );

  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | "all">("all");
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState<MenuCategoryId | null>(null);

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();
    return MENU_CATEGORIES.map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const matchesCategory =
          activeCategory === "all" || category.id === activeCategory;
        if (!matchesCategory) return false;
        if (!query) return true;
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      }),
    })).filter((cat) => cat.items.length > 0);
  }, [MENU_CATEGORIES, activeCategory, search]);

  useEffect(() => {
    if (activeCategory !== "all" && filteredCategories.length === 1) {
      setMobileOpen(filteredCategories[0].id);
    }
  }, [activeCategory, filteredCategories]);

  const totalResults = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  const resultsLabel =
    totalResults === 1
      ? t("resultsOne", { count: totalResults })
      : t("resultsMany", { count: totalResults });

  const handleCategorySelect = (id: MenuCategoryId | "all") => {
    setActiveCategory(id);
    if (id !== "all") {
      setMobileOpen(id);
    } else {
      setMobileOpen(null);
    }
  };

  return (
    <section id="speisekarte" className="luxury-section py-16 sm:py-24 md:py-40 scroll-mt-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 min-w-0">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <FadeIn className="mb-6 sm:mb-10 md:mb-12">
          <label htmlFor="menu-search" className="sr-only">
            {t("searchLabel")}
          </label>
          <div className="relative w-full md:max-w-lg md:mx-auto">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-dim pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="menu-search"
              type="search"
              enterKeyHint="search"
              placeholder={t("searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-sm bg-ivory/[0.05] border border-champagne/20 backdrop-blur-xl py-3.5 sm:py-4 pl-11 pr-4 text-base sm:text-[15px] text-ivory-warm placeholder:text-ivory-dim font-light focus:outline-none focus:border-champagne/45 focus:shadow-glow-sm transition-all duration-300 touch-manipulation"
            />
          </div>
        </FadeIn>

        {/* Mobile: horizontal category scroll */}
        <div className="md:hidden -mx-4 px-4 mb-5">
          <div
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory"
            role="tablist"
            aria-label={t("title")}
          >
            <CategoryTab
              active={activeCategory === "all"}
              onClick={() => handleCategorySelect("all")}
              label={t("tabAll")}
              compact
            />
            {MENU_CATEGORIES.map((cat) => (
              <CategoryTab
                key={cat.id}
                active={activeCategory === cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                label={cat.label}
                compact
              />
            ))}
          </div>
        </div>

        <FadeIn delay={0.1} className="hidden md:block mb-14">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label={t("title")}
          >
            <CategoryTab
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              label={t("tabAll")}
            />
            {MENU_CATEGORIES.map((cat) => (
              <CategoryTab
                key={cat.id}
                active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                label={cat.label}
              />
            ))}
          </div>
        </FadeIn>

        {search && (
          <p className="md:hidden text-center text-ivory-dim text-sm mb-4">{resultsLabel}</p>
        )}

        {/* Mobile accordion */}
        <div className="md:hidden space-y-2">
          {filteredCategories.length === 0 ? (
            <p className="text-center text-ivory-dim py-8 text-[15px]">{t("noResults")}</p>
          ) : (
            filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-sm glass-panel border border-champagne/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpen(mobileOpen === cat.id ? null : cat.id)
                  }
                  className="w-full flex items-center justify-between gap-3 px-4 py-3.5 min-h-[52px] text-left touch-manipulation"
                  aria-expanded={mobileOpen === cat.id}
                >
                  <span className="font-display text-base text-ivory leading-snug">{cat.label}</span>
                  <span className="text-champagne text-sm tracking-wider shrink-0">
                    {cat.items.length} · {mobileOpen === cat.id ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {mobileOpen === cat.id && (
                    <motion.div
                      initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reducedMotion ? 0 : 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 pb-3 space-y-2">
                        {cat.items.map((item, i) => (
                          <MenuItemCard
                            key={item.id}
                            item={item}
                            index={i}
                            takeawayLabel={menuMessages.takeawayLabel}
                            reducedMotion={reducedMotion}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:block">
          {search && (
            <p className="text-center text-ivory-dim mb-10 text-sm tracking-wide">
              {resultsLabel}
            </p>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${search}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-20"
            >
              {filteredCategories.map((category) => (
                <div key={category.id}>
                  <h3 className="font-display text-2xl md:text-3xl text-ivory font-medium mb-8 flex items-center gap-6">
                    <span className="gold-line w-12 shrink-0" aria-hidden />
                    {category.label}
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-4">
                    {category.items.map((item, i) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        index={i}
                        takeawayLabel={menuMessages.takeawayLabel}
                        reducedMotion={reducedMotion}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCategories.length === 0 && (
            <p className="text-center text-ivory-dim py-16 font-light">
              {t("noResultsHint")}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function CategoryTab({
  active,
  onClick,
  label,
  compact,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "shrink-0 snap-start uppercase tracking-[0.12em] rounded-sm transition-all duration-300 touch-manipulation whitespace-nowrap",
        compact
          ? "px-4 py-2.5 text-[11px] min-h-[44px]"
          : "px-5 py-2.5 text-xs min-h-[40px]",
        active
          ? "bg-champagne/15 text-champagne border border-champagne/40 shadow-glow-sm"
          : "text-ivory-muted border border-white/10 bg-white/[0.03] hover:border-champagne/25 hover:text-ivory"
      )}
    >
      {label}
    </button>
  );
}
