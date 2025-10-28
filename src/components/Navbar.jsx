import React, { useState } from 'react'

export default function Navbar({ theme, onToggle }) {
	const [open, setOpen] = useState(false)

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					<a href="#hero" className="font-semibold">Dev<span className="text-brand">Portfolio</span></a>
					<div className="flex items-center gap-2 md:hidden">
						<button aria-label="Toggle Theme" onClick={onToggle} className="btn-ghost px-2 py-1.5">
							{theme === 'dark' ? '☀️' : '🌙'}
						</button>
						<button aria-label="Toggle Navigation" onClick={() => setOpen(v => !v)} className="btn-ghost px-2 py-1.5">☰</button>
					</div>
					<nav className="hidden items-center gap-6 md:flex">
						<a href="#about" className="hover:text-brand">About</a>
						<a href="#skills" className="hover:text-brand">Skills</a>
						<a href="#projects" className="hover:text-brand">Projects</a>
						<a href="#experience" className="hover:text-brand">Experience</a>
						<a href="#contact" className="hover:text-brand">Contact</a>
						<button aria-label="Toggle Theme" onClick={onToggle} className="btn-ghost px-3 py-1.5">{theme === 'dark' ? '☀️' : '🌙'}</button>
					</nav>
				</div>
			</div>
			{open && (
				<div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
					<div className="container mx-auto px-4 py-3 flex flex-col gap-3">
						<a href="#about" onClick={() => setOpen(false)}>About</a>
						<a href="#skills" onClick={() => setOpen(false)}>Skills</a>
						<a href="#projects" onClick={() => setOpen(false)}>Projects</a>
						<a href="#experience" onClick={() => setOpen(false)}>Experience</a>
						<a href="#contact" onClick={() => setOpen(false)}>Contact</a>
					</div>
				</div>
			)}
		</header>
	)
}


