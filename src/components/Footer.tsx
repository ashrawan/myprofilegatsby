import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 text-center text-gray-400 bg-gray-950/80 backdrop-blur-sm">
      <p>© {currentYear} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
