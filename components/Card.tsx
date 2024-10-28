import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLinkIcon } from 'lucide-react'

const Card = ({ title, description, link, image, github }: { title: string, description: string, link: string | null, image: string, github: string }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black bg-opacity-50 dark:bg-opacity-90 relative group/card border-neutral-700 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-lg hover:shadow-[0_0_20px_5px_rgba(128,0,128,0.7)] transition-shadow duration-300">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-[#8A2BE2] dark:text-purple-300"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-200 text-sm max-w-sm mt-2 dark:text-white"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-[0_0_20px_5px_rgba(128,0,128,0.7)] transition-shadow duration-300"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          {link && (
            <CardItem
              translateZ={20}
              as={Link}
              href={link}
              target="__blank"
              className="px-4 py-2 rounded-xl text-s font-normal dark:text-white text-[#8A2BE2] bg-transparent dark:bg-transparent hover:text-purple-500 transition-colors duration-300"
            >
              {title === 'WealthWise' ? 'Devfolio ' : 'Live '} <ExternalLinkIcon className='inline-block w-4 h-4 ml-1' />
              {/* Check it Out → */}
            </CardItem>
          )}
          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            target="__blank"
            className="px-4 py-2 right-3 ml-auto  rounded-xl bg-purple-600 hover:bg-purple-700 dark:bg-purple-400 dark:hover:bg-purple-500 text-white dark:text-black text-xs font-bold transition-colors duration-300"
          >
            Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default Card
