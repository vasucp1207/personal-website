import React from 'react'
import styled from 'styled-components'
import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiExpress, SiFirebase, SiMongodb } from 'react-icons/si'
import Skills from '../components/Skills'

function About() {
  return (
    <Container>
      <div className='title'>About Me</div>
      <p className='des'>Hi, I am Vasu Singh a 3rd year undergrad student, doing Web Development and love Open Source.
        Currently I am learning IOS development.
      </p>
      <Skills />
    </Container>
  )
}

export default About

const Container = styled.div`
  height: fit-content;

  .title {
    font-size: 60px;
    margin: 50px 80px;
  }

  .des {
    font-size: 20px;
    margin: -20px 80px;
    max-width: 600px;
  }

  .icons {
    margin: -20px 80px 80px;
    display: flex;
    gap: 20px;
    cursor: pointer;
  }

  .icon {
    width: 50px;
    height: 50px;
  }
`