import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'

function Home() {
  return (
    <Wrapper>
        <Icons>
            <div className='icons'>
                <FaGithub className='icon' />
                <FaTwitter className='icon' />
                <SiHashnode className='icon' />
            </div>
        </Icons>
        <Container>
            <h1 className='head'>Hi, I am Vasu</h1>
            <p className='srt-des'>I am a FullStack Developer</p>
            <p className='srt-des'>I love making Mobile and Web apps</p>
            <button className='cont-btn'>Contact Me</button>
        </Container>
        <div className='leaf-bg'></div>
        <div className='yellow-leaf'></div>
        <div className='leaf-orange'></div>
        <div className='leaf-blue'></div>
        <div className='leaf-pink'></div>
        <div className='dots'></div>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
    display: flex;
    background-color: #41228e;
    height: 100vh;

    .leaf-bg{
        position: absolute;
        top: 15%;
        left: 0;
        background-image: url('/assets/leaf-bg.png');
        background-repeat: no-repeat;
        object-fit: cover;
        width: 100vw;
        height: 85vh;
    }
    .yellow-leaf{
        position: absolute;
        top: 15%;
        right: 0;
        background-image: url('/assets/leaf-yellow.png');
        background-repeat: no-repeat;
        object-fit: cover;
        width: 13vw;
        height: 45vh;
    }
    .leaf-blue{
        position: absolute;
        bottom: 0;
        right: 0;
        background-image: url('/assets/leaf-cyan-2.png');
        background-repeat: no-repeat;
        object-fit: cover;
        width: 9vw;
        height: 20vh;
    }
    .leaf-pink{
        position: absolute;
        bottom: 5%;
        left: 43%;
        background-image: url('/assets/leaf-pink-round.png');
        background-repeat: no-repeat;
        object-fit: cover;
        width: 18vw;
        height: 10vh;
    }
    .dots{
        position: absolute;
        top: 25%;
        left: 53%;
        background-image: url('/assets/dots-orange.png');
        background-repeat: no-repeat;
        object-fit: cover;
        width: 20vw;
        height: 20vh;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 13rem;
    padding-top: 13rem;
    .head{
        z-index: 1;
        font-size: 60px;
        color: white;
        font-weight: 500;
    }
    .srt-des{
        z-index: 1;
        font-size: 40px;
        color: white;
    }
    .cont-btn{
        z-index: 1;
        color: #41228e;
        border: none;
        font-size: 22px;
        background-color: white;
        width: 140px;
        height: 50px;
        margin-top: 30px;
        border-radius: 7px;
        cursor: pointer;

        :hover{
            color: white;
            background-color: #41228e;
            transition: 0.1s ease-in-out;
            border: 1px solid white;
        }
    }

    @media(max-width: 1000px){
        padding-left: 7rem;
        .srt-des{
            font-size: 30px;
        }
        .cont-btn{
            font-size: 18px;
            width: 110px;
            height: 40px;
        }
    }
    @media(max-width: 800px){
        padding-left: 3rem;
        .srt-des:nth-child(3){
            font-size: 20px;
        }
    }
    @media(max-width: 600px){
        padding-left: 1rem;
        .srt-des:nth-child(3){
            font-size: 20px;
        }
    }
`

const Icons = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 60px;
    .icons{
        display: flex;
        flex-direction: column;
        gap: 30px;
        color: white;
    }
    .icon{
        width: 30px;
        height: 30px;
        :hover{ 
            cursor: pointer;
        }
    }
`