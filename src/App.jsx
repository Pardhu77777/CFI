import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import InternationalRelationships from "./pages/InternationalRelationships.jsx";
import HowWeBegan from "./pages/HowWeBegan.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";
import DoctrinalInformation from "./pages/DoctrinalInformation.jsx";
import KesherCourse from "./pages/KesherCourse.jsx";
import IsraelQuestions from "./pages/IsraelQuestions.jsx";
import News from "./pages/News.jsx";
import NewsArticle from "./pages/NewsArticle.jsx";
import Downloads from "./pages/Downloads.jsx";
import Prayer from "./pages/Prayer.jsx";
import Magazine from "./pages/Magazine.jsx";
import Shop from "./pages/Shop.jsx";
import Links from "./pages/Links.jsx";
import Contact from "./pages/Contact.jsx";
import Donate from "./pages/Donate.jsx";
import Login from "./pages/Login.jsx";
import { SITE_NAME } from "./data/site.js";

const pageTitles = {
  "/": "Home",
  "/about": "Who we are",
  "/about/international-relationships": "International Relationships",
  "/about/how-we-began": "How we began",
  "/about/what-we-do": "What we do",
  "/about/doctrinal-information": "Doctrinal information",
  "/about/kesher-course": "Kesher Course",
  "/about/israel-questions": "Israel - Questions, Questions",
  "/news": "News",
  "/downloads": "Downloads",
  "/prayer": "Prayer",
  "/support": "Donations",
  "/magazine": "ENHANCE Magazine",
  "/shop": "Online Shop",
  "/links": "Links",
  "/contact": "Contact Us",
  "/donate": "Donations",
  "/login": "Login",
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const site = `${SITE_NAME} | CFI UK`;
    const page = pageTitles[location.pathname] || "News";
    document.title = location.pathname === "/" ? site : `${page} | ${site}`;
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/international-relationships" element={<InternationalRelationships />} />
          <Route path="/about/how-we-began" element={<HowWeBegan />} />
          <Route path="/about/what-we-do" element={<WhatWeDo />} />
          <Route path="/about/doctrinal-information" element={<DoctrinalInformation />} />
          <Route path="/about/kesher-course" element={<KesherCourse />} />
          <Route path="/about/israel-questions" element={<IsraelQuestions />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/support" element={<Donate />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
