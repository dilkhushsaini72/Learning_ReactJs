import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <div className="text-sm">
        <p>© {new Date().getFullYear()} My Portfolio</p>
        <p>Made with ❤️ by Gunnu</p>
      </div>
    </footer>
  );
};

export default Footer;
