import React from 'react'
import Head from 'next/head';
import Image from 'next/image'
import { projects as myProjects, otherProjects, schoolProjects } from '../constants/home';
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../utils/motion'
import TextSpan from '../components/TextSpan'

const projects = () => {
  const projectSplit = 'Projects'.split("")
  const otherProjectSplit = 'Other Projects'.split("")
  const schoolProjectSplit = 'Thesis and Capstone Project'.split("")
  return (
    <>
      <Head>
        <title>Retno Tri Aprillia</title>
        <meta name="description" content="Frontend Developer" />
        <meta name="keywords" content="retno" />
        <meta name='author' content='retno'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cb-icon.svg" />
      </Head>
      <main className='relative max-w-6xl px-5 md:px-10 lg:px-12 xl:px-0 mx-auto z-20'>
        <section className='min-h-screen pt-40 lg:pt-44' id='projects'>
          <div className='w-full'>
            <motion.div
              variants={staggerContainer(0, 0)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: 'false', amount: 0.3 }}
              className='mb-12'
            >
              <motion.h2
                variants={fadeIn('up', 'tween', 0.1, 0.6)}
                className='text-4xl lg:text-5xl text-primary font-bold mb-4 inline-block'
              >
                {projectSplit.map((letter, index) => (
                  <TextSpan key={index}>
                    {letter === ' ' ? '\u00a0' : letter}
                  </TextSpan>
                ))}
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 'tween', 0.1, 0.6)}
                className='text-lg'
              >
                Here are the projects that I&apos;ve built.
              </motion.p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-md md:max-w-none mx-auto gap-14 md:gap-8 mb-28'>
              {myProjects.map((project, index) => (
                <motion.a
                  variants={fadeIn('up', 'tween', 0.2, 0.4)}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: 'false', amount: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  href={project.liveUrl}
                  target='_blank'
                  key={index}
                  className='rounded-md overflow-hidden'
                >
                  <div className='relative w-full h-48 overflow-hidden'>
                    <Image
                      src={`/${project.image}`}
                      alt={project.image}
                      fill={true}
                      sizes='100vw'
                      priority
                      className='object-cover'
                    />
                  </div>
                  <div className='p-4 bg-darkSecondary'>
                    <h4 className='text-center text-xl font-semibold text-primary mb-4'>
                      {project.title}
                    </h4>

                    <ul className='flex items-center justify-center text-whiteSecondary text-sm space-x-2 flex-wrap'>
                      {project.techsUsed.map((technology, index) => (
                        <li className='px-1 py-1 rounded-md' key={index}>
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default projects;