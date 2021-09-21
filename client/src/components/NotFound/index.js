import React from 'react'
import Sunset from '../GlobalElements/Sunset'
import { NotFoundContainer, NotFoundH1, NotFoundWrap } from './NotFoundElements'

const NotFoundSection = () => {
    return (
        <NotFoundContainer>
            <NotFoundWrap>    
                <NotFoundH1>
                    PAGE NOT FOUND
                </NotFoundH1>
            </NotFoundWrap>
            <Sunset/>
        </NotFoundContainer>
    )
}

export default NotFoundSection
