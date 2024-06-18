import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io"
import { AiFillGithub} from "react-icons/ai"
import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3Alt  } from "react-icons/fa"
import { SiAdobeindesign  } from "react-icons/si"
import { SiAdobedreamweaver  } from "react-icons/si"
import { SiAdobeillustrator  } from "react-icons/si"
import { IoLogoFigma  } from "react-icons/io5"
import { SiAdobephotoshop   } from "react-icons/si"
import { FaSwift } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaJira } from "react-icons/fa";
import { motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: { Y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <AiFillGithub className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <AiFillHtml5 className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobeillustrator  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobeindesign  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobedreamweaver  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobephotoshop  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoFigma  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaSwift  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSelenium  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava  className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJira  className="text-7xl text-cyan-400"/>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
