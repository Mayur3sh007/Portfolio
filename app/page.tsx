import Headerbox from '../components/Headerbox';
import { HeroName } from '../components/HeroName';
import HeroPic from '../components/HeroPic';
import Card from '@/components/Card';
import Title from '@/components/Title';

export default function Home() {
  return (
    <div className='flex flex-col w-full h-'>
      {/* Header Section */}
      <section> {/* Add margin bottom to create space between sections */}
        <div className='w-full'>
          <Headerbox />
        </div>
      </section>

      {/* Hero Section */}
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

          {/* Card Section */ }
    <div className='flex-col items-center'>

      <Title word1="FEATURED" word2 = "PROJECTS" />

      <section className="flex justify-center space-x-3">
        <Card title='MegaBlog' description='An ultimate Blog Management platform powered by ReactJS and Appwrite.MegaBlog empowers you with intuitive features for a seamless and enriching blogging experience with comprehensive suite of tools designed to streamline content creation, management & experience.' link='https://appwrite-blog-nine.vercel.app/' image='/megaBlog.png' github='https://github.com/Mayur3sh007/MegaBlog_Frontend_Project'/>
        <Card title='vrSafe' description='A fully functional Banking App developed with Next.js, delivering a suite of modern features designed to enhance your banking experience. From robust security to intuitive usability, our platform ensures you have the tools to manage your finances conviniently.' link='https://vr-safe.vercel.app/' image='/vrSafe.png' github='https://github.com/Mayur3sh007/vrSafe'/>
        <Card title='CleanNGreen' description='Clean N Green revolutionizes ethical shopping by providing accessible information on product origins, labor practices, and environmental impact. With just a few clicks, users gain valuable insights, empowering them to make informed decisions that align with their values.' link='https://devfolio.co/projects/clean-n-green-0445' image='/CleanNGreen.png' github='https://github.com/Mayur3sh007/33_git-push--f_DUhacks'/>

      </section>

    </div>

    </div >
  );
}
