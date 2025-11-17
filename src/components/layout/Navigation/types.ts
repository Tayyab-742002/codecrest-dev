export interface TabItem {
  id: number;
  title: string;
}

export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
  image?: string;
}

export interface MegaMenuHero {
  title: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  hero: MegaMenuHero;
  columns?: MegaMenuColumn[];
}
