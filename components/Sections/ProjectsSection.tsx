import React from 'react'
import Card from '../Card'
import Title from '../Title'

const ProjectsSection = () => {
    const projects = {
        PaisePlus: {
            title: 'WealthWise',
            description: 'A platform that simplifies financial planning, offering tools like simulators for investments and loans, personalized financial advice, and an AI-driven learning experience with courses, chatbots, and real-world challenges to strengthen financial decision-making skills',
            link: 'https://devfolio.co/projects/paiseplus-07da',
            image: '/WealthWise.png',
            github: 'https://github.com/Mayur3sh007/PaisePlus'
        },
        vrSafe: {
            title: 'vrSafe',
            description: 'A fully functional Banking App developed with Next.js, delivering a suite of modern features designed to enhance your banking experience. From robust security to intuitive usability, our platform ensures you have the tools to manage your finances conveniently.',
            link: 'https://vr-safe.vercel.app/',
            image: '/vrSafe.png',
            github: 'https://github.com/Mayur3sh007/vrSafe'
        },
        CleanNGreen: {
            title: 'Traffic Surveillance System',
            description: 'An intelligent vehicle counting and detection system designed to provide precise counts within specified zones. It uses advanced object detection to optimize accuracy,  making it an efficient solution for traffic management and analysis',
            link: 'https://www.linkedin.com/posts/mayuresh-chavan-04a3b5259_machinelearning-computervision-yolov8-activity-7174461543923785728-ICBS?utm_source=share&utm_medium=member_desktop',
            image: '/cartracker.png',
            github: 'https://github.com/Mayur3sh007/33_git-push--f_DUhacks'
        }
    }

    return (
        <div className='flex-col items-center scroll-mb-20 min-h-screen' id="projects">
            <Title word1="Featured" word2="PROJECTS" className='' />
            <section className="flex justify-center space-x-3 mb-10 max-md:flex-col max-md:-ml-2 ">
                <Card {...projects.PaisePlus} />
                <Card {...projects.vrSafe} />
                <Card {...projects.CleanNGreen} />
            </section>
        </div>
    )
}

export default ProjectsSection
