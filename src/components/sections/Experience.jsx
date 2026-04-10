import { motion } from "framer-motion";

const timeline = [
  {
    year: "Present",
    title: "Building Real-World Projects",
    description: "Developing scalable full-stack applications like NLDBI and Quizzify, focusing on advanced system architecture and AI integration.",
  },
  {
    year: "2023",
    title: "Deep Dive into Backend & C++",
    description: "Started exploring low-level systems, data structures, and algorithms. Built microservices and learned the importance of performance.",
  },
  {
    year: "2022",
    title: "Frontend & The Web",
    description: "Discovered React and Tailwind CSS. Obsessed over creating beautiful UI/UX and fluid animations for the web.",
  },
  {
    year: "2021",
    title: "Hello World",
    description: "Wrote my first line of code. The curiosity of making the computer solve logic puzzles sparked a lifelong passion.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl px-6 mx-auto">
        <div className="mb-16 md:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Journey.</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            How I got here and what I've learned along the way.
          </p>
        </div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:border-none">
          {/* Subtle line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -mt-4 -mb-4 w-px bg-zinc-800" />
          
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connecting Dot */}
                <div className="absolute -left-[21px] md:static md:left-auto flex items-center justify-center w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 z-10 md:mx-auto md:-ml-5 md:mr-0 group hover:border-cyan-500/50 transition-colors">
                  <div className="w-3 h-3 bg-zinc-700 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300" />
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ml-8 md:ml-0 md:px-12 ${
                  idx % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-cyan-400 font-bold mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
