import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className='flex justiify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-0 my-5 feedback-card'>
        <img src={quotes} alt='quotes' className='w-[42px] h-[27px] object-contain'/>
        <p className='fonts-poppins fonts-normal text-[18px] leading-[32px] text-white my-10'>
          {content}
        </p>
        <div className='flex flex-row'>
          <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full'/>

          <div className='flex flex-col ml-4'>
            <h4 className='fonts-poppins fonts-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
            <p className='fonts-poppins fonts-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
          </div>
        </div>
    </div>
  )
}

export default FeedbackCard