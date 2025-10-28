import React from 'react'

export default function ProjectCard({ title, stack, description, liveUrl = '#', codeUrl = '#' }) {
	return (
		<article className="card h-full">
			<header>
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="text-sm text-slate-500 dark:text-slate-400">{stack}</p>
			</header>
			<p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>
			<div className="mt-4 flex gap-2">
				<a className="btn btn-small" href={liveUrl} target="_blank" rel="noreferrer">Live</a>
				<a className="btn btn-ghost btn-small" href={codeUrl} target="_blank" rel="noreferrer">Code</a>
			</div>
		</article>
	)
}


