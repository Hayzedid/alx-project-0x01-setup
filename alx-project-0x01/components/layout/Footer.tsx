import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © 2025 Daily Contents. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;