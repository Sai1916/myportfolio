import styled from 'styled-components'
import Project from './Project'
import {projects} from './projectData'

function Projects() {

    // const ParticlesBg = dynamic(
    //     () => import('particles-bg'),
    //     { ssr: false }
    //   )

    return (
        <ProjectContainer id="projects">
            <Title>
                Projects
            </Title>
            <ProjectsView>
                {projects.map((project) => (
                    <InnerContainer key={project.id}>
                        <Project key={project.id} title={project.title} description={project.description} image={project.image} repo={project.repoLink} demo={project.demoLink} />
                    </InnerContainer>
                ))}
            </ProjectsView>
            {/* <ParticlesBg type="square" size={3} num={70} bg={true} /> */}
        </ProjectContainer>
    )
}

export default Projects

const ProjectContainer = styled.section`
    padding: 30px;
    background-color: #2f2945;
    color: white;
`
const ProjectsView= styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    place-items: center;
    column-gap: 1rem;
    row-gap: 1.5rem;
    @media(max-width: 425px){
        display: flex;
        flex-direction: column;
    }
`
const InnerContainer = styled.div`
    padding: 20px;
    margin: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title= styled.h4`
    font-size: 24px;
    margin-top: 40px;
    text-transform: uppercase;
`
