import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const EduDetails = ({ title, university, year, logo }) => {
    return (
        <Container>
            <DetailsConatiner>
                <Title>
                    {title}
                </Title>
                <CollegeName>
                    {university}
                </CollegeName>
                <Year>
                    {year}
                </Year>
            </DetailsConatiner>
            <Logo width={320} className={styles.logo} objectFit="contain" height={60} src={logo} alt="logo" />
        </Container>
    )
}

export default EduDetails

const Container = styled.div`
    padding: 20px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    @media (max-width:425px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }
`
const DetailsConatiner = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width:425px){
        margin-bottom: 10px;
    }
`
const Title = styled.h3`
    font-size: 28px;
    font-weight: 700px;
    @media (max-width:425px){
        font-size: 20px;
    }
`
const CollegeName = styled.p`
    font-size:18px; 
    font-weight: bold;
    @media (max-width:425px){
       font-size: 16px;
    }
`
const Year = styled.p`
    font-weight: 700;
    @media (max-width:425px){
        font-size: 16px;
    }
`
const Logo = styled(Image)`
     @media (max-width:425px){
      width: 100%;
      height: 80%;
  }
`
