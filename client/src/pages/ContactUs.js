import React, { useState }  from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helpers';
import styled from "styled-components";
import '../utils/styles.css'



export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmailMessage, setEmailErrorMessage] = useState('');
  const [errorNameMessage, setNameErrorMessage] = useState('');
  const [errorMessageMessage, setMessageErrorMessage] = useState('');


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
<Container>
  <div className="container">
  <h3>Contact Us Form</h3>
    <form onSubmit={sendEmail}>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name.." required/>

      <label for="email">Email</label>
      <input  value={email} type="email" id="email" name="email" placeholder="Your email.." onChange={handleInputChange} onBlur={handleEmailMouseLeave} required />

      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" placeholder="Subject .." required/>

      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Write something.." style={{height:"100px"}} required></textarea>

      <input type="submit" value="Submit"/>
      {errorEmailMessage && (
          <div>
            <p className="error-text">{errorEmailMessage}</p>
        </div>
        )}

    
        {sent && (
          <div>
            <p className="error-text">{sent}</p>
          </div>
      )}
    </form>
  </div>
</Container>
    
  );
}


export const Container = styled.div`
  height: 80vh; 
  border-radius: 5px;
  padding: 20px;
`;