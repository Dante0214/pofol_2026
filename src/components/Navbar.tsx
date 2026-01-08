import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="flex items-center gap-8 px-8 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl relative">
        {/* 일반상태 메뉴 */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#hero"
            className="text-sm font-medium hover:text-purple-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-sm font-medium hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <div className="h-4 w-[1px] bg-white/20"></div>
        </div>

        <span className="text-lg font-black tracking-tighter bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent z-50 relative">
          CHIHO
        </span>

        <div className="hidden md:flex items-center gap-8">
          <div className="h-4 w-[1px] bg-white/20"></div>
          <a
            href="#experience"
            className="text-sm font-medium hover:text-purple-400 transition-colors"
          >
            Expertise
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {isOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-sm mt-4 z-50">
            <div className="flex flex-col items-center gap-6 p-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl md:hidden animate-fade-in-down shadow-2xl">
              <a
                href="#hero"
                className="text-lg font-medium hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-lg font-medium hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-lg font-medium hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Expertise
              </a>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
