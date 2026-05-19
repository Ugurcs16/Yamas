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

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "vorspeisen",
    label: "Vorspeisen",
    items: [
      {
        id: 1,
        name: "Zaziki",
        description: "Joghurt mit Gurken und frischem Knoblauch",
        price: "5,60 €",
      },
      {
        id: 2,
        name: "Tirokafteri",
        description: "Schafskäse geschlagen, scharf",
        price: "6,90 €",
      },
      {
        id: 3,
        name: "Knoblauchbrot",
        description: "Sechs Scheiben Brot mit Knoblauch",
        price: "6,50 €",
      },
      {
        id: 4,
        name: "Saganaki",
        description: "Panierter Fetakäse",
        price: "7,60 €",
      },
      {
        id: 5,
        name: "Peperoni",
        description: "Gegrillte Peperoni mit Knoblauch und Zaziki",
        price: "6,70 €",
      },
    ],
  },
  {
    id: "salate",
    label: "Salate",
    items: [
      {
        id: 6,
        name: "Gyros Salat",
        description:
          "mit Schweinefleisch, Tomaten, Gurken, Paprika und Senf-Honig-Dressing",
        price: "12,90 €",
      },
      {
        id: 7,
        name: "Hähnchen Salat",
        description:
          "mit Tomaten, Gurken, Zwiebeln, Champignons, Mais, Paprika, Cashewkernen, Parmesan und Senf-Honig-Dressing",
        price: "13,90 €",
        halal: true,
      },
      {
        id: 8,
        name: "Bauernsalat",
        description:
          "mit Tomaten, Gurken, Zwiebeln, Paprika, Oliven, Peperoni, Fetakäse und Öl-Essig-Dressing",
        price: "12,90 €",
      },
      {
        id: 9,
        name: "Saganaki Salat",
        description:
          "mit paniertem Fetakäse, Tomaten, Gurken, Babyspinat, Cashewkernen und Senf-Honig-Dressing",
        price: "14,90 €",
      },
    ],
  },
  {
    id: "pita",
    label: "Pita-Spezialitäten",
    items: [
      {
        id: 10,
        name: "Pita Gyros - Schwein",
        description: "mit Pommes, Zwiebeln, Tomaten und Zaziki",
        price: "8,50 €",
        takeawayPrice: "6,50 €",
      },
      {
        id: 11,
        name: "Pita Gyros - Hähnchen",
        description: "mit Pommes, Zwiebeln, Tomaten und Zaziki",
        price: "8,50 €",
        takeawayPrice: "6,50 €",
        halal: true,
      },
      {
        id: 12,
        name: "Pita Bifteki",
        description:
          "Bifteki aus Rindfleisch, mit Pommes, Zwiebeln, Tomaten und Zaziki",
        price: "8,50 €",
        takeawayPrice: "6,50 €",
      },
      {
        id: 13,
        name: "Pita Souvlaki - Schwein",
        description: "mit Pommes, Zwiebeln, Tomaten und Zaziki",
        price: "8,50 €",
        takeawayPrice: "6,50 €",
      },
      {
        id: 14,
        name: "Pita Souvlaki - Hähnchen",
        description: "mit Pommes, Zwiebeln, Tomaten und Zaziki",
        price: "8,50 €",
        takeawayPrice: "6,50 €",
        halal: true,
      },
      {
        id: 15,
        name: "Skepasti Pita mit Gyros",
        description:
          "zwei Pita-Brote, mit Schweinefleisch, Gouda, Pommes, Salat und Zaziki",
        price: "11,90 €",
      },
    ],
  },
  {
    id: "fleisch",
    label: "Fleischspezialitäten",
    items: [
      {
        id: 16,
        name: "Gyros vom Schwein",
        description: "mit Salat, Pommes, Zwiebeln und Zaziki",
        price: "12,90 €",
      },
      {
        id: 17,
        name: "Hähnchen Gyros",
        description: "mit Salat, Pommes, Zwiebeln und Zaziki",
        price: "12,90 €",
        halal: true,
      },
      {
        id: 18,
        name: "Gyros vom Schwein mit Kalamaris",
        description: "mit Salat, Pommes, Zwiebeln und Zaziki",
        price: "14,90 €",
      },
      {
        id: 19,
        name: "Bifteki",
        description:
          "drei Bifteki aus Rindfleisch, mit Salat, Pommes, Zwiebeln und Zaziki",
        price: "12,90 €",
      },
      {
        id: 20,
        name: "Souvlaki - Schwein",
        description:
          "drei Schweinefleischspieße, mit Salat, Pommes, Zwiebeln und Zaziki",
        price: "12,90 €",
      },
      {
        id: 21,
        name: "Souvlaki - Hähnchen",
        description:
          "drei Hähnchenfleischspieße, mit Salat, Pommes, Zwiebeln und Zaziki",
        price: "12,90 €",
        halal: true,
      },
    ],
  },
  {
    id: "teller-2",
    label: "Teller für 2 Personen",
    items: [
      {
        id: 22,
        name: "Schwein Mix Teller",
        description:
          "Gyros vom Schwein, 2x Souvlaki, 2x Bifteki, 2x Schweineschnitzel, Pommes und Reis, Salat und Zaziki",
        price: "32,30 €",
      },
      {
        id: 23,
        name: "Hähnchen Mix Teller",
        description:
          "Hähnchen-Gyros, 2x Souvlaki, 2x Hähnchenhacksteak, Hähnchenschnitzel, Pommes und Reis, Salat und Zaziki",
        price: "33,40 €",
        halal: true,
      },
    ],
  },
  {
    id: "grill",
    label: "Grill Spezialitäten",
    items: [
      {
        id: 24,
        name: "Halbes Hähnchen",
        description: "mit Salat, Pommes oder Reis und Soße",
        price: "10,60 €",
        halal: true,
      },
      {
        id: 25,
        name: "Halbes Hähnchen",
        description: "Mitnehmen / Liefern",
        price: "7,50 €",
        halal: true,
      },
    ],
  },
  {
    id: "fast-food",
    label: "Fast Food",
    items: [
      {
        id: 26,
        name: "Chicken Wings",
        description: "6x Chicken Wings mit Pommes und Soße",
        price: "8,90 €",
        halal: true,
      },
      {
        id: 27,
        name: "Chicken Nuggets",
        description: "8x Chicken Nuggets mit Pommes und Soße",
        price: "8,90 €",
        halal: true,
      },
      {
        id: 28,
        name: "Cheat Meal",
        description: "Pommes mit Bacon und Käse überbacken",
        price: "7,90 €",
      },
      {
        id: 29,
        name: "Ifaistio",
        description: "2x Spiegeleier mit Pommes, Bacon und Gouda",
        price: "11,40 €",
      },
    ],
  },
  {
    id: "ueberbacken",
    label: "Überbackenes | Pfannengerichte",
    items: [
      {
        id: 30,
        name: "Gyros überbacken",
        description:
          "mit Schweine- oder Hähnchenfleisch, mit Metaxasoße, Käse, Pommes und Salat",
        price: "13,90 €",
      },
      {
        id: 31,
        name: "Bifteki überbacken",
        description:
          "Bifteki aus Rindfleisch, mit Metaxasoße, Käse, Pommes und Salat",
        price: "14,20 €",
      },
      {
        id: 32,
        name: "Souvlaki überbacken",
        description:
          "aus Schweinefleisch, mit Metaxasoße, Käse, Pommes und Salat",
        price: "13,90 €",
      },
      {
        id: 33,
        name: "Gyrospfanne",
        description:
          "Schweinefleisch, mit Metaxasoße, Fetakäse, Pommes und Salat",
        price: "14,10 €",
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      {
        id: 34,
        name: "Penne mit Hähnchen",
        description:
          "Penne mit Hähnchenbrust und Weißwein- oder Tomatensoße",
        price: "13,50 €",
        halal: true,
      },
      {
        id: 35,
        name: "Penne mit Garnelen",
        description:
          "mit Knoblauch, Basilikum, Weißwein- oder Tomatensoße",
        price: "13,00 €",
      },
    ],
  },
  {
    id: "burger",
    label: "Burger",
    items: [
      {
        id: 36,
        name: "Athen Burger",
        description:
          "Schweine- oder Hähnchenfleisch mit Käse, Tomaten, Salat, Zwiebeln, Pommes und Soße",
        price: "9,90 €",
      },
      {
        id: 37,
        name: "Akropoli",
        description:
          "Rindfleisch mit Käse, Tomaten, Salat, Zwiebeln, Pommes und Soße",
        price: "10,50 €",
      },
      {
        id: 38,
        name: "Dimi Burger",
        description:
          "Hähnchen-Hacksteak mit Käse, Tomaten, Salat, Zwiebeln, Pommes und Soße",
        price: "10,50 €",
        halal: true,
      },
      {
        id: 39,
        name: "Yamas Hot Smash Burger",
        description:
          "2x Rindfleischpatti mit sauren Gurken, Spiegelei, Chili-Cheese und Pommes",
        price: "14,90 €",
      },
    ],
  },
  {
    id: "schnitzel",
    label: "Schnitzel",
    items: [
      {
        id: 40,
        name: "Schweineschnitzel",
        description: "mit Salat, Pommes und Soße nach eigener Wahl",
        price: "11,50 €",
      },
      {
        id: 41,
        name: "Hähnchenschnitzel",
        description: "mit Salat, Pommes und Soße nach eigener Wahl",
        price: "11,50 €",
        halal: true,
      },
    ],
  },
  {
    id: "kinder",
    label: "Kinderteller",
    items: [
      {
        id: 42,
        name: "Hello Kitty",
        description: "Gyros mit Pommes",
        price: "9,10 €",
      },
      {
        id: 43,
        name: "One Piece",
        description: "Schnitzel mit Pommes",
        price: "8,90 €",
      },
      {
        id: 44,
        name: "Spong Bob",
        description: "Souvlaki mit Pommes",
        price: "8,90 €",
      },
    ],
  },
  {
    id: "beilagen",
    label: "Beilagen",
    items: [
      { id: 45, name: "Pommes", description: "", price: "3,90 €" },
      { id: 46, name: "Reis", description: "", price: "3,90 €" },
      {
        id: 47,
        name: "Beilagensalat",
        description: "",
        price: "4,20 €",
      },
    ],
  },
];

export const ALL_MENU_ITEMS = MENU_CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryLabel: cat.label }))
);
