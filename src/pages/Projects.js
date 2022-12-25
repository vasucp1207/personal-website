import React from 'react'
import styled from 'styled-components'

function Projects() {
  return (
    <Container>
        <div className='title'>Projects</div>
        <div className='projects'>
            <img />
        </div>
    </Container>
  )
}

export default Projects

const Container = styled.div`
    .title {
        font-size: 60px;
        margin: 50px 80px;
    }

    .title::after {
    content: '';
    width: 210px;
    height: 5px;
    display: block;
    background-color: #41228e;
    border-radius: 5px;
  }
`