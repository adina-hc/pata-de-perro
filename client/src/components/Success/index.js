import React from 'react'
import { SuccessContainer, SuccessH1, SuccessH2, SuccessWrap } from './SuccessSection'

const SuccessSection = () => {
    return (
        <SuccessContainer>
            <SuccessWrap>
                <SuccessH1>Success!</SuccessH1>
                <SuccessH2>Thank you for booking your activity!</SuccessH2>
                <SuccessH2>You will now be redirected to the home page</SuccessH2>
            </SuccessWrap>
        </SuccessContainer>
    )
}

export default SuccessSection
