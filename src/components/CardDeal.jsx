import React from 'react'
import { event } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';
const CardDeal = () => {
  return (
    <section id='Events' className={layout.section}>
      <div className={layout.sectionImg}>
        <img src={event} alt='event' className='w-[60%] relative z-[5] ss:mb-[30px]'/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "/>      
      </div>
      <div className= {layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Learn professional skills<br className="sm:block hidden"/> through competition
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
        Join our computer security club where we apply classroom knowledge to develop unconventional 
        strategies for cybersecurity competitions. If you're skilled in CSSE and enjoy tackling digital 
        puzzles, come be a part of our team!
        </p>
        <Button title='Join our Discord!' href='https://discord.gg/rcrfDKAaDv'/>
      </div>
      
    </section>
  )
}

export default CardDeal