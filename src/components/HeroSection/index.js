import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, ReseauSocieux, SocialContainer } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        {/* Animate title and text loop from left to right */}
                        <motion.div 
                            initial={{ x: -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <Title>Hi, I'm {Bio.name}</Title>
                        </motion.div>
                        <motion.div 
                            initial={{ x: -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <TextLoop>
                                I'm a
                                <Span>
                                    {"< "}
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                    {" />"}
                                </Span>
                            </TextLoop>
                        </motion.div>
                        {/* Animate subtitle from right to left */}
                       
                      <motion.div 
                        initial={{ x: 100, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        <SubTitle> {Bio.description[0]}<br/>{Bio.description[1]}</SubTitle>
                        
                        <SocialContainer>
                            <ReseauSocieux href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={28} />
                            </ReseauSocieux>

                            <ReseauSocieux href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={28} />
                            </ReseauSocieux>

                            <ReseauSocieux href="mailto:yourmail@gmail.com">
                                <FaEnvelope size={28} />
                            </ReseauSocieux>
                        </SocialContainer>

                        <ResumeButton href={Bio.resume} target='display'>See my resume</ResumeButton>
                    </motion.div>

                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        {/* Animate the image with scale and fade-in */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <Img src={HeroImg} alt="hero-image" />
                        </motion.div>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection;
