import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white text-sm p-8 w-full flex flex-wrap justify-center space-x-4 mt-auto">
      <a href="/about" className="hover:underline">
        About
      </a>
      <a href="/help-center" className="hover:underline">
        Help Center
      </a>
      <a href="/terms-of-service" className="hover:underline">
        Terms of Service
      </a>
      <a href="/privacy-policy" className="hover:underline">
        Privacy Policy
      </a>
      <a href="/cookie-policy" className="hover:underline">
        Cookie Policy
      </a>
      <a href="/ads-info" className="hover:underline">
        Ads Info
      </a>
      <a href="/more" className="hover:underline">
        More
      </a>
      <span>&copy; {currentYear} Spire</span>
    </footer>
  );
};

export default Footer;
