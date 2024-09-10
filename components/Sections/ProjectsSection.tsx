import React from 'react'
import Card from '../Card'
import Title from '../Title'

const ProjectsSection = () => {
    const projects = {
        MegaBlog: "An ultimate Blog Management platform powered by ReactJS and Appwrite.MegaBlog empowers you with intuitive features for a seamless and enriching blogging experience with comprehensive suite of tools designed to streamline content creation, management & experience.",
        vrSafe: "A fully functional Banking App developed with Next.js, delivering a suite of modern features designed to enhance your banking experience. From robust security to intuitive usability, our platform ensures you have the tools to manage your finances conveniently.", 
        CleanNGreen: "Clean N Green revolutionizes ethical shopping by providing accessible information on product origins, labor practices, and environmental impact. With just a few clicks, users gain valuable insights, empowering them to make informed decisions that align with their values."
    }

    return (
        <div className='flex-col items-center scroll-mb-20 min-h-screen max-md:-ml-2' id="projects">
            <Title word1="Featured" word2="PROJECTS" className='' />
            <section className="flex justify-center space-x-3 mb-10 max-md:flex-col">
                <Card title='MegaBlog' description={projects.MegaBlog} link='https://megablog.vercel.app/' image='/megaBlog.png' github='https://github.com/Mayur3sh007/MegaBlog' />
                <Card title='vrSafe' description={projects.vrSafe} link='https://vr-safe.vercel.app/' image='/vrSafe.png' github='https://github.com/Mayur3sh007/vrSafe' />
                <Card title='CleanNGreen' description={projects.CleanNGreen} link='https://devfolio.co/projects/clean-n-green-0445' image='/CleanNGreen.png' github='https://github.com/Mayur3sh007/33_git-push--f_DUhacks' />
            </section>
        </div>
    )
}

export default ProjectsSection