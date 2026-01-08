import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Experience from "./components/Experience";

const App = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014]">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <BentoGrid />
        <Experience />

        <section
          id="contact"
          className="py-32 px-4 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Ready to work together?
          </h2>

          <p className="text-xl text-zinc-400 mb-12">
            프론트엔드 개발자로서 새로운 기회를 찾고 있습니다. 사용자 경험과
            성능을 고민하는 팀과 함께 성장하고 싶습니다.
          </p>

          <a
            href="mailto:rn_chic@naver.com"
            className="inline-flex items-center justify-center px-12 py-5
               bg-gradient-to-r from-purple-600 to-pink-600
               rounded-2xl font-black text-xl
               hover:scale-105 transition-transform
               shadow-lg shadow-purple-500/20"
          >
            Contact Me
          </a>

          <div className="flex justify-center gap-8 mt-16 text-zinc-500 font-mono text-sm">
            <a
              href="https://github.com/Dante0214"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-zinc-600 text-xs font-mono uppercase tracking-widest">
        &copy; {new Date().getFullYear()} CHIHO PORTFOLIO &bull;
      </footer>
    </div>
  );
};

export default App;
