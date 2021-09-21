import React from 'react'
import { ContactUsButton, ContactUsOneCol, ContactUsTwoCols, ContactUsError,  ContactUsContainer, ContactUsInput, ContactUsForm, ContactUsResponseWrapper, ContactUsSuccess, ContactUsTwoColsWrapper, ContactUsOneColH3, ContactUsLabel, ContactUsInputArea } from './ContactUsElements'

const Contactus = ({sendEmail,handleInputChange,handleEmailMouseLeave,email,name,subject,message,errorMessage,errorEmailMessage,sent}) => {
    return (
            <ContactUsContainer>
                <ContactUsForm onSubmit={sendEmail}>  
                    <ContactUsOneCol>
                        <ContactUsOneColH3>Contact Us Form</ContactUsOneColH3>
                    </ContactUsOneCol>
                    <ContactUsTwoCols>

                        <ContactUsTwoColsWrapper>
                            <ContactUsLabel htmlFor="name">Name</ContactUsLabel>
                            <ContactUsInput value={name} type="text" id="name" name="name" placeholder="Your name.." onChange={handleInputChange}  required/>
                        </ContactUsTwoColsWrapper>

                        <ContactUsTwoColsWrapper>
                            <ContactUsLabel htmlFor="email">Email</ContactUsLabel>
                            <ContactUsInput  value={email} type="email" id="email" name="email" placeholder="Your email.." onChange={handleInputChange} onBlur={handleEmailMouseLeave} required />
                        </ContactUsTwoColsWrapper>
                        
                        <ContactUsTwoColsWrapper>
                            <ContactUsLabel htmlFor="subject">Subject</ContactUsLabel>
                            <ContactUsInput value={subject} type="text" id="subject" name="subject" placeholder="Subject .." onChange={handleInputChange}  required/>
                        </ContactUsTwoColsWrapper>
                        
                    </ContactUsTwoCols>

                    <ContactUsOneCol>

                        <ContactUsLabel htmlFor="message">Message</ContactUsLabel>
                        <ContactUsInputArea value={message} id="message" name="message" placeholder="Write something.." onChange={handleInputChange} required />
                        
                    </ContactUsOneCol>

                    <ContactUsOneCol>
                        <ContactUsButton type="submit">Submit</ContactUsButton>
                    </ContactUsOneCol>

                        {errorEmailMessage && (
                            <ContactUsResponseWrapper>
                                <ContactUsError>{errorEmailMessage}</ContactUsError>
                            </ContactUsResponseWrapper>
                        )}

                    
                        {sent && (
                            <ContactUsResponseWrapper>
                                <ContactUsSuccess>{sent}</ContactUsSuccess>
                            </ContactUsResponseWrapper>
                        )}
                    </ContactUsForm>
            </ContactUsContainer>
    )
}

export default Contactus
