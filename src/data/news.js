// News articles. Add new ones to the top of the list.
// body blocks: { type: "p", text } | { type: "quote", paras: [...] } (a quote para may be { highlight: text })
export const NEWS = [
  {
    slug: "no-genocide-in-gaza",
    title: "No Genocide in Gaza",
    date: "2026-09-25",
    type: "video", // article | audio | video
    excerpt: "Yesterday afternoon, at 2pm New York time, it was Benjamin Netanyahu’s turn to address the United Nations General Assembly",
    video: { id: "qDc7OL1yxY8", embed: "https://www.youtube.com/embed/qDc7OL1yxY8?rel=0&autoplay=1" },
    body: [
      {
        type: "p",
        text: "Yesterday afternoon, at 2pm New York time, it was Benjamin Netanyahu’s turn to address the United Nations General Assembly. Many delegates left the assembly hall rather than listen to Israel’s prime minister, but he delivered a clear message. In particular, he challenged the widespread claims of genocide in Gaza, saying:",
      },
      {
        type: "quote",
        paras: [
          "Tyrants the world over seek to threaten us, they seek to undermine our resolve with their campaign of lies. But ultimately, as on the military battlefield, the Jewish People will prevail.",
          "It will take time. It will take time to vanquish the lies. It will take time for the world to acknowledge what is so plain to see. That Hamas used Palestinian civilians as human shields. That it used hospitals, schools and mosques as terrorist command posts. That it stole much of the food we let into Gaza.",
          "While Hamas did everything possible to keep Palestinian civilians in harm’s way, often at gunpoint, Israel did everything possible to get them out of harm’s way. We sent millions of text messages warning civilians to leave combat areas. We made millions of phone calls. We dropped millions of leaflets.",
          "I want to ask you some questions. What genocidal regime gives a million polio vaccinations to the enemy’s population? What genocidal regime enables the distribution of two million tons of food into Gaza? That’s a ton for every person.",
          { highlight: "Accusing Israel of genocide is the greatest lie of the century." },
          "If you want to know how big a lie, if you want to know how absurd this is, listen to Colonel John Spencer. He’s head of Urban Warfare studies at West Point. He’s considered the world’s foremost expert on urban warfare. I think he’s with us today.",
          "Colonel Spencer has studied every urban war from antiquity to modern times, from ancient Greece to Mosul to Gaza. Here is what Colonel Spencer says: \"Israel has done more to prevent civilian casualties in war than any other military in history.\"",
          "We’ve taken innumerable steps to protect the civilian population.",
          { highlight: "Is this genocide? Of course not. It’s the opposite of genocide." },
        ],
      },
    ],
  },
];

export const NEWS_CATEGORIES = [
  { label: "Articles", type: "article" },
  { label: "Audio", type: "audio" },
  { label: "Videos", type: "video" },
];

export const NEWS_TAGS = [
  "Advocacy", "Anti-Semitism", "BDS", "Business", "CFI News", "Christians", "Diplomacy", "Egypt", "Fatah", "Feasts", "FocalPoint TV", "Gaza",
  "Geography", "Hamas", "Hebraic Roots", "Hezbollah", "Holocaust", "Hostages", "Iran", "Jerusalem", "Law", "Lebanon", "Media", "Medical",
  "Palestinian Authority", "Palestinian Islamic Jihad", "Politics", "Protests", "Refugees", "Revelation TV", "Saudi Arabia", "Science & Technology", "Sderot", "Syria",
];

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
export const splitDate = (iso) => {
  const [y, m, d] = iso.split("-");
  return { day: d, month: MONTHS[Number(m) - 1], year: y };
};
