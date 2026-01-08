import { EXPERIENCES, SKILLS, CERTIFICATIONS } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-12">Professional Journey</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l border-white/10 group"
              >
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-purple-500 group-hover:scale-150 transition-transform"></div>
                <div className="space-y-1">
                  <p className="text-sm font-mono text-purple-400">
                    {exp.period}
                  </p>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-zinc-300 font-medium">{exp.company}</p>
                  <p className="text-sm text-zinc-500 pt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-4">
            {SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-bold">{skill.name}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-xs font-mono text-zinc-500">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <p className="font-bold">{cert.name}</p>
                  <p className="text-sm text-zinc-400">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
