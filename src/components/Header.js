import React,{ useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';

export default function Header() {

    const [show,handleShow] = useState(false);

    const [open,setOpen] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 60) {
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    const handleDrawer = () => {
        setOpen(true);
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
            <MenuHeaderIcon onClick={handleDrawer}> 
                    <MenuIcon style={{color:`${show} ? " white" : "primary" `}}/>
            </MenuHeaderIcon>
            <Drawer
                anchor='right'
                open={open}
                onClose={() => setOpen(false)}
                className={styles.drawer}
            >
                <DrawerNav>
                    <CloseIconButton onClick={() => setOpen(false)}/>
                    <Title>
                        <Link href='/'>
                            <a>
                                <span className="grey-color"> &lt;</span>
                                Sai Sumedh
                                <span className="grey-color">/&gt;</span>
                            </a>
                        </Link>
                    </Title>
                    <Items>
                        <List>
                            {[{text:"About",id:"#about"},{text:"Skills",id:"#skills"},{text:"Education",id:"#education"},{text:"Projects",id:"#projects"},{text:"Contact Me",id:"#contact"}].map((item) => (
                                <Link href={item.id} key={item.text}>
                                    <a>
                                        <DisplayItem button key={item.text} autoFocus="true">
                                            <ListItemText primary={item.text} />
                                        </DisplayItem>
                                    </a>
                                </Link>
                            ))}
                        </List>
                    </Items>
                </DrawerNav>
            </Drawer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    height: 40px;
    display: flex;
    padding: 6px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    align-items: center;
    justify-content: space-around;

    @media (min-width: 426px) and (max-width: 640px){
        height: 50px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width:425){
        height: 40px;
        display:flex;
        align-items: center;
        justify-content: space-around; 
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
    @media (min-width: 426px) and (max-width: 640px){
        display:flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 5px;
    }
    @media (min-width: 641px) and (max-width: 768px){
       font-size: 14px;
    }
`
const Item = styled.h4`
    font-weight: 600;
    cursor:pointer;
`
const MenuHeaderIcon = styled.div`
    display: none;
    @media (max-width: 425px){
        display: block;
        margin-top: 10px;
        cursor: pointer;
    }
`
const DrawerNav = styled.div`
    height: 100%;
    width: 200px;
    padding: 20px;
`

const Title=styled.h3`
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
const CloseIconButton=styled(CloseIcon)`
    display: flex;
    justify-content:flex-end;
`

const Items = styled.div`
    margin-top: 50px;
    align-items: center;
    justify-content:center;
`

const DisplayItem = styled(ListItem)`
      
`
