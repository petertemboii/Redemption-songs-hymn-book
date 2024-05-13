import React from "react";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="flex justify-center  text-center py-4 fixed bottom-0 w-full bg-gray-200 py-6">
      <div>
        <p>Copyright {currentDate}</p>
      </div>
    </footer>
  );
};

export default Footer;
