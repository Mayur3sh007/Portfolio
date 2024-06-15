import Title from '@/components/Title';
import SkillCard from '@/components/SkillCard';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import HeroSection from '@/components/Sections/HeroSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import HeaderSection from '@/components/Sections/HeaderSection';
import ContactSection from '@/components/Sections/ContactSection';

export default function Home() {

  const skills = [
    { title: 'React', iconName: 'react' },
    { title: 'Redux', iconName: 'redux' },
    { title: 'expressjs', iconName: 'expressjs' },
    { title: 'Nodejs', iconName: 'nodejs' },
    { title: 'Tailwind CSS', iconName: 'tailwindcss' },
    { title: 'Mongodb', iconName: 'mongodb' },
    { title: 'SQL', iconName: 'sqllite' },
    { title: 'NEXTjs', iconName: 'nextjs' },
    // Add more skills as needed
  ];

  return (
    <main className='relative flex flex-col w-full h-full overflow-hidden mx-auto sm:px-10 px-5 z-50'>
      <Navbar />
      <div className='w-full'>

        <HeaderSection />
        <HeroSection />
        <ProjectsSection />

        {/* Skills Section */}
        <div className='flex flex-col items-center h-screen w-full mb-10' id="skills">
          <Title word1="Featured" word2="SKILLS" className='mt-20 mb-20' />
          <div className='flex flex-wrap justify-center gap-10'>
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} iconName={skill.iconName} />
            ))}
          </div>
        </div>
        <div className="mt-4 mb-20 flex justify-center p-5">
          <Link href="/Skills">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-end z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10 ">
                <span>
                  View All Skills
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

        <ContactSection />
      </div>
    </main>
  );
}
