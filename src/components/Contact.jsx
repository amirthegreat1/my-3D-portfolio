import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Import your icons here (Make sure they exist in assets/index.js first)
import { github , mail , linkedin, whatsapp} from "../assets"; 
// import { linkedin, email } from "../assets"; <--- Uncomment once you add these

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* --- REPLACED THE FORM WITH THIS DIV --- */}
        <div className='mt-12 flex flex-col gap-8'>
            
            {/* EMAIL CARD */}
            <a 
              href="mailto:amirhosseinzhmt@gmail.com" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium flex items-center gap-4 hover:bg-white hover:text-tertiary transition-colors duration-300"
            >
                {/* Replace source with your email icon */}
                <img src={mail} alt="email" className="w-8 h-8 object-contain" /> 
                <span className="text-[18px]">Email Me</span>
            </a>

            {/* GITHUB CARD */}
            <a 
              href="https://github.com/amirthegreat1" 
              target="_blank"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium flex items-center gap-4 hover:bg-white hover:text-tertiary transition-colors duration-300"
            >
                <img src={github} alt="github" className="w-8 h-8 object-contain" />
                <span className="text-[18px]">Check out my GitHub</span>
            </a>

            {/* LINKEDIN CARD */}
            <a 
              href="https://linkedin.com/in/amirhosseinzhmt" 
              target="_blank"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium flex items-center gap-4 hover:bg-white hover:text-tertiary transition-colors duration-300"
            >
                 {/* Replace source with your LinkedIn icon */}
                <img src={linkedin} alt="linkedin" className="w-8 h-8 object-contain" />
                <span className="text-[18px]">Connect on LinkedIn</span>
            </a>
            {/* WhatsApp CARD */}
            <a 
              href="https://wa.me/+989173141898" 
              target="_blank"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium flex items-center gap-4 hover:bg-white hover:text-tertiary transition-colors duration-300"
            >
                 {/* Replace source with your LinkedIn icon */}
                <img src={whatsapp} alt="linkedin" className="w-8 h-8 object-contain" />
                <span className="text-[18px]">DM Me on WhatsApp</span>
            </a>
        </div>
        {/* --- END OF REPLACEMENT --- */}

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");