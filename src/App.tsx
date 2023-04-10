import BrowserIcon from './BrowserIcon'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './Linkedin'
import MailIcon from './MailIcon'
import me from './assets/me.png'

const experiences = [
  {
    as: 'Backend Web Developer',
    org: 'PT Sarandi Karya Nugraha',
    range: '07/2020 - 04/2021',
    tasks: [
      'develop enterprise resource planning system',
    ],
  },
  {
    as: 'Fullstack Web Developer',
    org: 'PT Kimia Farma Tbk',
    range: '04/2021 - 12/2022',
    tasks: [
      'develop logbook web app for logging production process',
      'develop enterprise resource planning system called as batch record',
      'develop risk management system',
      'develop thread web app whatsapp looklike but private',
      'develop change control to manage revision on document',
      'develop facial recognition presence web app',
      'develop warehouse management system',
      'upgrading existsing human resource app to latest techology',
    ],
  },
  {
    as: 'Product Owner & Fullstack Developer',
    org: 'PT Quadra Karya Santosa',
    range: '09/2020 - Present',
    tasks: [
      'develop company profile',
      'upgrading human resource system for telkom education foundation',
      'develop human resource system internal',
      'develop project management web app like jira/clickup',
      'develop point of sale web & mobile app',
      'develop tour web app with dynamic company profile',
      'develop learning management system',
    ],
  },
  {
    as: 'Fullstack Web & Mobile developer',
    org: 'PT Laju Omega Digital',
    range: '10/2022 - Present',
    tasks: [
      'develop company profile for jaddi, hira, jellifish, world health organization, indomina, anugrah teknologi indonesia, and more',
      'develop social media web app and leading to build mobile app',
      'improve internal project management system',
      'develop ui/ux for "sinyal tv digital"',
      'data analyst for digitalization textile organization',
      'develop enterprise resource planning',
      'optimization performance, accessibility and seo friendly',
      'develop airfreight system',
      'develop hotel booking system',
      'develop internal project management system into mobile',
    ],
  },
]

const projects = [
  {
    desc: 'develop boilerplate for laravel inertia vue',
    points: [
      'open source on my github',
    ],
  },
  {
    desc: 'develop boilerplate for adonisjs vite react typescript',
    points: [
      'open source on my github',
    ],
  },
  {
    desc: 'develop swakop (swadaya koperasi) point of sale app',
    points: [],
  },
  {
    desc: 'develop frontend nft web app',
    points: [],
  },
]

const skills = [
  'Dart', 'Flutter', 'NodeJS', 'AdonisJS', 'ExpressJS', 'Python', 'Flask', 'Odoo',
  'PHP', 'Laravel', 'Lumen', 'CodeIgniter', 'React', 'Redux', 'Typescript', 'Javascript', 'Vue', 'VueX',
  'Postgresql', 'MySQL', 'SQLite3', 'OracleDB', 'Git', 'Docker', 'Shell', 'Tailwindcss', 'Bootstrap',
  'Apache', 'Websocket',
]

const interests = [
  'Rust', 'Golang', 'MongoDB', 'Artificial Intelegent', 'Neural Network', 'Blockchain', 'Data Analyst',
]

export default function App() {
  return (
    <>
      <header className="flex flex-col">
        <div className="flex items-center justify-between bg-slate-700 px-20 print:px-6 py-6 print:py-2">
          <div className="flex flex-col space-y-2">
            <h1 className="text-white text-5xl font-semibold">Geriano Adika Putra</h1>
            <h3 className="text-cyan-500 text-xl font-medium">Product Owner, Fullstack Web & Mobile Developer</h3>
            <p className="text-white">I'm Weaboo</p>
          </div>

          <div className="flex-none p-4">
            <img src={me} alt="Geriano Adika Putra" className='w-48 print:w-32 h-48 print:h-32 object-cover object-center rounded-full border-8 border-cyan-500 bg-white' />
          </div>
        </div>

        <div className="flex flex-col bg-slate-800 text-white font-medium px-20 print:px-2 py-4 rounded-b-md">
          <div className="flex items-center justify-evenly space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4">
                <MailIcon />
              </div>
              <p>gerianoadikaputra@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4">
                <LinkedinIcon />
              </div>
              <a href='https://www.linkedin.com/in/gerznewbie'>gerznewbie</a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4">
                <GithubIcon />
              </div>
              <a href='https://github.com/Geriano'>Geriano</a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4">
                <BrowserIcon />
              </div>
              <a href='https://geriano.github.io'>geriano.github.io</a>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-4 grid-cols-2 px-20 py-10 print:px-10 print:py-4">
        <div className='flex flex-col space-y-4'>
          <h3 className="text-3xl text-cyan-500 underline underline-offset-8 font-medium">Work Experience</h3>

          {experiences.map(experience => (
            <div key={experience.org} className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-1">
                <h3 className="text-xl font-semibold">{experience.as}</h3>
                <h2 className="text-xl font-light">{experience.org}</h2>
              </div>
              <div className="text-sm text-cyan-500 italic">{experience.range}</div>
              <ul className="list-disc">
                {experience.tasks.map(task => <li key={task} className='first-letter:capitalize'>{task}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-3xl text-cyan-500 underline underline-offset-8 font-medium">Personal & Freelance Project</h3>

          <div className="flex flex-col space-y-2">
            {projects.map(project => (
              <div key={project.desc} className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-1">
                  <div className="text-xl first-letter:capitalize">{project.desc}</div>
                </div>
                <ul className="list-disc">
                  {project.points.map(point => <li key={point} className='text-sm font-semibold first-letter:capitalize'>{point}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-3xl text-cyan-500 underline underline-offset-8 font-medium">Skills</h3>

          <div className="flex-wrap">
            {skills.map(skill => (
              <button key={skill} className="text-white font-semibold text-center bg-slate-600 px-2 py-1 rounded-md mr-2 mb-2">{skill}</button>
            ))}
          </div>

          <h3 className="text-3xl text-cyan-500 underline underline-offset-8 font-medium">Interest</h3>

          <div className="flex-wrap">
            {interests.map(interest => (
              <button key={interest} className="text-white font-semibold text-center bg-slate-600 px-2 py-1 rounded-md mr-2 mb-2">{interest}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}