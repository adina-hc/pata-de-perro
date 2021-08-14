import React, { useState } from 'react';
import { TextInput, Field, Label,Row,Col,Card } from 'tailwind-react-ui'
import { validateEmail,validateName,validateMessage } from '../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmailMessage, setEmailErrorMessage] = useState('');
  const [errorNameMessage, setNameErrorMessage] = useState('');
  const [errorMessageMessage, setMessageErrorMessage] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } 
    else if (inputType === 'message') {
      setMessage(inputValue);
    } 
  };

  function submitHandler(event) {
    event.preventDefault();
    handleShow()
  }
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
   
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setErrorMessage('')
  };

  const handleEmailMouseLeave = (e) => {

    if (!validateEmail(email)) {
      setEmailErrorMessage('Email is invalid');
      return;
    }
    
    setEmailErrorMessage('')
  };

  const handleNameMouseLeave = (e) => {

    if (!validateName(name)) {
      setNameErrorMessage('Name is invalid');
      return;
    }
    setNameErrorMessage('')
  };

  const handleMessageMouseLeave = (e) => {

    if (!validateMessage(message)) {
      setMessageErrorMessage('Message is invalid');
      return;
    }
    setMessageErrorMessage('')
  };

  return (
    <div>

<Row gutter>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
  <Field>
  <Label>Name</Label>
  <TextInput name="name" />
</Field>
  </Col>
  </Row>


  <Row gutter>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey-light" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey-light" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey" p={4} h={12} rounded="none" />
  </Col>
  <Col w={{ def: 'full', sm: '1/2', md: '1/3', lg: '1/4', xl: '1/6' }}>
    <Card bg="grey-light" p={4} h={12} rounded="none" />
  </Col>
</Row>
      {errorEmailMessage && (
        <div>
          <p className="error-text">{errorEmailMessage}</p>
        </div>
      )}

      {errorNameMessage && (
        <div>
          <p className="error-text">{errorNameMessage}</p>
        </div>
      )}

      {errorMessageMessage && (
        <div>
          <p className="error-text">{errorMessageMessage}</p>
        </div>
      )}
</div>
      // <Modal show={show} onHide={handleClose}>
      //   <Modal.Header closeButton>
      //   </Modal.Header>
      //   <Modal.Body>I will be in touch with you very soon!</Modal.Body>
      //   <Modal.Footer>
      //     <Button variant="secondary" onClick={handleClose}>
      //       Close
      //     </Button>
      //   </Modal.Footer>
      // </Modal>
  );

  
}
export default Contact;
