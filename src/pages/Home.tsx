import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Hey, I'm Joe.</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mb-10">
        Software engineer. I build things, collect tools, and occasionally write about stuff.
      </p>
      <div className="flex gap-4">
        <Link
          to="/resume"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          View Resume
        </Link>
        <Link
          to="/tools"
          className="px-4 py-2 border border-neutral-400 dark:border-neutral-700 rounded-lg text-sm font-medium bg-white/60 dark:bg-transparent hover:bg-white/80 dark:hover:bg-neutral-800 transition-colors"
        >
          My Tools
        </Link>
      </div>
    </main>
  )
}
