import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/MH3.png"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x: -100 , opacity: 0},
  visible: {
    x: 0, 
    opacity: 1,
    transition: {duration: 0.5, delay:delay}
  },
});


const Hero = () => {
  return ( <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center ">
            <motion.h1 
            variants={container(0)}
            initial='hidden'
            animate='visible'
            className="pb-12 text-4xl font-thin tracking-tight lg:mt-2 lg:text-7xl">
                Mihaela Hoaghea </motion.h1>
                <motion.span 
                 variants={container(0.5)}
                 initial='hidden'
                 animate='visible'
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight
                 text-transparent">Web Designer & Developer</motion.span>
                 <motion.p
                  variants={container(1)}
                  initial='hidden'
                  animate='visible' 
                 className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}

                 </motion.p>

        </div>
        </div>
        <div className="w-full lg:w-1/3 lg:-8">
        <div className="flex justify-center">
            <img src={profilePic} alt="Mihaela Hoaghea" />
            </div>
            </div>
        </div>
        </div>
  );
};

export default Hero
