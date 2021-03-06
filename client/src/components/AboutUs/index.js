import React from 'react'
import { AboutUsContainer, GitHubButton, GitHubContainer, GitHubLink, GitHubList, GitHubTitle, GitHubWrapper } from './AboutUsElements'

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <GitHubContainer>
                <GitHubWrapper>
                    <GitHubTitle>Development Team</GitHubTitle>
                    <GitHubList>
                        <GitHubLink  href="https://github.com/adina-hc" target="_blank" rel="noreferrer">
                            <GitHubButton>Adina π </GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/izaack89" target="_blank" rel="noreferrer">
                            <GitHubButton>GermΓ‘n π¬</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/vicvallejo" target="_blank" rel="noreferrer">
                            <GitHubButton>Victor π</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/jorgeatcabo" target="_blank" rel="noreferrer">
                            <GitHubButton>Jorge π΄</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/AdrianoArmen" target="_blank" rel="noreferrer">
                            <GitHubButton>Adriano π</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/adina-hc/pata-de-perro" target="_blank" rel="noreferrer">
                            <GitHubButton>Repository π¦</GitHubButton>
                        </GitHubLink>
                    </GitHubList>
                </GitHubWrapper>
            </GitHubContainer>
        </AboutUsContainer>
    )
}

export default AboutUs
