import React from 'react'
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () =>  (
  <section id='clients' className={`${styles.flexCenter} flex-col relative`}>

    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'>

    </div>
   
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={`${styles.heading2}`}>
        What our members <br className='sm:block hidden'/> thinks about the club
      </h1>

      <div className='flex flex-wrap sm:justify-start justiify-center w-full feedback-container relative z-[1]'>
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {... card} />
          ))}
      </div>
    </div>
  </section>

)


export default Testimonials