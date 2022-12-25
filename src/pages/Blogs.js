import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import data from '../data'

function Blogs() {
  return (
    <Container>
        <div className='title'>Blogs</div>
        <div className='blogs'>
          {data.map((blog) => {
              return <Card img={blog.img} title={blog.title} desc={blog.description} tech={blog.tech} />
          })}
        </div>
        <div className='wave'></div>
    </Container>
  )
}

export default Blogs

const Container = styled.div`
    .title {
        font-size: 60px;
        margin: 50px 80px;
    }

    .wave {
        height: 64px;
        background-image: url('/assets/wave.svg');
    }
    .title::after {
    content: '';
    width: 150px;
    height: 5px;
    display: block;
    background-color: #41228e;
    border-radius: 5px;
  }

  .blogs {
    margin: 100px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 80px;
  }
`