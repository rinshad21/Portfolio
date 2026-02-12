import  { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { FaGitAlt, FaGithub, FaLinkedin, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiGmail,
  SiReactrouter,
} from "react-icons/si";
import rinshad from "./assets/rinshad.jpeg";
import { RevealOnScroll } from "./components/RevealOnScroll";

export default function App() {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-slate-100 transition-colors duration-300">
      <Navbar
        theme={theme}
        onToggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main className="container mx-auto px-4">
        <section id="hero" className="pt-24 pb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
          <RevealOnScroll>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Hi, I'm <span className="text-cyan-500 drop-shadow-lg">Rinshad</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Full‑Stack Developer building scalable and modern web
                appplications in Mern Stack
              </p>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.5)] mt-8 hover:scale-105 transition-transform duration-300">
                  <img
                    src={rinshad}
                    alt="Portfolio"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#projects" className="btn bg-cyan-500 hover:bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-ghost border-cyan-500/30 hover:bg-cyan-500/10">
                  Get in touch
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://www.linkedin.com/in/rinshad-k-a-b48656282"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-2xl text-[#3178c6]" />
                </a>
              </div>
            </div>
          </RevealOnScroll>
            <div className="card text-center p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-cyan-500 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                Tech Stack
              </h2>

              {/* Icons */}
              <div className="flex flex-wrap justify-center gap-4 text-4xl text-slate-700 dark:text-slate-300">
                <FaReact
                  className="text-cyan-400 hover:scale-110 transition-transform"
                  title="React"
                />
                <SiJavascript
                  className="text-yellow-400 hover:scale-110 transition-transform"
                  title="JavaScript"
                />
                <SiTailwindcss
                  className="text-sky-400 hover:scale-110 transition-transform"
                  title="Tailwind CSS"
                />

                <SiExpress
                  className="text-gray-400 hover:scale-110 transition-transform"
                  title="Express"
                />
                <FaNodeJs
                  className="text-green-500 hover:scale-110 transition-transform"
                  title="Node.js"
                />
                <SiMongodb
                  className="text-green-400 hover:scale-110 transition-transform"
                  title="MongoDB"
                />
                <FaGitAlt
                  className="text-orange-600 hover:scale-110 transition-transform"
                  title="Firebase"
                />
                <SiFirebase
                  className="text-orange-400 hover:scale-110 transition-transform"
                  title="Firebase"
                />
                <SiTypescript
                  className="text-[#3178c6] hover:scale-110 transition-transform"
                  title="Firebase"
                />
                <SiReactrouter
                  className="text-red-500 hover:scale-110 transition-transform"
                  title="React Router"
                />
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About Me">
          <p>
            I'm a BCA graduate and a full-stack developer also A big Tech Nerd.
            Focused on building robust, user-centric and scalable web
            applications. I enjoy sipping Cofee at 2am and builiding features
            end-to-end from designing APIs and structuring databases to crafting
            responsive, accessible UIs.I am currently seeking web developer
            opportunities where I can collaborate with dynamic teams, take on
            new challenges, and make a meaningful impact. Let’s connect and
            build something amazing together!{" "}
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 w-full md:grid-cols-3">
             {[
                { 
                  title: "Frontend", 
                  skills: ["React", "Tailwind CSS", "Redux"],
                  icon: <FaCode className="text-4xl mb-2 text-cyan-500" />
                },
                { 
                  title: "Backend", 
                  skills: ["Node.js (Express)", "REST API"],
                  icon: <FaServer className="text-4xl mb-2 text-cyan-500" />
                },
                { 
                  title: "Data & Infra", 
                  skills: ["SQL", "PostgreSQL", "MongoDB"],
                  icon: <FaDatabase className="text-4xl mb-2 text-cyan-500" />
                },
             ].map((category, index) => (
                <RevealOnScroll key={index} delay={index * 0.2}>
                  <div className="card hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
                    {category.icon}
                    <h3 className="font-semibold text-lg mb-4 text-white">{category.title}</h3>
                    <ul className="space-y-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                      {category.skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                </RevealOnScroll>
             ))}
          </div>
        </Section>
        <Section id="experience" title="Experience">
          <div className="space-y-6">
            <div className="relative pl-6">
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-brand" />
              <div className="card">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  2025 june — 2025 August
                </div>
                <h3 className="font-semibold ">
                  React Js Developer Intern — Purreza Technologies
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  worked on various Real Time Projects using React Js and
                  Tailwind Css and impleneted Rest Api for data fetching and
                  integration.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-3">
            <RevealOnScroll delay={0}>
              <ProjectCard
                title="CaliTrack"
                stack="Mongodb,Express,React,Node.js,cloudinary"
                description=" CaliTrack is a calisthenics and home-workout tracking application built with a modern MERN architecture.workouts are fetched based on User level and users can track their progress along with image.Admin can monitor the application by view,add,delete,update workout"
                liveUrl="https://calitrac.vercel.app/"
                codeUrl="https://github.com/rinshad21/CaliTrack-Frontend"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <ProjectCard
                title="B-Library"
                stack="Mongodb,Express,React,Node.js,Firebase"
                description=" A Fullstack bookstore E-commerce App  with auth using Firebase, Invoice generation, and admin panel."
                liveUrl="https://b-library.vercel.app/"
                codeUrl="https://github.com/rinshad21/B-library-frontend"
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <ProjectCard
                title="MovieBox"
                stack="React,React Router,Tailwind Css,TmdbApi,shadCn Ui"
                description=" MovieBox is a React application that allows users to browse popular movies and manage their personal Watchlist and Favorites using the browser's LocalStorage API. It integrates with The Movie Database (TMDB) API to fetch real-time movie data."
                liveUrl="https://movieboxed.netlify.app/"
                codeUrl="https://github.com/rinshad21/Moviebox"
              />
            </RevealOnScroll>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p>Have a project or role in mind? Let's Connect.</p>
          <div className="mt-4 flex gap-3">
            <a className="btn flex gap-2" href="mailto:mdrinshadka@gmail.com">
              <SiGmail />
              <span>Email me</span>
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/rinshad-k-a-b48656282"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/rinshad21"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </Section>
      </main>
      <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Rinshad KA. All rights reserved.
      </footer>
    </div>
  );
}
