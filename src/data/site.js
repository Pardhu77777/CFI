// Site name, contact details and navigation.

// Prefix a file in public/ with the site's base path ("/" in dev, "/CFI/" on GitHub Pages).
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");
export const SITE_NAME = "Christian Friends of Israel";
export const SITE_TAGLINE = "United Kingdom";

export const CONTACT = {
  phone: "+44 (0)1323 410810",
  phoneHref: "tel:+441323410810",
  address: ["PO BOX 2687", "Eastbourne", "East Sussex", "BN22 7LZ"],
  charityNo: "1101899",
  companyNo: "04984515",
};

export const DOWNLOAD_CATEGORIES = [
  { id: "hebrew-words", label: "Articles On Hebrew Words" },
  { id: "bible", label: "Bible" },
  { id: "current-affairs", label: "Current Affairs" },
  { id: "flyers-forms", label: "Flyers And Forms" },
  { id: "history", label: "History" },
  { id: "jewish-roots", label: "Jewish Roots" },
  { id: "prayer", label: "Prayer" },
];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About CFI", to: "/about" },
  { label: "News", to: "/news" },
  { label: "Downloads", to: "/downloads" },
  { label: "Prayer", to: "/prayer" },
  { label: "Support", to: "/support" },
  { label: "Magazine", to: "/magazine" },
  { label: "Shop", to: "/shop" },
  { label: "Links", to: "/links" },
  { label: "Contact", to: "/contact" },
];
