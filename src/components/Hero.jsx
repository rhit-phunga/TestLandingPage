import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets';
import GetStarted from './GetStarted'

const Hero = () => (

    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> 
        <div className="flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph}`}>
          <span className='text-gradient'>About Us</span>
          </p>
          
        </div>

      <div className='flex flex-row justify-between items-center w-full '>

    <div className="font-poppins font-semibold ss:text-[72px] text-[52px] [text-wrap:balance] bg-clip-text text-white">We Learn By {" "} 
    <span className="text-indigo-500 text-7xl md:text-8xl inline-flex flex-col h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.8xl)*theme(lineHeight.tight))] overflow-hidden">
      <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
        <li className="text-[#C42021]">Attacking</li>
        <li className='text-[#23c0d1]'>Defending</li>
        <li className='text-[#00b800]'>Hacking</li>
        <li className='text-[#466060]'>Hardening</li>
        <li aria-hidden="true" className="text-[#C42021]">Attacking</li>
    </ul>
</span></div>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Systems.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      At the Rose-Hulman Computer Security club, we're passionate about safeguarding digital frontiers. Through engaging activities, guest speakers, and cyber competitions, we explore the depths of security. Our diverse community welcomes all skill levels, from beginners to experts, fostering a dynamic space where knowledge thrives through hands-on exploration.
      </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='billing' className='w-[100%] relative z-[5]'/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient "/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>

);

export default Hero