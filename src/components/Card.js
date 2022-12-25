import React from 'react'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'

function Card({ img, title, desc, tech }) {
    return (
        <Container className='blog'>
            <img className='img' src={img} alt='header-img' />
            <p className='title-blog'>{title}</p>
            <p className='desc'>{desc}</p>
            <div className='footer'>
                <div className='tech'>
                    {tech.map((stack) => {
                        return <span>#{stack} </span>
                    })}
                </div>
                <div className='link'><span>Read</span> <BsArrowRight className='link-icon' /></div>
            </div>
        </Container>
    )
}

export default Card

const Container = styled.div`
    width: 360px;
    height: 502px;
    /* border: 1px solid rgba(0,0,0,.125); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    overflow: hidden;
    :hover {
        .img {
            transform: scale(1.05);
            transition: 0.3s;
        }
    }

    .img {
        background-size: cover;
        height: 230px;
        width: 360px;
        /* border: 1px solid #888; */
    }

    .title-blog {
        margin-left: 15px;
        font-size: 22px;
        font-weight: 300;
    }

    .desc {
        margin-left: 15px;
        font-size: 16px;
        color: #888;
        margin-bottom: 20px;
        font-weight: 250;
    }

    .footer {
        width: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tech {
        width: inherit;
        margin-left: 30px;
        display: flex;
        gap: 10px;
    }

    .tech>span {
        background-color: #de2459;
        border-radius: 5px;
        color: white;
        padding: 4px;
    }

    .link {
        font-size: 20px;
        margin-right: 20px;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        align-items: center;
        gap: 2px;
        /* border: 2px solid #002a64; */
        background: #de2459;
        color: white;
        height: fit-content;
        cursor: pointer;
    }

    .link:hover {
        opacity: 0.8;
        .link-icon {
            transform: translateX(5px);
            transition: 0.3s;
            padding-right: 3px;
        }
    }
`