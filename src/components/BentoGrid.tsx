import { PROJECTS } from "../constants";

const BentoGrid = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
        <div className="h-1 w-20 bg-purple-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[800px]">
        {/* Large Feature */}
        <div
          className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 transition-all cursor-pointer"
          onClick={() => window.open(PROJECTS[0].link, "_blank")}
        >
          <img
            src={PROJECTS[0].imageUrl}
            className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 p-8 space-y-4">
            <div className="flex gap-2">
              {PROJECTS[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-bold">{PROJECTS[0].title}</h3>
            <p className="text-zinc-400 line-clamp-2">
              {PROJECTS[0].description}
            </p>
          </div>
        </div>

        {/* Medium Feature */}
        <div
          className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 transition-all cursor-pointer"
          onClick={() => window.open(PROJECTS[1].link, "_blank")}
        >
          <img
            src={PROJECTS[1].imageUrl}
            className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 p-8">
            <h3 className="text-2xl font-bold mb-2">{PROJECTS[1].title}</h3>
            <p className="text-sm text-zinc-400">{PROJECTS[1].description}</p>
          </div>
        </div>

        {/* Small Features */}
        <div
          className="relative group overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 transition-all cursor-pointer"
          onClick={() => window.open(PROJECTS[2].link, "_blank")}
        >
          <img
            src={PROJECTS[2].imageUrl}
            className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 p-6">
            <h3 className="text-lg font-bold">{PROJECTS[2].title}</h3>
          </div>
        </div>

        <div
          className="md:whitespace-pre-wrap relative group overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 transition-all cursor-pointer"
          onClick={() => window.open(PROJECTS[3].link, "_blank")}
        >
          <img
            src={PROJECTS[3].imageUrl}
            className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 p-6">
            <h3 className="text-lg font-bold">{PROJECTS[3].title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
