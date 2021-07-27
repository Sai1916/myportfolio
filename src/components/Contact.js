import styled from 'styled-components'
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Contact() {  
    return (
        <Container id="contact">
            <Title>
                Contact
            </Title>
            <Content>
                <Head>
                    Reach out to <Mail>saisumedh16@gmail.com</Mail> or call <Call>+917032444893</Call>
                </Head>
                <Text>Follow my social media accounts</Text>
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
            </Content>
        </Container>
    )
}

const Container = styled.section`
    padding: 30px;
    background-color: #2f2945;
    color: white;
`
const Title= styled.h4`
    font-size: 24px;
    margin-top: 40px;
    text-transform: uppercase;
`

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (max-width:425px){
        padding: 5px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`

const Head = styled.p`
    font-size: 22px;
    display: flex;
    align-items: center;
    @media (max-width:425px){
       font-size: 16px;
       display: flex;
       flex-direction: column;
       word-wrap: break-word;
    }
`
const Mail = styled.p`
    margin: 0px 7px;
    font-style: italic;
    font-size: 24px;
    font-weight: 600;
    color: #b8998c;
    @media (max-width:425px){
        font-size: 18px;
    }
`
const Call = styled.p`
    margin: 0px 7px;
    font-family: cursive;
    font-weight: 600;
    color: #b8998c;
`
const Text = styled.p`
    font-size: 20px;
    @media (max-width:425px){
        font-size: 18px;
    }
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

export default Contact
