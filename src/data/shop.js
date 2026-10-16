import { asset } from "./site.js";

// Homepage "Recommended Resources".
export const RECOMMENDED = [
  { image: asset("books/book-1.jpg"), title: "Bible: A Story That Makes Sense of Life (The)", author: "Andrew Ollerton", price: "£12.00" },
  { image: asset("books/book-2.png"), title: "Builder’s Stone (The)", price: "£21.00" },
  { image: asset("books/book-3.jpg"), title: "From Passover to Easter", author: "Derek White", price: "£4.00" },
];

// Shop "Latest Products" (newest first).
export const PRODUCTS = [
  { image: asset("books/Galatians_Reconsidered.jpg"), title: "Galatians Reconsidered", author: "Neil Martin", price: "£21.00" },
  { image: asset("books/Unlocking_the_Old_Testament.jpg"), title: "Unlocking the Old Testament", author: "Yohanna Katanacho", price: "£17.00" },
  { image: asset("books/CalendarWebPromo.jpg"), title: "Biblical Lands of Israel (2026-2027)", author: "Galilee Calendars", price: "£10.00" },
  ...RECOMMENDED,
];

export const SHOP_CATEGORIES = [
  "Special Offers",
  "Latest Products",
  "Books",
  "CFI UK Conference DVDs",
  "Booklets",
  "DVDs",
  "CDs",
  "Pamphlets",
  "Courses",
  "MP4/USB",
  "Maps",
  "CD-Roms",
  "Calendars",
  "Music",
];

export const SHOP_SUBJECTS = ["Bible", "Current Affairs", "History", "Jewish Roots"];
