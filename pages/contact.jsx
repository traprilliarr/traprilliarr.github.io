import React from 'react'
import Head from 'next/head';
import { emailLink } from '../constants/home'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../utils/motion'
import TextSpan from '../components/TextSpan'

const contact = () => {
  const sentence = 'Hit me up!'.split("")
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
        <section className='min-h-screen grid grid-cols-1 place-content-center'>
          <motion.div variants={staggerContainer(0, 0)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.4}} className='max-w-xl mx-auto h-full flex flex-col items-center justify-center'>
            <motion.h2 variants={fadeIn('up','tween', 0.1, .6)} className="text-5xl font-bold mb-4 text-primary inline-flex">
              {sentence.map((letter, index) => (
                <TextSpan key={index}>
                  {letter === " " ? "\u00a0" : letter}
                </TextSpan>
              ))}
            </motion.h2>
            <motion.p variants={fadeIn('up','tween', 0.1, .6)} className='text-center text-whiteSecondary mb-12'>I'm looking for opportunities to work as a Frontend Developer, Analyst, or in fields related to Data. Please don't hesitate to reach out to me!</motion.p>

            <motion.a variants={fadeIn('up','tween', 0.1, .6)} href={emailLink} target='_blank'  className='px-12 py-2.5 text-lg rounded-md text-wht border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05] font-medium transition-colors ease-in-out duration-200'>
              Click me in here!
            </motion.a>

          </motion.div>
        </section>
      </main>
    </>
  )
}

export default contact