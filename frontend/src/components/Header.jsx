import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
  return (
    <header className="bg-white text-[#19185E] p-3 flex justify-between items-center shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2 ml-4 flex-shrink-0">
        <img src="/logo.png" alt="Логотип" className="h-8 w-auto" />
        <h1 className="text-2xl font-bold">EcoTrack</h1>
      </div>

      <nav className="flex gap-6 text-lg font-medium mx-4 flex-grow justify-center">
        <a href="/edu" className="hover:underline">
          Образование
        </a>
        <a href="https://t.me/your_bot" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Telegram-бот
        </a>
      </nav>

      <div className="mr-4 flex-shrink-0">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
