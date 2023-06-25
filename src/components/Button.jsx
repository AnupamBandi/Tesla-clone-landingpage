

import React from 'react'


const Button = ({button}) => {
  return (
    <div className='flex flex-col px-12 items-center justify-center gap-y-4 sm:flex-row sm:gap-y-0 sm:gap-x-4'>
        {
            button.map((text,id)=>(
                <button className={`w-full ${
                    id==0 ?"bg-[#393c41] text-white":"bg-[#e5e6e5]"
                } cursor-pointer rounded-md p-2 font-medium sm:w-80
                `
                } key={id}>{text}</button>
            ))
        }
    </div>
  )
}

export default Button