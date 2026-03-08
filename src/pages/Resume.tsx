type Experience = {
  company: string
  role: string
  period: string
  bullets: string[]
}

type Education = {
  school: string
  degree: string
  year: string
}

const experience: Experience[] = [
  {
    company: 'Company Name',
    role: 'Software Engineer',
    period: '2023 – Present',
    bullets: [
      'Built and maintained features used by thousands of users',
      'Collaborated with cross-functional teams to ship products on time',
    ],
  },
]

const education: Education[] = [
  {
    school: 'University Name',
    degree: 'B.S. Computer Science',
    year: '2022',
  },
]

const skills = ['TypeScript', 'React', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'AWS']

export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-14">
      <div className="flex items-baseline justify-between mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <a
          href="/resume.pdf"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Download PDF
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.company + job.role}>
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-semibold">{job.company}</span>
                <span className="text-sm text-neutral-500">{job.period}</span>
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{job.role}</div>
              <ul className="space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-neutral-700 dark:text-neutral-300 flex gap-2">
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.school} className="flex items-baseline justify-between">
              <div>
                <span className="font-semibold">{edu.school}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-3">{edu.degree}</span>
              </div>
              <span className="text-sm text-neutral-500">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 text-sm rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
