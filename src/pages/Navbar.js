import React, { useState } from 'react'
import styled from 'styled-components'
import { GoThreeBars } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Navbar() {

    window.addEventListener('load', function(){
        if(window.innerWidth < 700){
            setNav(false)
            setExpand(true)
        }
    })
    window.addEventListener('resize', function() {
        if(window.innerWidth >= 700){
            setNav(true)
        } else if(this.window.innerWidth < 700){
            setNav(false)
            setExpand(true)
        }
    })

    const [expand, setExpand] = useState(false)
    const [nav, setNav] = useState(true)

    const setStates = () => {
        setExpand(prev => !prev)
        setNav(prev => !prev)
    }

    return (
        <Container>
            <div className={`name ${nav}`}>VASU</div>
            {nav && <nav className='nav-items'>
                <AiOutlineClose className='cross' onClick={setStates} />
                <div className='nav-sing'>About</div>
                <div className='nav-sing'>Projects</div>
                <div className='nav-sing'>Blogs</div>
                <Link to='/openSource' className='link'>
                    <div className='nav-sing'>OpenSource</div>
                </Link>
            </nav>}
            {expand && <GoThreeBars className='exp' onClick={setStates} />}
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    position: fixed;
    top: 0%;
    width: 100vw;
    min-height: 70px;
    background-color: #ffffff;
    border: 2px solid #e3e8f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    z-index: 2;

    .name{
        margin-left: 20px;
        font-size: 30px;
        letter-spacing: 1.1px;
        color: #0169ff;
    }
    .nav-items{
        display: flex;
        margin-right: 50px;
        display: flex;
        gap: 30px;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1.1px;
    }

    .nav-sing {
        padding: 10px;
        color: #24335a;
    }
    .nav-sing:hover{
        cursor: pointer;
        background-color: #e3e8f4;
        color: #0169ff;
        border-radius: 8px;
    }
    .cross{
        display: none;
        cursor: pointer;
    }
    .exp{
        display: none;
        width: 32px;
        height: 30px;
        margin-right: 20px;
        cursor: pointer;
    }
    .link{
        text-decoration: none;
        color: white;
    }

    @media(max-width: 700px) {
        .true {
            /* display: none; */
            position: absolute;
            top: 6%;
            left: 0;
        }
        .exp {
            color: #0169ff;
            display: block;
            position: absolute;
            right: 0;
            top: 33%;
        }
        .cross {
            color: #0169ff;
            position: absolute;
            right: 2%;
            top: 0;
            display: block;
            width: 35px;
            height: 35px;
            margin-bottom: -20px;
            margin-top: 15px;
        }
        .nav-items {
            margin-top: 55px;
            margin-left: 28px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 20px;
            gap: 5px;
            ::before {
                position: absolute;
                top: 27%;
                content: '';
                display: block;
                width: 2px;
                height: 155px;
                background: #0169ff;
            }
        }
        .nav-sing {
            position: relative;
            ::before {
                position: absolute;
                top: 47%;
                left: 0;
                content: '';
                display: block;
                width: 10px;
                height: 2px;
                background: #0169ff;
            }
        }
        .nav-sing:hover {
            background: none;
        }
    }
`