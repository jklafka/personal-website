type Bit = {
  title: string
  date: string
  body: string
}

const bits: Bit[] = [
  {
    title: 'First bit',
    date: '2026-03-08',
    body: 'This is where random thoughts, links, and things go. No particular format — just bits.',
  },
]

export default function Bits() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Bits</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-10 text-sm">
        Random things worth noting.
      </p>

      <div className="space-y-10">
        {bits.map((bit) => (
          <article key={bit.title}>
            <div className="flex items-baseline gap-4 mb-2">
              <h2 className="font-semibold">{bit.title}</h2>
              <time className="text-xs text-neutral-400">{bit.date}</time>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {bit.body}
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}
