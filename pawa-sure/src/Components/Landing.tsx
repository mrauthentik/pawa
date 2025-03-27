import React, {useEffect} from "react"
import { useNavigate } from "react-router-dom"
import {motion} from "framer-motion"

import img from '../assets/images/home-icon.png'

const Landing: React.FC = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const timer = setTimeout(()=>{navigate('/signup')}, 3000)
        return()=>clearTimeout(timer)
    }, [navigate])

	return (
		<div className="landing-container">
			<motion.img 
                alt="Pawasure image"
                src={img}
                animate={{
                    opacity: [0.8, 1,0.8,2,0.8],
                    filter: [
                        "brightness(1) contrast(1)",
                        "brightness(1.5) contrast(1.5)",
                        "brightness(1) contrast(1)"
                    ],
                }}
                transition={{
                    repeat:Infinity,
                    duration: 3,
                    ease: "easeInOut",
                }}
            />

            
		</div>
	);
}

export default Landing