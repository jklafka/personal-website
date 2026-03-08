type Experience = {
  company: string
  role: string
  period: string
  bullets: string[]
}

type Education = {
  school: string
  degree: string
  gpa: string
}

type Project = {
  name: string
  bullets: string[]
}

type SkillCategory = {
  category: string
  items: string
}

const experience: Experience[] = [
  {
    company: 'Rokt',
    role: 'Senior Software Engineer',
    period: 'February 2023 – Present',
    bullets: [
      'Designed new experimentation and measurement infrastructure that enabled over $50MM in revenue',
      'Unlocked 100 million new customers for direct Rokt advertiser targeting',
      'Safeguarded 35 million daily ecommerce transactions with automated monitoring and alerting',
    ],
  },
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    period: 'February 2022 – November 2022',
    bullets: [
      "Automated processing millions of potential privacy violations per month within Alexa's data ecosystem",
      'Created and maintained new serverless microservices using CI/CD pipelines and AWS technologies',
      'Performed week-long 24-hour oncall rotation each month to handle outages and address user concerns',
    ],
  },
  {
    company: 'Epic Systems',
    role: 'Software Developer',
    period: 'August 2020 – February 2022',
    bullets: [
      'Executed fullstack projects for clinical search software with 10 million monthly active users',
      'Designed over 20 new customer-facing and backend features within agile development processes',
      'Piloted initiatives including mobile app expansion, recommended searches and log aggregation',
    ],
  },
]

const education: Education[] = [
  {
    school: 'The University of Chicago',
    degree: 'BS in Mathematics and BA in Linguistics with honors',
    gpa: '3.82/4.00',
  },
]

const projects: Project[] = [
  {
    name: 'Targeting Customers based on Cookies and IP Addresses',
    bullets: [
      'Enabled advertisers to target customers based on third-party cookies and IP addresses',
      'Achieved 4000% conversion improvement and 4x increase in customer reach for audiences',
      'Scaled system to ingest 15k attributes per second, write to Kafka and store in Cassandra for millisecond-speed retrieval',
    ],
  },
  {
    name: 'Robust advertiser holdout experiment measurement (ghost ads / incrementality)',
    bullets: [
      'Scientifically demonstrated 50% conversion uplift on average across over 100 experiments',
      'Designed Kafka and Spark-based reporting pipelines to handle hundreds of GB of data per day',
      'Scaled realtime application to handle 50k requests per second and thousands of experiments',
    ],
  },
  {
    name: 'LLM-Powered Ad Copy Experimentation',
    bullets: [
      "Enabled over 1000 experiments to integrate with OpenAI's GPT-5 model to generate ad titles, copy and call to action text",
      'Increased customer acquisitions by over 100% on average per successful experiment',
      'Cut experiment conclusion time by 80% through Thompson sampling allocation',
    ],
  },
  {
    name: 'Digital Asset Manager (DAM)',
    bullets: [
      'Led creation of new tool for users to upload, optimize and crop their own images',
      'Served 1000s of images to 40 million daily views with millisecond latency on Akamai CDN hosting',
      'Raised average image quality by 1000% while eliminating 99% of images from legacy system',
    ],
  },
]

const skills: SkillCategory[] = [
  { category: 'Languages', items: 'Go, Java, Python, C#, TypeScript/JavaScript, SQL, HTML/SCSS' },
  { category: 'Technologies', items: 'Kubernetes, Docker, Kafka, Terraform, Redis, Cassandra, PostgreSQL, Datadog' },
  { category: 'AWS', items: 'EKS, ECR, RDS, Lambda, DynamoDB, S3, Kinesis, Athena, CloudFront' },
  { category: 'AI Tooling', items: 'Claude, Cursor, LangChain, Skills, MCP, Agent Orchestration' },
]

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
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">{edu.degree}</div>
              </div>
              <span className="text-sm text-neutral-500 shrink-0 ml-4">GPA: {edu.gpa}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
          Selected Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="font-semibold text-sm mb-2">{project.name}</div>
              <ul className="space-y-1">
                {project.bullets.map((b, i) => (
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

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
          Skills
        </h2>
        <div className="space-y-2">
          {skills.map((s) => (
            <div key={s.category} className="flex gap-4 text-sm">
              <span className="font-semibold w-32 shrink-0 text-neutral-700 dark:text-neutral-300">{s.category}</span>
              <span className="text-neutral-600 dark:text-neutral-400">{s.items}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
