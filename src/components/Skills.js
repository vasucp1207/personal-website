import React from 'react'
import styled from 'styled-components'

function Skills() {
    return (
        <Container>
            <div className='wave-1' />
            <h1 className='skill'>Skills</h1>
            <div className='imgs'>
                <img className='lang' src='/assets/icons8-html-5-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-css3-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-javascript-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-node-js-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-express-js-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-react-native-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-next.js-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-mongodb-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-c++-96.png' alt='lang' />
                <img className='lang' src='/assets/icons8-firebase-96.png' alt='lang' />
            </div>
            <div className='wave-2' />
        </Container>
    )
}

export default Skills

const Container = styled.div`
    .skill {
        height: 90px;
        text-align: center;
        background: #e3efff;
        font-size: 50px;
        font-weight: normal;
    }
    .imgs {
        background: #e3efff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 30px;
    }
    .lang {
        background: white;
        border: 24px solid rgb(255, 255, 255);
        border-radius: 8px;
        box-shadow: rgb(0 8 36 / 5%) 0px 8px 16px;
    }
    .wave-1 {
        height: 64px;
        background-image: url('/assets/skill-wave.svg');
    }
    .wave-2 {
        height: 64px;
        background-image: url('/assets/skill-wave.svg');
        transform: rotate(180deg);
    }
`