import React from 'react'

const Button = ({ title, styles, href }) => {
  return (
    <a href={href} target='.blank'>
    <button type='button' className={`py-4 px-6 bg-[#7de7eb] font-poppins font-medium text-[18px] text-primary outline-none ${styles} transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6042b3] text-[#7de7eb] hover:text-[#FFFFFF] duration-300 rounded-[10px]`}>
      {title}
    </button>
    </a>
  )
}

export default Button