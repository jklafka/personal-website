type Tool = {
  name: string
  description: string
  url?: string
  category: string
}

const tools: Tool[] = [
  {
    name: 'Bun',
    description: 'Fast all-in-one JavaScript runtime and toolkit.',
    url: 'https://bun.sh',
    category: 'Runtime',
  },
  {
    name: 'Vite',
    description: 'Lightning fast build tool for modern web projects.',
    url: 'https://vite.dev',
    category: 'Build',
  },
  {
    name: 'Neovim',
    description: 'Hyperextensible vim-based text editor.',
    url: 'https://neovim.io',
    category: 'Editor',
  },
]

const categories = [...new Set(tools.map((t) => t.category))]

export default function Tools() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Tools</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-10 text-sm">
        Things I use and recommend.
      </p>

      {categories.map((cat) => (
        <section key={cat} className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
            {cat}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {tools
              .filter((t) => t.category === cat)
              .map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                >
                  <div className="font-medium mb-1">{tool.name}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    {tool.description}
                  </div>
                </a>
              ))}
          </div>
        </section>
      ))}
    </main>
  )
}
