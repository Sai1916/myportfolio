import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Header() {

    const [show,handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 60) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll",transitionNavBar)
            return () => window.removeEventListener("scroll",transitionNavBar)
        }
    },[])

    return (
        <HeaderContainer className={`${show && `${styles.nav}`}`}>
            <Logo>
                <Link href='/'>
                    <a>
                        <span className="grey-color"> &lt;</span>
                        Sai Sumedh
                        <span className="grey-color">/&gt;</span>
                    </a>
                </Link>
            </Logo>
            <NavItems>
                <Item>
                    <Link href='#about'>
                        <a>About</a>
                    </Link>
                </Item>
                <Item>
                    <Link href='#skills'>
                        <a>Skills</a>
                    </Link>
                </Item>
                <Item>
                    <Link href='#education'>
                        <a>Education</a>
                    </Link>
                </Item>
                <Item>
                    <Link href='#projects'>
                        <a>Projects</a>
                    </Link>
                </Item>
                <Item>
                    <Link href='#contact'>
                        <a>Contact</a>
                    </Link>
                </Item>
            </NavItems>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    height: 40px;
    // width: 100%;
    display: flex;
    padding: 6px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    align-items: center;
    justify-content: space-around;
    @media (max-width:604px){
        height: 40px;
        display:flex;
        flex-direction: column;
        align-items: center; 
    }
`
const Logo = styled.h2`
   font-weight: 700;
   cursor:pointer;
`
const NavItems = styled.div`
    display:flex;
    width: 40%;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width:425px){
        display:none;
    }
`
const Item = styled.h4`
    // margin-right: 40px;
    font-weight: 600;
    cursor:pointer;
`