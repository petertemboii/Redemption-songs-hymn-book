import Link from "next/link";
import React from "react";
import songs from "@/constants/songs";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="justify-center  text-center fixed bottom-0 w-full bg-gray-200 py-6">
      <div className="flex flex-row justify-center">
        <div>
          <p>Copyright {currentDate}</p>
        </div>
        <nav className="px-2">
          <Link href="/about">
            <p>About</p>
          </Link>
        </nav>
      </div>
      <div>
        <p className="pt-3">(We have currently added {songs[songs.length - 1].number} of 945 songs.)</p>
      </div>
    </footer>
  );
};

export default Footer;
