import React, { useState }  from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helpers';
import Contactus from '../components/ContactUs';




export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
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
    } else if (inputType === 'subject') {
      setSubject(inputValue);
    } else if (inputType === 'message') {
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
    <Contactus
    sendEmail={sendEmail}
    handleInputChange={handleInputChange}
    handleEmailMouseLeave={handleEmailMouseLeave}
    email={email}
    name={name}
    subject={subject}
    message={message}
    errorMessage={errorMessage}
    errorEmailMessage={errorEmailMessage}
    sent={sent}    
    /> 
  );
}
