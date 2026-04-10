/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import React, { useRef, useEffect, useState } from "react";
import { 
  Mail, 
  Linkedin, 
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Wrench,
  Heart,
  Plus,
  MapPin,
  Terminal,
  Database,
  Layers,
  Zap,
  Phone
} from "lucide-react";
import { portfolioData } from "./constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// --- Components ---

const BentoCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number, key?: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`glass glass-hover rounded-3xl p-8 relative overflow-hidden group ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 h-full flex flex-col">
        {children}
      </div>
      {/* Subtle Glow Effect */}
      <motion.div 
        className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(-1px)" }}
      />
    </motion.div>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <TooltipProvider>
      <div className="relative min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-blue-500/30 overflow-x-hidden perspective-2000">
        
        {/* Animated Background Grid */}
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-transparent" />
        </div>

        {/* Floating Orbs */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" 
          />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full px-6 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">UA</div>
              <span className="font-mono font-bold tracking-tighter text-lg">UMAABIRAMI</span>
            </motion.div>
            
            <div className="hidden md:flex gap-8">
              {["Work", "Expertise", "Education", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <Button variant="ghost" size="sm" className="rounded-full text-xs uppercase tracking-widest font-bold border border-white/10">
              Resume
            </Button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-6">
          
          {/* Hero Section - Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Intro */}
            <BentoCard className="md:col-span-8 min-h-[400px] flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1 rounded-full">
                  Available for new opportunities
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                  Crafting <span className="text-gradient">Data-Driven</span> <br />
                  Operational Excellence.
                </h1>
                <p className="text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
                  Backend Support Analyst with 2+ years of experience at TCS, specializing in ServiceNow operations and high-impact request fulfillment.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button className="bg-white text-black hover:bg-zinc-200 rounded-2xl h-12 px-8 font-bold">
                    View Work
                  </Button>
                  <Button variant="outline" className="rounded-2xl h-12 px-8 border-white/10 hover:bg-white/5 font-bold">
                    Contact Me
                  </Button>
                </div>
              </motion.div>
            </BentoCard>

            {/* Profile Image */}
            <BentoCard className="md:col-span-4 p-0 group">
              <div className="relative h-full min-h-[400px]">
                <img 
                  src="/src/assets/profile.jpg" 
                  alt="Umaabirami"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">Location</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span className="font-bold">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* Stats / Quick Info */}
            <BentoCard className="md:col-span-3 flex flex-col justify-between">
              <div className="p-3 bg-blue-500/10 rounded-2xl w-fit">
                <Zap className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-4xl font-bold">2+</h3>
                <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Years Experience</p>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-3 flex flex-col justify-between">
              <div className="p-3 bg-purple-500/10 rounded-2xl w-fit">
                <Layers className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-4xl font-bold">TCS</h3>
                <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Current Company</p>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-6 flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Connect with me</h3>
                <p className="text-zinc-500 text-sm">Let's discuss your next project.</p>
              </div>
              <div className="flex gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-2xl glass glass-hover">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={`mailto:${portfolioData.email}`} className="p-4 rounded-2xl glass glass-hover">
                      <Mail className="h-5 w-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Email</TooltipContent>
                </Tooltip>
              </div>
            </BentoCard>
          </div>

          {/* Experience Section */}
          <section id="work" className="pt-12 space-y-6">
            <div className="flex items-center gap-4 px-2">
              <h2 className="text-2xl font-bold tracking-tight">Professional Experience</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {portfolioData.experiences.map((exp, i) => (
                <BentoCard key={i} className="md:col-span-12">
                  <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="space-y-4 md:w-1/3">
                      <Badge variant="outline" className="border-blue-500/30 text-blue-400 font-mono text-[10px]">{exp.period}</Badge>
                      <h3 className="text-3xl font-bold">{exp.company}</h3>
                      <p className="text-blue-500 font-medium">{exp.role}</p>
                    </div>
                    <div className="md:w-2/3 space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Key Responsibilities</h4>
                        <ul className="grid gap-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-zinc-400 text-sm leading-relaxed flex gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {exp.achievements.map((ach, idx) => (
                          <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                            <p className="text-xs text-zinc-300 leading-relaxed">{ach}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </BentoCard>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="expertise" className="pt-12 space-y-6">
            <div className="flex items-center gap-4 px-2">
              <h2 className="text-2xl font-bold tracking-tight">Expertise & Skills</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <BentoCard className="md:col-span-4 flex flex-col gap-6">
                <div className="p-4 bg-blue-500/10 rounded-2xl w-fit">
                  <Terminal className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Professional Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.filter(s => s.category === 'Professional').map((skill, i) => (
                    <Badge key={i} className="bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10 px-3 py-1 rounded-lg transition-colors">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-4 flex flex-col gap-6">
                <div className="p-4 bg-purple-500/10 rounded-2xl w-fit">
                  <Database className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">Relevant Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.filter(s => s.category === 'Relevant').map((skill, i) => (
                    <Badge key={i} className="bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10 px-3 py-1 rounded-lg transition-colors">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-4 flex flex-col gap-6">
                <div className="p-4 bg-emerald-500/10 rounded-2xl w-fit">
                  <Heart className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold">Interests</h3>
                <div className="space-y-2">
                  {portfolioData.interests.map((interest, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <Plus className="h-3 w-3 text-emerald-500" />
                      {interest}
                    </div>
                  ))}
                </div>
              </BentoCard>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="pt-12 space-y-6">
            <div className="flex items-center gap-4 px-2">
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {portfolioData.education.map((edu, i) => (
                <BentoCard key={i} className={i === 0 ? "md:col-span-6" : "md:col-span-3"}>
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-zinc-500">{edu.period}</span>
                      <h3 className="text-xl font-bold leading-tight">{edu.institution}</h3>
                      <p className="text-zinc-400 text-sm">{edu.degree}</p>
                    </div>
                    <Badge className="w-fit bg-blue-500/10 text-blue-400 border-blue-500/20">
                      {edu.score}
                    </Badge>
                  </div>
                </BentoCard>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="pt-24 pb-12">
            <BentoCard className="bg-blue-600 text-white border-none">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-12">
                <div className="space-y-6 text-center md:text-left">
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Let's build something <br /> great together.</h2>
                  <p className="text-blue-100 text-lg max-w-md">
                    Currently open to new opportunities and collaborations in Data Analytics and Operations.
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <Button className="bg-white text-blue-600 hover:bg-zinc-100 rounded-2xl h-16 px-12 text-lg font-bold">
                    Email Me
                  </Button>
                  <div className="flex justify-center md:justify-end gap-4">
                    <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={`tel:${portfolioData.phone}`} className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors">
                      <Phone className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-100/60 font-mono">
                <p>© 2026 UMAABIRAMI A</p>
                <div className="flex gap-8">
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
              </div>
            </BentoCard>
          </footer>

        </main>
      </div>
    </TooltipProvider>
  );
}
