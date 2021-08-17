import React, { useState }  from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helpers';
import styled,{ createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
`
;

const multipleStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 10px 0;
padding: 20px;
box-sizing: border-box;
`;

const StyledTemplateContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  padding: 0 20px;
  `;

const StyledTemplate = styled.form`
  width: 100%;
  max-width: 1100px;
  padding: 30px;
  background-color: #fff;
  border-radius: 55px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const StyledUserInput = styled.input`
display: block;
width: 100%;
${multipleStyles};
`;

const StyledButton = styled.button`
display: inline;
width: 50%;
padding: 12px 0;
font-family: inherit;
font-size: 14px;
font-weight: 700;
color: #fff;
background-color: #a2ccb6;
border: 0;
border-radius: 35px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
}
`;

const StyledDivOneCol = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
  `;

  const StyledDivTwoCols = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 1em;
  `;


const StyledError = styled.div`
color: red;
font-weight: 850;
margin: 0 0 40px 0;
`;




export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmailMessage, setEmailErrorMessage] = useState('');


  function sendEmail(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    
    emailjs.sendForm('service_oi47n4o', 'template_mdc8b8t', e.target, 'user_NgYLIoQ6mMPwOUxWrcbic')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setEmail("")
      setSent("Message sent...")
  }


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === 'email') {
      setEmail(inputValue);
      setSent("")
    } else if (inputType === 'name') {
      setName(inputValue);
    } 
    else if (inputType === 'message') {
      setMessage(inputValue);
    } 
  };

  const handleEmailMouseLeave = (e) => {

    if (!validateEmail(email)) {
      setEmailErrorMessage('Email is invalid');
      return;
    }
    
    setEmailErrorMessage('')
  };
  return (
    <>
<GlobalStyle />
<StyledTemplateContainer>
<StyledTemplate onSubmit={sendEmail}>  
<StyledDivOneCol><h3>Contact Us Form</h3></StyledDivOneCol>
      <StyledDivTwoCols>

        <div>
          <label for="name">Name</label>
          <StyledUserInput type="text" id="name" name="name" placeholder="Your name.." required/>
        </div>

        <div>
          <label for="email">Email</label>
          <StyledUserInput  value={email} type="email" id="email" name="email" placeholder="Your email.." onChange={handleInputChange} onBlur={handleEmailMouseLeave} required />
        </div>
      
        <div>
          <label for="subject">Subject</label>
          <StyledUserInput type="text" id="subject" name="subject" placeholder="Subject .." required/>
        </div>
        
      </StyledDivTwoCols>

      <StyledDivOneCol>

         <label for="message">Message</label>
         <StyledUserInput id="message" name="message" placeholder="Write something.." style={{height:"100px"}} required />
      
      </StyledDivOneCol>

      <StyledDivOneCol>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledDivOneCol>

      {errorEmailMessage && (
           <StyledError>
            <p className="error-text">{errorEmailMessage}</p>
            </StyledError>
        )}

    
        {sent && (
          <div>
            <p className="error-text">{sent}</p>
          </div>
      )}
    </StyledTemplate>
    </StyledTemplateContainer>
    </>
  );
}


export const Container = styled.div`
  height: 80vh; 
  border-radius: 5px;
  padding: 20px;
`;