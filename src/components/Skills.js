import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Fade } from '@material-ui/core';

export default function Skills() {
    return (
        <Container id="skills">
            <Head>
                Skills
            </Head> 
            <SkillsContainer> 
                    <ImageContainer>
                        <Image width={700} height={400} src="/portfolio.svg" alt="portfolio" />
                    </ImageContainer>
                <Fade in={true} timeout={3000}>
                    <SkillsItems>
                        <Skill>  
                            <i className="fab fa-html5"></i>
                            <Title>
                                HTML
                            </Title>
                        </Skill>
                        <Skill>
                            <i className="fab fa-css3-alt"></i>
                            <Title>
                                CSS    
                            </Title>
                        </Skill>
                        <Skill>
                            <i className="fab fa-js"></i>
                            <Title>
                                JS    
                            </Title>
                        </Skill>
                        <Skill>
                            <i className="fab fa-react"></i>
                            <Title>
                                ReactJS    
                            </Title>
                        </Skill>
                        <Skill>
                            <FirebaseLogo>
                                <Image width={30} height={40} src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="firebase logo"/>
                            </FirebaseLogo>
                            <Title>
                                Firebase    
                            </Title>
                        </Skill>
                        <Skill>
                            <i className="fab fa-npm"></i>
                            <Title>
                                Npm    
                            </Title>
                        </Skill>
                        <Skill>
                            <i className="fab fa-node"></i>
                            <Title>
                                Node JS   
                            </Title>
                        </Skill>
                    </SkillsItems>
                </Fade>
            </SkillsContainer>
        </Container>
    )
}

const Container = styled.section`
    background-color: #2f2945;
    color: white;
    padding: 30px;
`

const Head = styled.h4`
    margin-top: 40px;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
`
const SkillsContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width:425px){
        display: flex;
        flex-direction: column;
    }
`
const SkillsItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;
    transition-timing-function: ease-in;
    transition: all 0.5s
`
const Skill = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    i {
        margin-right: 10px;
        font-size: 50px;
        color: orange
    }
    &:hover{
        color: #2382db;
        transform: scale(1.03);
    }
`
const Title = styled.p`
    font-size: 16px;
`
const FirebaseLogo = styled.div`
    margin-right: 10px;
`
const ImageContainer = styled.div`
    margin-right: 20px;
    width: 100%;
    display: flex;
    align-items: center;
`
