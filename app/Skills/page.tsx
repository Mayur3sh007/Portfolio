import SkillCard from '@/components/SkillCard';
import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react'

const page = () => {
  const skills = [
    { title: 'React', iconName: 'react' },
    { title: 'Redux', iconName: 'redux' },
    { title: 'expressjs', iconName: 'expressjs' },
    { title: 'Nodejs', iconName: 'nodejs' },
    { title: 'Tailwind CSS', iconName: 'tailwindcss' },
    { title: 'Mongodb', iconName: 'mongodb' },
    { title: 'SQL', iconName: 'sqllite' },
    { title: 'NEXTjs', iconName: 'nextjs' },
    { title: 'Html', iconName: 'html5' },
    { title: 'Css', iconName: 'css3' },
    { title: 'Javascript', iconName: 'javascript' },
    { title: 'Typescript', iconName: 'typescript' },
    { title: 'Netlify', iconName: 'netlify' },
    { title: 'Git', iconName: 'git' },
    { title: 'Github', iconName: 'github' },
    { title: 'Bootstrap', iconName: 'bootstrap' },
    { title: 'Python', iconName: 'python' },
    { title: 'Numpy', iconName: 'numpy' },
    { title: 'Pandas', iconName: 'pandas' },
    { title: 'Pytorch', iconName: 'pytorch' },

    // Add more skills as needed
  ];
  return (
    <div className='realtive flex flex-col items-center w-full mb-10' id="skills">


      <div className='justify-start flex w-full my-4 mx-4'>
        <Link href="/">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-end z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>
                HOME
              </span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </Link>
      </div>

      <Title word1="My" word2="SKILLS" className='mt-20 mb-20' />
      <div className='flex flex-wrap justify-center gap-10'>
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill.title} iconName={skill.iconName} />
        ))}
      </div>
    </div>

  )
}

export default page