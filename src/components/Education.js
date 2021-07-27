import React from 'react'
import styled from 'styled-components'
import EduDetails from './EduDetails'
import {data} from './data'

export default function Education() {
    return (
        <EducationContainer id="education">
                <Title>
                    Education
                </Title>
                <Details>
                    {data.map((edu) => (
                        <Data key={edu.id}>
                            <EduDetails key={edu.id} title={edu.title} branch={edu.branch} university={edu.university} year={edu.year} logo={edu.logo}/>
                        </Data>
                    ))}
                </Details>
        </EducationContainer>
    )
}

const EducationContainer = styled.section`
    // align-items:center;
    padding: 30px;
    background: #2f2945;
    color: white;
    display: flex;
    flex-direction: column;
`
const Title = styled.h4`
    font-size: 24px;
    margin-top: 40px;
    text-transform: uppercase;
    margin-bottom: 60px;
`
const Details = styled.div`
    padding: 20px;
    background: rgba(42, 191, 250,0.14);
    margin: 10px;
    display: flex;
    height: 240px;
    border-radius: 20px;
    color: white;
    align-items: center;
    justify-content: center;
    @media (max-width:425px){
        padding: 10px;
        height: 200px;
    }
`
const Data = styled.div`
    backdrop-filter: blur(10px);
    width: 80%;
    height: 100%;
    border-radius:20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    :hover{
        transform: scale(1.01);
        cursor:pointer;
    }
    @media (max-width:425px){
        padding: 5px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
`
