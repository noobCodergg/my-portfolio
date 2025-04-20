import React from 'react'
import {motion} from 'framer-motion'
const Heading3 = () => {
  return (
    <div className='flex items-center justify-center bg-black px-10 pt-20'>
      <motion.div 
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:true}}
      >
        <motion.p
         initial={{opacity:0,y:40}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.6}}
         viewport={{once:true}}
         className='text-text1 text-md  font-bold flex items-center justify-center pb-4'
        >
          Pricing
        </motion.p>

        <motion.h1
         initial={{opacity:0,y:40}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.9}}
         viewport={{once:true}}
         className='text-white text-4xl font-bold flex items-center justify-center text-center pb-4 leading-[1.5]'
        >
         Enhancing Collaboration<br/>
         between Remote
        </motion.h1>

      </motion.div>
    </div>
  )
}

export default Heading3