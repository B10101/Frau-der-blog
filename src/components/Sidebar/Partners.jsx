import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import SidebarCard from './SidebarCard'
import './sidebar-styles.scss'

const partners = [
  
  //
  // {
  //   name: 'Open Journal',
  //   logo: '',
  //   logoAlt: 'Logo for Open Journal',
  //   url: '#',
  // },
]

const Recent = () => {
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="Aim" />
        <p>To provide educational content on various aspects of business, such as entrepreneurship, marketing, finance, management, and leadership. </p>
        
      </Wrapper>
    </SidebarCard>
  )
}

const Wrapper = styled.div`
  text-align: center;

  .post:hover {
    h5 {
      color: var(--primary-5);
    }
  }
  .partner {
    display: flex;
    align-items: center;
    margin: 1rem 0 1.2rem -1rem;
    justify-content: center;
  }

  .partner-img {
    overflow: visible;
    width: 35px;
    height: auto;
  }

  .partner-name {
    margin-left: 1rem;

    color: var(--grey-7);
    font-weight: 500;
  }

  @media screen and (max-width: 1085px) {
    .partner-name {
     font-size: 14px;
    }
  }

  @media screen and (max-width: 991px) {
    .partner {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem auto 1.2rem auto;
    }
  }
`

export default Recent
