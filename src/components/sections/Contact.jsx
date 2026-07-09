import { motion } from "framer-motion";
import RevealText from "../ui/RevealText";
import PaperAirplaneButton from "../ui/PaperAirplaneButton";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[130px] rounded-t-full pointer-events-none" />
      
      <div className="max-w-3xl px-6 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl p-8 md:p-16 border border-white/5"
        >
          <div className="text-3xl md:text-5xl font-extrabold text-white mb-6 flex justify-center flex-wrap gap-x-2">
            <RevealText text="Let's build something" className="inline-block" />
            <RevealText text="cool" className="inline-block text-cyan-400 text-glow" />
            <RevealText text="together." className="inline-block" />
          </div>
          <p className="text-zinc-200 text-lg mb-10 max-w-xl mx-auto">
            Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
          </p>
          
          <form className="space-y-4 max-w-md mx-auto mb-10 text-left">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your Message..."
                className="w-full px-5 py-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              ></textarea>
            </div>
            <PaperAirplaneButton />
          </form>

          <p className="text-zinc-300 text-sm">
            © {new Date().getFullYear()} Sautrik. Crafted with React & Tailwind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
