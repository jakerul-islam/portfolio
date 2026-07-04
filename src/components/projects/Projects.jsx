'use client';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Ticket Bari',
    description:
      'TicketBari is an online ticket booking platform for buses, trains, launches (river cruises), and flights across Bangladesh.',
    tags: ['Next.js', 'React.js','javascript','Node.js','Express.js','MongoDb'],
    link: 'https://ticket-bari-client-three.vercel.app',
    github: 'https://github.com/jakerul-islam/ticket-bari-client-side',
    image: '/ticket_bari.png',
  },
  {
    title: 'DocAppointment',
    description:
      'DocAppoint is a modern digital solution designed to help patients book doctor appointments easily and manage their healthcare. Users can explore verified medical experts, view details, and schedule appointments instantly from the comfort of their homes.',
    tags: ['Next.js', 'React.js','javascript','Node.js','Express.js','MongoDb'],
    link: 'https://doctor-appoinment-red.vercel.app',
    github: 'https://github.com/jakerul-islam/doctor-appoinment',
    image: '/doctor_appoinment.png',
  },
  {
    title: 'SkillSphere — Online Learning Platform',
    description:
      'A personal relationship management app to keep track of friends, interactions, and connection health. Visualises your social shelf with timelines and stats.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://online-learning-platform-self-nine.vercel.app',
    github: 'https://github.com/jakerul-islam/online-learning-platform',
    image: '/SkillSphere.png',
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
