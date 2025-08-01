import React from 'react'
import Spotlight from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='pb-20 pt-36'>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs tex-center text-blue-100 max-w-80'>
            Dynamic Web Magic with Next.js
          </h2>

          < TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' duration={2} filter={false} words={'Transforming Concepts Into Seamless User Experiences'} />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100'>
            Hi, I&apos;m Jesus, a passionate web developer specializing in Next.js.
          </p>

          <a href="#about">
            <MagicButton title='Show my work' icon={<FaLocationArrow />} position='right' />
          </a>
        </div>
      </div>

    </section>
  )
}

export default Hero