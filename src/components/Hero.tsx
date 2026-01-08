const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.2] break-keep">
          논리적인 구조 위에
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            사용자 경험 중심의 웹
          </span>
          을<br />
          구현합니다.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed break-keep">
          React 기반으로 복잡한 문제를 구조적으로 해결하고,
          <br className="hidden md:block" />
          AI 기술을 활용해 사용자 경험의 밀도를 높입니다.
          <br className="hidden md:block" />
          논리와 감각을 균형 있게 설계하는 프론트엔드 개발자
          <strong> 안치호</strong>입니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            연락하기
          </a>
        </div>
      </div>

      <div className="mt-20 animate-float">
        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl">
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <code className="text-sm font-mono text-purple-300">
            <span className="text-blue-400">const</span> CHIHO ={" "}
            <span className="text-yellow-300">{`{`}</span>
            <br />
            &nbsp;&nbsp;role:{" "}
            <span className="text-green-400">'Frontend Developer'</span>,
            <br />
            &nbsp;&nbsp;stack:{" "}
            <span className="text-yellow-300">
              ['React', 'JavaScript', 'REST API']
            </span>
            ,
            <br />
            &nbsp;&nbsp;goal:{" "}
            <span className="text-green-400">'Build Value with Logic'</span>
            <br />
            <span className="text-yellow-300">{`}`}</span>;
          </code>
        </div>
      </div>
    </section>
  );
};

export default Hero;
