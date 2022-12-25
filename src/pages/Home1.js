import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'

function Home1() {
    return (
        <Wrap>
            <Container>
                <img className='ocean' src='/assets/Ocean.svg' alt='ocean' />
                <div className='fish'></div>
                <div className='left'>
                    <FaGithub className='icon' />
                    <FaTwitter className='icon' />
                    <SiHashnode className='icon' />
                </div>
                <div className='right-cont'>
                    <div className='right'>
                        <h1 className='head'>Hi, I am Vasu</h1>
                        <p className='srt-des'>I am a FullStack Developer</p>
                        <p className='srt-des'>I love making Mobile and Web apps</p>
                        <button className='cont-btn'>Contact Me</button>
                    </div>
                    <img src='/assets/116.png' alt='hero' className='hero-img' />
                </div>
            </Container>
        </Wrap>
    )
}

export default Home1

const Wrap = styled.div`
    margin-top: 70px;
    /* background-image: url('https://www.docker.com/wp-content/uploads/2022/01/newsroom-light-blue.svg') !important; */
    position: relative;
    background-position: 50%;
    background-size: 100%;
    background-size: cover;
    background: #0169ff;
`

const Container = styled.div`
    display: flex;
    gap: 60px;
    position: relative;

    .ocean {
        position: absolute;
        bottom: 0;
    }

    .fish {
        position: absolute;
        left: -7%;
        background-repeat: no-repeat;
        opacity: 0.5;
        /* background-image: url('/assets/fish.svg'); */
        height: 100%;
        width: 100%;
    }
    .right-cont {
        display: flex;
        gap: 80px;
    }
    .right {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .hero-img {
        right: 0;
        top: -10%;
        position: absolute;
        height: 500px;
        width: 500px;
        padding: 0;
        margin: 0;
    }
    .head{
        margin-top: 60px;
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
        color: #2496ed;
        border: none;
        font-size: 22px;
        background-color: #003f8c;
        color: white;
        width: 140px;
        height: 50px;
        border-radius: 7px;
        margin-top: 40px;
        margin-bottom: 70px;
        cursor: pointer;

        :hover{
            color: #003f8c;
            background-color: white;
            transition: 0.1s ease-in-out;
            border: 1px solid white;
        }
    }

    .left {
        z-index: 1;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: auto;
        color: white;
        gap: 20px;
        margin-bottom: -10px;

        ::after {
            content: '';
            width: 2px;
            display: block;
            height: 70px;
            background: white;
        }
    }
    .icon{
        width: 30px;
        height: 30px;
        :hover{ 
            cursor: pointer;
            transform: translateY(-5px);
            transition: 0.4s;
            color: #003f8c;
        }
    }

    @media(max-width: 1200px) {
        .head {
            font-size: 45px;
        }
        .srt-des {
            font-size: 35px;
        }
        .hero-img {
            width: 430px;
            height: 430px;
        }
    }

    @media(max-width: 1050px) {
        .head {
            font-size: 40px;
        }
        .srt-des {
            font-size: 30px;
        }
    }

    @media(max-width: 950px) {
        .head {
            font-size: 40px;
        }
        .srt-des {
            font-size: 30px;
        }
        .hero-img {
            display: none;
        }
        .right-cont {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: -50px;
        }
        .cont-btn {
            margin-top: 10px;
        }
    }

    @media(max-width: 600px) {
        .srt-des {
            font-size: 26px;
        }
    }
`