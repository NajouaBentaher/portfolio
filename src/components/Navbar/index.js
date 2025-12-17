"use client"

import React from "react"
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  ContactButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  ThemeToggle,
} from "./NavbarStyledComponent"
import { FaBars, FaSun, FaMoon, FaPhoneAlt } from "react-icons/fa"
import { Bio } from "../../data/constants"
import { useTheme } from "styled-components"

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const theme = useTheme()

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20;", cursor: "pointer" }}>
            <img
              src="DALL_E_2024-10-17_15.33.08_-_A_minimalistic_logo_featuring_the_initials__H_E_._The_design_should_be_simple__clean__and_modern__with_a_sleek_sans-serif_font._Incorporate_subtle_ali-removebg-preview.png"
              alt="Najoua Bentahers Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
            {/* <Span>Najoua Bentaher</Span> */}
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          />
        </MobileIcon>
        <NavItems> 
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certificate">Certificate</NavLink>
        </NavItems>
        <ButtonContainer>
          <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </ThemeToggle>
          <ContactButton href="#contact">
            Contact
          </ContactButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Education
            </MobileLink>
            <MobileLink
              href="#certificate"
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              Certificate
            </MobileLink>
            
            <ThemeToggle onClick={() => setDarkMode(!darkMode)} style={{ margin: "10px 0" }}>
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              <span style={{ marginLeft: "8px" }}>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </ThemeToggle>
            <ContactButton
              style={{ padding: "10px 16px", background: `${theme.primary}`, color: "white", width: "max-content" }}
              href={Bio.github}
              target="_blank"
            >
              <FaPhoneAlt size={20} style={{ marginRight: "8px" }} /> 
               Contact
            </ContactButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
