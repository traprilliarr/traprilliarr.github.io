import React from 'react'
import Image from 'next/image'
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'

const ProjectRight = ({project}) => {
  return (
    <motion.div variants={fadeIn('up','tween', 0, .6)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.2}} transition={{when: "beforeChildren"}} className='grid grid-cols-12'>

      <a href={project.liveUrl} target="_blank" rel="noreferrer" className='relative col-start-6 col-end-13 row-start-1 hidden lg:block w-full lg:h-72 xl:h-96 group overflow-hidden'>
        <div className='absolute top-0 left-0 right-0 w-full h-full bg-darkSecondary/20 group-hover:bg-transparent z-10 transition-colors ease-in-out duration-300'/>
        <Image src={`/${project.image}`} alt={project.image} fill={true} sizes="100vw" className='object-fit group-hover:scale-105 transition-all ease-in-out duration-300'/>
      </a>

      <div className='col-start-2 col-end-12 lg:col-start-1 lg:col-end-7 row-start-1 z-10 p-5 bg-darkSecondary lg:bg-transparent shadow-md rounded-lg lg:shadow-none lg:rounded-none text-center lg:text-left w-full'>
        <div className='mb-4 md:mb-6'>
          <p className='text-xs text-primary lg:text-sm mb-2'>Featured Project</p>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className='text-xl font-bold'>{project.title}</a>
        </div>
        <p className='text-sm lg:text-base mb-4 text-whiteSecondary lg:bg-darkSecondary rounded-sm lg:shadow-md lg:p-6'>{project.description}</p>
        <ul className='flex items-center justify-center lg:justify-start text-whiteSecondary text-sm lg:text-base space-x-2 flex-wrap mb-6'>
          {project.techsUsed.map((technology, index) => (              
            <li className='px-1 py-1 rounded-md' key={index}>{technology}</li>
          ))}

        </ul>
        <ul className='flex items-center justify-center lg:justify-start gap-4 text-sm'>
          <li>
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className='hover:text-primary transition-colors ease-in-out duration-300'>
              <HiOutlineExternalLink size={21}/>
            </a>
          </li>
        </ul> 
      </div>
      
    </motion.div>
  )
}

export default ProjectRight