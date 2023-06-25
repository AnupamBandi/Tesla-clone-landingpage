/* eslint-disable no-unused-vars */
import React from 'react'
import {hero} from "../constant"
import { downArrow } from '../assets'
import Button from './Button'


const Hero = () => {
  return (
    <section>
        {hero.map(({id,img,title,desc,button})=>(
            <div key={id} className='relative flex flex-col items-center justify-center'>
                <img src={img} alt="" className='object-cover h-screen w-full'/>
                <div className='absolute top-6 flex flex-col h-screen w-full items-center justify-between'>
                    <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-semibold'>
                        {title}
                    </h1>
                    <p className='text-2xl'>
                        {desc}
                    </p>
                    </div>
                    <div className='flex flex-col w-full gap-y-6 sm:flex'>
                        <Button button={button} />

                        
                        <img src={downArrow} className="mb-12 h-8 animate-bounce cursor-pointer" alt="" />
                    </div>

                </div>
            </div>

        ))
}
    </section>
  )
}

export default Hero