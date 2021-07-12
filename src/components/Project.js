import styled from 'styled-components'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function Project({title,description,image,repo,demo}) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Image className={styles.projectImage} objectFit="contain" width="270%" height="180%" src={image} alt="image"/>mage"/>
            <Description>
                {description}
            </Description>
            <Links>
                <LinkButton>
                    <Link href={repo}>
                        <a target="_blank" className={styles.linkButtons}>
                            Source Code
                        </a>
                    </Link> 
                </LinkButton>
                <LinkButton>
                    <Link href={demo}>
                        <a target="_blank" className={styles.linkButtons}>
                            Live Demo
                        </a>
                    </Link> 
                </LinkButton>
            </Links>
        </Container>
    )
}

export default Project

const Container = styled.div`
    height: 460px;
    width: 320px;
    background: #493b66;
    color: white;
    border-radius: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-family: sans-serif;
    align-items: center;
    justify-content: space-around;

    &:hover{
        transform: scale(1.01);
        cursor: pointer;
        box-shadow: 1px 1px 2px 1px lightgray;
        transition-timing-function: ease-in;
        transition: all 0.5s;

    }
`
const Title= styled.p`
    margin: 10px auto;
    font-size: 22px;
    font-weight: bold;
`
const Description= styled.p`
    font-size: 15px;
    padding: 10px;
`
const Links= styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 10px;
`
const LinkButton= styled.div`
`
