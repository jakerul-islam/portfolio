'use client';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'GitHub Issues Tracker',
    description:
      'A clean issue-tracking dashboard that lets you browse, filter, and manage GitHub issues by status — open, closed, or all. Built with a focus on clarity and fast navigation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://jakerul-islam.github.io/Assignment-5/main.html',
    github: 'https://github.com/jakerul-islam/Assignment-5',
    image: '/github.png',
  },
  {
    title: 'DigiTools',
    description:
      'A premium digital marketplace to access AI tools, design assets, templates, and productivity software — all in one place. Features a modern landing page with pricing and testimonials.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://digital-tools-ai.netlify.app/',
    github: 'https://github.com/jakerul-islam/digital-tools-ai',
    image: '/digi.png',
  },
  {
    title: 'KeenKeeper',
    description:
      'A personal relationship management app to keep track of friends, interactions, and connection health. Visualises your social shelf with timelines and stats.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://keen-keeper-five.vercel.app/',
    github: 'https://github.com/jakerul-islam/keen-keeper',
    image: '/keen.png',
  },
];

export default function Projects() {
  return (
    <section className="py-32 px-6 bg-slate-950 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm">
            Selected Works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
