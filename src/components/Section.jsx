
import { RevealOnScroll } from "./RevealOnScroll";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-7xl px-4 md:px-10 z-10">
        <RevealOnScroll>
          <h2 className="mb-3 text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center drop-shadow-lg">
            {title}
          </h2>
        </RevealOnScroll>
        {children}
      </div>
    </section>
  );
}
