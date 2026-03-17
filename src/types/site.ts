export type NavigationItem = {
  href: string;
  label: string;
};

export type Author = {
  name: string;
  role: string;
  bio: string;
};

export type SiteConfig = {
  blogName: string;
  blogTitle: string;
  blogDescription: string;
  footerText: string;
  siteUrl: string;
  author: Author;
  navigation: NavigationItem[];
};