import React from 'react'
import { PawBorder, PawContainer, PawIcon, PawLink, PawWrap } from './PawElements'

const PawSection = () => {
    return (
        <PawContainer>
            <PawWrap>
                <PawBorder>
                    <PawLink to='/aboutUs'>
                        <PawIcon src="https://image.flaticon.com/icons/png/512/3464/3464028.png" alt="Dog Paw Icon"/>
                    </PawLink>            
                </PawBorder>
            </PawWrap>
        </PawContainer>
    )
}

export default PawSection
