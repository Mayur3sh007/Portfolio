import React from 'react'
import Card from '../Card'
import Title from '../Title'

const ProjectsSection = () => {
    return (
        <div className='flex flex-col items-center scroll-mb-20 h-screen' id="projects">
            <Title word1="Featured" word2="PROJECTS" className='' />
            <section className="flex justify-center space-x-3 mb-10">
                <Card title='MegaBlog' description='An ultimate Blog Management platform powered by ReactJS and Appwrite.MegaBlog empowers you with intuitive features for a seamless and enriching blogging experience with comprehensive suite of tools designed to streamline content creation, management & experience.' link='https://appwrite-blog-nine.vercel.app/' image='/megaBlog.png' github='https://github.com/Mayur3sh007/MegaBlog_Frontend_Project' />
                <Card title='vrSafe' description='A fully functional Banking App developed with Next.js, delivering a suite of modern features designed to enhance your banking experience. From robust security to intuitive usability, our platform ensures you have the tools to manage your finances conveniently.' link='https://vr-safe.vercel.app/' image='/vrSafe.png' github='https://github.com/Mayur3sh007/vrSafe' />
                <Card title='CleanNGreen' description='Clean N Green revolutionizes ethical shopping by providing accessible information on product origins, labor practices, and environmental impact. With just a few clicks, users gain valuable insights, empowering them to make informed decisions that align with their values.' link='https://devfolio.co/projects/clean-n-green-0445' image='/CleanNGreen.png' github='https://github.com/Mayur3sh007/33_git-push--f_DUhacks' />
            </section>
        </div>)
}

export default ProjectsSection