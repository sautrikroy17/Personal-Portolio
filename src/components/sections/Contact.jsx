import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Clock,
  ExternalLink,
  FileText,
  Phone,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Live ticking IST clock (Chennai, India: UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("sautrikroy2006@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("+919641665853");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Create mailto link with encoded parameters
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Sautrik,\n\nMy name is ${formData.name} (${formData.email}).\n\nMessage:\n${formData.message}\n\n---\nSent via sautrikroy.me`
    );
    const mailtoUrl = `mailto:sautrikroy2006@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-12 md:pt-16 pb-16 md:pb-24 overflow-hidden bg-black text-white"
    >
      {/* =========================================================================
          ATMOSPHERIC WORKSPACE BACKGROUND
          Late-night developer studio desk with open laptop, warm desk lamp, steaming coffee & notebooks
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <picture>
          <source srcSet="/contact-workspace.webp" type="image/webp" />
          <img
            src="/contact-workspace.jpg"
            alt="Late Night Developer Desk Studio"
            className="w-full h-full object-cover object-[center_top] opacity-75"
            loading="lazy"
          />
        </picture>

        {/* Seamless top blend with Experience section */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-zinc-950 via-zinc-950/85 to-transparent z-10" />

        {/* Left vignette for maximum typography readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-[50%] bg-gradient-to-r from-black via-black/90 to-transparent z-10" />

        {/* Bottom fade into Footer */}
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent z-10" />

        {/* Subtle ambient cyan glow */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top-Right Ambient Watermark Quote */}
        <div className="hidden xl:block absolute top-0 right-8 text-right text-[10px] font-mono tracking-widest text-zinc-600 select-none pointer-events-none leading-relaxed">
          <div>CONNECT</div>
          <div>COLLABORATE</div>
          <div>INNOVATE</div>
        </div>

        {/* =========================================================================
            SECTION HEADER
            ========================================================================= */}
        <div className="mb-12 md:mb-16">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[11px] font-mono font-medium tracking-wider text-cyan-300 uppercase">
              GET IN TOUCH · OPEN FOR OPPORTUNITIES
            </span>
          </div>

          {/* Section Title & Number */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-1">
                05 / CONTACT & CONNECT
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Let's build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow-blue">
                  extraordinary.
                </span>
              </h2>
            </div>

            {/* Handwritten Quote */}
            <div className="hidden md:block text-right">
              <p className="font-handwriting text-2xl text-cyan-300 -rotate-2 drop-shadow-[0_2px_12px_rgba(34,211,238,0.3)]">
                "Ideas become reality when minds connect."
              </p>
              <span className="text-[11px] font-mono text-zinc-400">
                — Sautrik Roy
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Have an ambitious project, an internship opportunity, or want to discuss full-stack & AI engineering? Reach out directly or leave a message below.
          </p>
        </div>

        {/* =========================================================================
            BENTO GRID (LEFT: DIRECT CHANNELS & STATUS | RIGHT: INTERACTIVE FORM)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* =======================================================================
              LEFT COLUMN: DIRECT CHANNELS & RESUME (5 COLS)
              ======================================================================= */}
          <div className="lg:col-span-5 space-y-5">
            {/* PRIMARY EMAIL CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 p-6 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-[70px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      Direct Email
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-400">
                      Primary & Academic Inboxes
                    </p>
                  </div>
                </div>

                {/* Live Copy Feedback Toast Badge */}
                <AnimatePresence>
                  {copiedEmail && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold"
                    >
                      <Check className="w-3 h-3" />
                      COPIED!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Address & Actions */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 group-hover:border-cyan-500/20 transition-colors">
                  <div className="truncate pr-2">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      Primary Inbox
                    </span>
                    <a
                      href="mailto:sautrikroy2006@gmail.com"
                      className="text-xs sm:text-sm font-mono font-medium text-white hover:text-cyan-300 transition-colors"
                    >
                      sautrikroy2006@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-zinc-400 hover:text-cyan-300 transition-all active:scale-90"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="truncate pr-2">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      SRM IST Academic Inbox
                    </span>
                    <a
                      href="mailto:sr9973@srmist.edu.in"
                      className="text-xs sm:text-sm font-mono font-medium text-zinc-300 hover:text-cyan-300 transition-colors"
                    >
                      sr9973@srmist.edu.in
                    </a>
                  </div>
                  <a
                    href="mailto:sr9973@srmist.edu.in"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
                    title="Send Email"
                    aria-label="Send Academic Email"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* LOCATION & TIMEZONE BENTO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-5 shadow-xl space-y-4"
            >
              {/* Location & Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-mono text-zinc-300">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>
                {/* Availability Status */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </div>
              </div>

              {/* Real-Time Clock */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-mono text-zinc-400">
                    Local Time (IST)
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-white tabular-nums bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  {currentTime || "12:00:00 AM"} UTC+5:30
                </span>
              </div>

              {/* Direct Phone Line */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <a
                    href="tel:+919641665853"
                    className="text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    +91 9641665853
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* SOCIAL NETWORKS & RESUME ACCESS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sautrik-roy-1779r"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:bg-blue-950/10 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">LinkedIn</div>
                  <div className="text-[10px] font-mono text-zinc-400 truncate">
                    in/sautrik-roy-1779r
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/sautrikroy17"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <GithubIcon className="w-5 h-5 text-zinc-300 group-hover:scale-110 transition-transform" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">GitHub</div>
                  <div className="text-[10px] font-mono text-zinc-400 truncate">
                    @sautrikroy17
                  </div>
                </div>
              </a>
            </motion.div>

            {/* DOWNLOAD RESUME QUICK CARD */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-zinc-900/50 backdrop-blur-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Official Resume (PDF)
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    Sautrik_Roy_Resume.pdf • 308 KB
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1 text-[11px] font-mono text-indigo-300 group-hover:translate-x-0.5 transition-transform font-semibold">
                <span>Open</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          </div>

          {/* =======================================================================
              RIGHT COLUMN: INTERACTIVE COMMUNICATION FORM (7 COLS)
              ======================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 rounded-2xl bg-zinc-950/85 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div>
              {/* Form Title */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Send a Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  Response within 24h
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Email Client Launched!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Your pre-formatted email draft has been generated for{" "}
                    <strong className="text-cyan-300">sautrikroy2006@gmail.com</strong>.
                    You can also copy the details directly anytime.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono font-medium text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] font-mono uppercase text-zinc-400 mb-1.5"
                      >
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-mono uppercase text-zinc-400 mb-1.5"
                      >
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[11px] font-mono uppercase text-zinc-400 mb-1.5"
                    >
                      Subject / Role
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project Collaboration / Full-Stack Internship / Hello"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-[11px] font-mono uppercase text-zinc-400"
                      >
                        Message <span className="text-cyan-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell me about your idea, timeline, or open role..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(59,130,246,0.45)] transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Preparing Mail Client...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Note & Anti-Spam Guarantee */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero spam. Direct engineer response.</span>
              </span>
              <span>Chennai (IST)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
