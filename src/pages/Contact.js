import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'

function Contact() {
    return (
        <Container>
            <div className='cont'>
                <div className='left'>
                    <div className='title'>Contact Me</div>
                    <p className='des'>Feel free to ask anything. If you have any suggestions or queries, please let me know. Your suggestions are highly appreciated. I appreciate your time and I will try my best to reply to every single message posted here! Keep dropping your priceless opinions.</p>
                </div>
                <div className='right'>
                    <div className='fields'>
                        <p>Your Name</p>
                        <input type='text' required placeholder='Enter your name' />
                    </div>
                    <div className='fields'>
                        <p>Email Address</p>
                        <input type='text' required placeholder='Enter your email' />
                    </div>
                    <div className='fields'>
                        <p>Message</p>
                        <textarea></textarea>
                    </div>
                    <button>Submit</button>
                </div>
            </div>
            <div className='footer'>
                <div className='icons'>
                    <div className='icons-cont'>
                        <FaGithub className='icon' />
                        <FaTwitter className='icon' />
                        <SiHashnode className='icon' />
                    </div>
                    <p>© 2022 Vasu Inc. All rights reserved</p>
                </div>
            </div>
            <div className='ftb'>
                <img src='/assets/Ocean.svg' alt='' />
                <img src='/assets/digitalOcean.svg' alt='' />
                <img src='/assets/ocean1.svg' alt='' />
            </div>
        </Container>
    )
}

export default Contact

const Container = styled.div`
    position: relative;
    background-color: #0169ff;
    .des {
        color: #e3e8f4;
    }
    .cont {
        display: flex;
        gap: 40px;
        padding-top: 50px;
        padding-left: 120px;
        padding-right: 120px;
        color: white;
    }
    .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 0.5;

        .title {
            font-size: 50px;
            font-weight: 300;
        }
        .des {
            font-size: 17px;
            font-weight: 300;
            margin-top: 10px;
            letter-spacing: 0.9px;
        }
    }
    .right {
        display: flex;
        flex-direction: column;
        gap: 30px;
        flex: 0.5;
    }
    .fields {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    p {
        font-size: 18px;
        font-weight: 250;
    }
    input {
        border: none;
        outline: none;
        width: 100%;
        height: 40px;
        border-radius: 6px;
        padding: 5px;
        font-size: 17px;
        background-color: #7eb0fb;
        color: #e3e8f4;
        ::placeholder {
            color: #e3e8f4;
        }
    }
    textarea {
        resize: vertical;
        border: none;
        color: #e3e8f4;
        max-height: 300px;
        min-height: 40px;
        border-radius: 6px;
        background-color: #7eb0fb;
        outline: none;
        padding: 4px;
        font-size: 17px;
    }
    button {
        height: 40px;
        border: none;
        outline: none;
        font-size: 20px;
        color: #0169ff;
        border-radius: 6px;
        cursor: pointer;

        :hover {
            background-color: #7eb0fb;
        }
    }
    .footer {
        color: white;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        ::before {
            content: '';
            display: block;
            width: 90vw;
            height: 2px;
            background-color: white;
        }
    }
    .icons {
        width: 90vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icons-cont {
        display: flex;
        gap: 20px;
    }
    .icon {
        width: 30px;
        height: 30px;
        :hover {
            cursor: pointer;
            color: #7eb0fb;
        }
    }

    .ftb {
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
    }

    @media(max-width: 950px) {
        .cont {
            flex-direction: column;
        }
    }

    @media(max-width: 700px) {
        .cont {
            padding-left: 40px;
            padding-right: 40px;
        }
    }
`