"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { BestSellerBadge, HalalBadge } from "@/components/ui/HalalBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MENU_CATEGORIES, type MenuCategoryId, type MenuItem } from "@/data/menu";
import { isBestSeller } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const bestseller = isBestSeller(item.name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group rounded-sm bg-gradient-to-br from-ivory/[0.04] to-transparent border border-champagne/12 p-5 md:p-6 backdrop-blur-sm hover:border-champagne/35 hover:shadow-glow-warm hover:from-champagne/[0.06] transition-all duration-500"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h4 className="font-display text-lg text-ivory font-medium group-hover:text-champagne transition-colors duration-300">
              {item.name}
            </h4>
            {bestseller && <BestSellerBadge />}
            {item.halal && <HalalBadge />}
          </div>
          {item.description && (
            <p className="text-sm text-ivory-muted font-light leading-relaxed">
              {item.description}
            </p>
          )}
          {item.takeawayPrice && (
            <p className="mt-3 text-xs text-olive-light tracking-wide">
              Mitnehmen / Liefern · {item.takeawayPrice}
            </p>
          )}
        </div>
        <p className="font-display text-xl text-champagne whitespace-nowrap shrink-0">
          {item.price}
        </p>
      </div>
    </motion.article>
  );
}

export function MenuSection() {
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
  }, [activeCategory, search]);

  const totalResults = filteredCategories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  return (
    <section id="speisekarte" className="luxury-section py-28 md:py-40">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Kulinarik"
          title="Speisekarte"
          subtitle="Jedes Gericht mit Sorgfalt komponiert — entdecke unsere griechische Vielfalt"
        />

        <FadeIn className="mb-12">
          <label htmlFor="menu-search" className="sr-only">
            Gerichte suchen
          </label>
          <div className="relative max-w-lg mx-auto">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-dim"
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
              placeholder="Gericht suchen…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-sm bg-ivory/[0.04] border border-champagne/20 backdrop-blur-xl py-4 pl-12 pr-6 text-ivory-warm placeholder:text-ivory-dim font-light focus:outline-none focus:border-champagne/45 focus:shadow-glow-sm transition-all duration-300"
            />
          </div>
        </FadeIn>

        {/* Desktop tabs */}
        <FadeIn delay={0.1} className="hidden md:block mb-14">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Menükategorien"
          >
            <CategoryTab
              active={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
              label="Alle"
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

        {/* Mobile accordion */}
        <div className="md:hidden mb-10 space-y-2">
          {search && (
            <p className="text-center text-ivory-dim text-sm mb-4">
              {totalResults} {totalResults === 1 ? "Gericht" : "Gerichte"} gefunden
            </p>
          )}
          {filteredCategories.length === 0 ? (
            <p className="text-center text-ivory-dim py-10">Keine Gerichte gefunden.</p>
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
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  aria-expanded={mobileOpen === cat.id}
                >
                  <span className="font-display text-ivory">{cat.label}</span>
                  <span className="text-champagne text-sm tracking-wider">
                    {cat.items.length} · {mobileOpen === cat.id ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {mobileOpen === cat.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 space-y-3"
                    >
                      {cat.items.map((item, i) => (
                        <MenuItemCard key={item.id} item={item} index={i} />
                      ))}
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
              {totalResults} {totalResults === 1 ? "Gericht" : "Gerichte"} gefunden
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
                      <MenuItemCard key={item.id} item={item} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCategories.length === 0 && (
            <p className="text-center text-ivory-dim py-16 font-light">
              Keine Gerichte gefunden. Versuche einen anderen Suchbegriff.
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
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "px-5 py-2.5 text-xs uppercase tracking-[0.15em] rounded-sm transition-all duration-400",
        active
          ? "bg-champagne/15 text-champagne border border-champagne/40 shadow-glow-sm"
          : "text-ivory-muted border border-white/10 bg-white/[0.02] hover:border-champagne/25 hover:text-ivory"
      )}
    >
      {label}
    </button>
  );
}
