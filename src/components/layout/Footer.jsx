import SRLogo from "../ui/SRLogo";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { Mail } from "lucide-react";

export default function Footer() {

  return (
    <footer className="relative z-20 bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Top accent glow line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <a href="#top" className="inline-block" aria-label="Sautrik Roy Homepage">
              <SRLogo />
            </a>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Full Stack Developer & Cloud Engineer building scalable, high-impact web architectures and AI platforms.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Right: Socials & Back-To-Top Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sautrikroy17"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900/80 hover:bg-white/10 border border-white/5 text-zinc-400 hover:text-white transition-all shadow-md"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sautrik-roy-1779r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900/80 hover:bg-white/10 border border-white/5 text-zinc-400 hover:text-white transition-all shadow-md"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:sautrikroy2006@gmail.com"
              className="p-2.5 rounded-full bg-zinc-900/80 hover:bg-white/10 border border-white/5 text-zinc-400 hover:text-white transition-all shadow-md"
              aria-label="Email Sautrik Roy"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Legal / Tech Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Sautrik Roy. All rights reserved. Licensed under MIT.
          </p>
          <p className="flex items-center gap-1 text-zinc-400">
            <span>Designed & Engineered by Sautrik Roy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
