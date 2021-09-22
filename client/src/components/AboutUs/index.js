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
                            <GitHubButton>Adina 🐠</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/izaack89" target="_blank" rel="noreferrer">
                            <GitHubButton>Germán 🐬</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/vicvallejo" target="_blank" rel="noreferrer">
                            <GitHubButton>Victor 🐚</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/adina-hc" target="_blank" rel="noreferrer">
                            <GitHubButton>Jorge 🌴</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/jorgeatcabo" target="_blank" rel="noreferrer">
                            <GitHubButton>Adriano 🏄</GitHubButton>
                        </GitHubLink>
                        <GitHubLink  href="https://github.com/AdrianoArmen" target="_blank" rel="noreferrer">
                            <GitHubButton>Repository 🦀</GitHubButton>
                        </GitHubLink>
                    </GitHubList>
                </GitHubWrapper>
            </GitHubContainer>
        </AboutUsContainer>
    )
}

export default AboutUs
