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
                            <EduDetails key={edu.id} title={edu.title} university={edu.university} year={edu.year} logo={edu.logo}/>
                        </Data>
                    ))}
                </Details>
        </EducationContainer>
    )
}

const EducationContainer = styled.section`
    align-items:center;
    padding: 30px;
    padding-bottom: 10px;
    background: #2f2945;
    color: white;
`
const Title = styled.h4`
    font-size: 24px;
    margin-top: 40px;
    text-transform: uppercase;
`
const Details = styled.div`
    padding: 20px;
    margin: 10px;
    display: flex;
    height: 200px;;
    align-items: center;
    justify-content: center;
    @media (max-width:425px){
        padding: 10px;
    }
`
const Data = styled.div`
    background: #329662;
    width: 80%;
    height: 100%;
    flex-wrap: wrap;
    margin-bottom: 20px;
    position: relative;
    border-radius: 20px;
    :hover{
        transform: scale(1.01);
        cursor:pointer;
    }

    @media (max-width:425px){
        padding: 5px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 340px;
    }
`