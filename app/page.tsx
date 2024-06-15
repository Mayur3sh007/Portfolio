import Approach from '@/components/Approach';
import Headerbox from '../components/Headerbox';
import { HeroName } from '../components/HeroName';
import HeroPic from '../components/HeroPic';
import Card from '@/components/Card';
import Title from '@/components/Title';
import SkillCard from '@/components/SkillCard';
import Footer from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

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
    <main className='relative flex flex-col w-full h-full overflow-hidden mx-auto sm:px-10 px-5'>
      <Navbar />
      <div className='w-full'>

        {/* Header Section */}
        <div className='w-full' id="header">
          <Headerbox />
        </div>

        {/* Hero Section */}
        <div className="h-full w-full bg-neutral-950 relative flex flex-col antialiased" id="hero">
          <BackgroundBeams className="h-full w-full " />
          <div className="flex-grow flex relative items-center mb-8 h-screen">
            <div className="flex w-full max-w-screen-lg">
              <div className="-mt-20 flex-1 flex justify-start">
                <HeroName />
              </div>
              <div className="flex-1 flex justify-center">
                <HeroPic />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className='flex flex-col items-center scroll-mb-20 h-screen' id="projects">
          <Title word1="Featured" word2="PROJECTS" className='' />
          <section className="flex justify-center space-x-3 mb-10">
            <Card title='MegaBlog' description='An ultimate Blog Management platform powered by ReactJS and Appwrite.MegaBlog empowers you with intuitive features for a seamless and enriching blogging experience with comprehensive suite of tools designed to streamline content creation, management & experience.' link='https://appwrite-blog-nine.vercel.app/' image='/megaBlog.png' github='https://github.com/Mayur3sh007/MegaBlog_Frontend_Project' />
            <Card title='vrSafe' description='A fully functional Banking App developed with Next.js, delivering a suite of modern features designed to enhance your banking experience. From robust security to intuitive usability, our platform ensures you have the tools to manage your finances conveniently.' link='https://vr-safe.vercel.app/' image='/vrSafe.png' github='https://github.com/Mayur3sh007/vrSafe' />
            <Card title='CleanNGreen' description='Clean N Green revolutionizes ethical shopping by providing accessible information on product origins, labor practices, and environmental impact. With just a few clicks, users gain valuable insights, empowering them to make informed decisions that align with their values.' link='https://devfolio.co/projects/clean-n-green-0445' image='/CleanNGreen.png' github='https://github.com/Mayur3sh007/33_git-push--f_DUhacks' />
          </section>
        </div>

        {/* Skills Section */}
        <div className='flex flex-col items-center h-screen w-full mb-10' id="skills">
          <Title word1="My" word2="SKILLS" className='mt-20 mb-20' />
          <div className='flex flex-wrap justify-center gap-10'>
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} iconName={skill.iconName} />
            ))}
          </div>
        </div>

        <div className="mt-2 mb-20 flex justify-end">
            <Link href="/Skills">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-end z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
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

        <div className="h-full w-full bg-neutral-950 relative flex flex-col antialiased">
          <BackgroundBeams className="h-full w-full " />

          {/* Planning Section */}
          <div className='flex flex-col items-center h-screen' id="approach">
            <Title word1="My" word2="APPROACH" className='mt-20' />
            <Approach />
          </div>
        </div>

        {/* Footer Section */}
        <div className='mt-20' id="footer">
          <Footer />
        </div>
      </div>
    </main>
  );
}
