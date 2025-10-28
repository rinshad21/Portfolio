import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-3 ">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
