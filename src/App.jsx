import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

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
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar
        theme={theme}
        onToggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main className="container mx-auto px-4">
        <section id="hero" className="pt-24 pb-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I'm <span className="text-brand">Rinshad</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Full‑Stack Developer building scalable and modern web
                appplications in Mern Stack
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#projects" className="btn">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Get in touch
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://www.linkedin.com/in/rinshad-k-a-b48656282"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="card text-center p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>

              {/* Icons */}
              <div className="flex flex-wrap justify-center gap-4 text-4xl text-slate-700 dark:text-slate-300">
                <FaReact
                  className="hover:text-cyan-400 transition-colors"
                  title="React"
                />
                <SiJavascript
                  className="hover:text-yellow-400 transition-colors"
                  title="JavaScript"
                />
                <SiTailwindcss
                  className="hover:text-sky-400 transition-colors"
                  title="Tailwind CSS"
                />
                <SiExpress
                  className="hover:text-gray-400 transition-colors"
                  title="Express"
                />
                <FaNodeJs
                  className="hover:text-green-500 transition-colors"
                  title="Node.js"
                />
                <SiMongodb
                  className="hover:text-green-400 transition-colors"
                  title="MongoDB"
                />
                <SiFirebase
                  className="hover:text-green-400 transition-colors"
                  title="Firebase"
                />
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About Me">
          <p className="">
            I'm a BCA graduate and a full-stack developer Also A big Tech Nerd.
            Focused on building robust, user-centric applications. I enjoy
            sipping Cofee at 2am and builiding features end-to-end from
            designing APIs and structuring databases to crafting responsive,
            accessible UIs.Looking For a role to grow as a developer and
            contribute effectively to real-world projects.{" "}
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold">Frontend</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                <li>React</li>
                <li>CSS Modules, Tailwind Css</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold">Backend</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                <li>Node.js (Express)</li>
                <li>REST API</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold">Data & Infra</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
                <li>Sql, MongoDB</li>
              </ul>
            </div>
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
            <ProjectCard
              title="B-Library"
              stack="Mongodb,Express,React,Node.js,Firebase"
              description=" A Fullstack bookstore E-commerce App  with auth using Firebase, Invoice generation, and admin panel."
              liveUrl="https://b-library.vercel.app/"
              codeUrl="https://github.com/rinshad21/B-library-frontend"
            />
            <ProjectCard
              title="MovieBox"
              stack="React,React Router,Tailwind Css,TmdbApi,shadCn Ui"
              description=" MovieBox is a React application that allows users to browse popular movies and manage their personal Watchlist and Favorites using the browser's LocalStorage API. It integrates with The Movie Database (TMDB) API to fetch real-time movie data."
              liveUrl="https://movieboxed.netlify.app/"
              codeUrl="https://github.com/rinshad21/Moviebox"
            />
            <ProjectCard
              title="Productivita"
              stack="React,Tailwind Css"
              description=" A productivity Dashboard App Made with React and Tailwind Css"
              liveUrl="https://productivita.netlify.app/"
              codeUrl="https://github.com/rinshad21/Productivita"
            />
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p>Have a project or role in mind? Let's Connect.</p>
          <div className="mt-4 flex gap-3">
            <a className="btn" href="mailto:mdrinshadka@gmail.com">
              Email me
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
