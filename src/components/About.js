import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import dynamic from 'next/dynamic'
 
export default function About() {

    const ParticlesBg = dynamic(
        () => import('particles-bg'),
        { ssr: false }
      )

    return (
        <AboutContainer id="about">
              <Image
                objectFit='cover'
                width={300}
                height={300} 
                src="/logo1.jpg"
                responsive={true}
                className ={styles.image} 
                alt="profileImg" 
              />
            <Line />
            <Description>
                <Text>
                    Full Stack React.js Web Developer and React-Native Developer, UI & UX Designer, CyberSecurity Student.
                    <Location>
                        Was watching you from Andhra Pradesh, India.
                    </Location>
                </Text>
                <Links>
                    <Link className="link" href="https://github.com/Sai1916">
                        <a target="_blank">
                            <GitHubIcon fontSize="large"/>
                        </a>
                    </Link>
                    <Link className="link" href="https://www.facebook.com/sai.sumedh.1916/">
                        <a target="_blank">
                            <FacebookIcon color="primary" fontSize="large"/>
                        </a>
                    </Link>
                    <Link className="link" href="https://www.instagram.com/_saisumedh_19/">
                        <a target="_blank">
                            <InstagramIcon fontSize="large"/>
                        </a>
                    </Link>
                    <Link className="link" href="https://www.linkedin.com/in/chittelu-sai-sumedh-8b433418b/">
                        <a target="_blank">
                            <LinkedInIcon  color="primary" fontSize="large"/>
                        </a>
                    </Link>
                    
                </Links>
            </Description>
            <ParticlesBg type="square" className={styles.particles} size={3} num={20} bg={true} />
        </AboutContainer>
    )
}

const AboutContainer = styled.section`
    padding: 30px; 
    margin-top: 80px;
    display: flex;
    height: 100%;;
    align-items: center;
    justify-content: center;

    @media (max-width:425px){
        display: flex;
        flex-direction: column;
        padding: 0px 6px;;
        margin-top: 20px;
        margin-bottom: 0px;
    }
`
const Line = styled.div`
    border: 0.2px solid grey;
    margin-left: 30px;
    height: 7rem;
    @media (max-width:425px){
        display:none;
    }
`

const Description = styled.div`
    margin-left: 20px;
    @media (min-width:700px){
        font-size: 18px;
    }
`
const Text = styled.p`
    padding: 10px;
`
const Location = styled.h4`
`
const Links = styled.div`
    padding: 2px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        transition: 0.3s ease;
        border-radius: 50px;
        padding: 8px;
        &:hover {
            transform: scale(1.3);
            cursor: pointer;
            background: #fff605;
        }
    }   
`
