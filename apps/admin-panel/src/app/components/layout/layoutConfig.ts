export type ConfigOption = "nav";
export type NavItem = "items";
export type LayoutConfig<T = ConfigOption> = T extends ConfigOption
  ? Record<
      T,
      T extends "nav" ? { items: Record<string, string | string[]> } : never
    >
  : never;

export const layoutConfig: LayoutConfig = {
  nav: {
    items: {
      cases: [
        "Chroma Case",
        "Chroma 2 Case",
        "Chroma 3 Case",
        "Clutch Case",
        "CS:GO Weapon Case,",
        "CS:GO Weapon Case 2",
        "CS:GO Weapon Case 3",
        "CS20 Case",
        "Danger Zone Case",
        "Dreams & Nightmares Case",
        "eSports 2013 Case",
        "eSports 2013 Winter Case",
        "eSports 2013 Summer Case",
        "Falchion Case",
        "Fracture Case",
        "Gamma Case",
        "Gamma 2 Case",
        "Glove Case",
        "Horizon Case",
        "Huntsman Weapon Case",
        "Operation Bravo Case",
        "Operation Breakout Weapon Case",
        "Operation Broken Flag Case",
        "Operation Hydra Case",
        "Operation Phoenix Weapon Case",
        "Operation Riptide Case",
        "Operation Vanguard Weapon Case",
        "Operation Wildfire Case",
        "Prisma Case",
        "Prisma 2 Case",
        "Revolver Case",
        "Shadow Case",
        "Shattered Web Case",
        "Snakebite Case",
        "Spectrum Case",
        "Spectrum 2 Case",
        "Winter Offensive Weapon Case",
      ],
      sell: "",
      buy: "",
    },
  },
};
