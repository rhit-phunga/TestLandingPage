import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets';

const GetStarted = () =>  {

  return (
    <a href='https://discord.gg/rcrfDKAaDv' target='.blank'> 
    <button className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] transition-all ease-in-out duration-300 hover:p-[70px] cursor-pointer bg-[#7de7eb] hover:bg-[#6042b3] text-[#7de7eb] hover:text-[#FFFFFF]`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium'>
            <span className='font-poppins'>Get</span>
          </p>
          <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain'/>

        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='font-poppins'>Started</span>
          
          </p>  
      </div>    
    </button></a>
  )

};

export default GetStarted