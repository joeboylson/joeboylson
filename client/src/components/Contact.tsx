import React from 'react';
import Animate from '../utils/Animate';
import Icon from '../utils/Icon';

import { doPost } from '../js/doPost';

import '../styles/pages.scss';

const Contact: React.FC = () => {

  const [loading, setLoading] = React.useState(false);
  const [hasSubmit, setHasSubmit] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()
  const [message, setMessage] = React.useState()

  const [nameInputClass, setNameInputClass] = React.useState('')
  const [emailInputClass, setEmailInputClass] = React.useState('')
  const [messageInputClass, setMessageInputClass] = React.useState('')

  const nameInputRef:any = React.useRef(null)
  const emailInputRef:any = React.useRef(null)
  const messageInputRef:any = React.useRef(null)

  const handleSubmit = (e:any) => {

    e.preventDefault();

    let nameIsValid = handleNameChange(name)
    let emailIsValid = handleEmailChange(email)
    let messageIsValid = handleMessageChange(message)

    if (!nameIsValid) {
      return nameInputRef.current.focus()
    }

    if (!emailIsValid) {
      return emailInputRef.current.focus()
    }

    if (!messageIsValid) {
      return messageInputRef.current.focus()
    }

    setLoading(true)
    setHasSubmit(true)

    doPost(
      '/contact', 
      {name, email, message},
      onSuccess, 
      onError  
    )

  }

  const handleNameChange = (name:string) => {
    if (!name || name.length < 1) {
      setNameInputClass('invalid')
      return false;
    }
    setName(name);
    setNameInputClass('valid');
    return true;
  }

  const handleEmailChange = (email:string) => {
    let emailPattern = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}')
    if (!email || email.length < 1 || !emailPattern.test(email)) {
      setEmailInputClass('invalid')
      return false;
    }
    setEmail(email);
    setEmailInputClass('valid')
    return true;
  }

  const handleMessageChange = (message:string) => {
    if (!message || message.length < 1) {
      setMessageInputClass('invalid')
      return false;
    }
    setMessage(message);
    setMessageInputClass('valid')
    return true;
  }

  const clearForm = () => {
    setName(null);
    setEmail(null);
    setMessage(null);
    setNameInputClass('');
    setEmailInputClass('');
    setMessageInputClass('');
  }

  const onSuccess = () => {
    setLoading(false)
    clearForm();
    setSuccess(true)
  }

  const onError = (errors:any) => {
    console.log(errors);
    setLoading(false)
  }

  React.useEffect(() => {
    if (name && name.length > 0 && nameInputRef.current) {
      nameInputRef.current.value = name;
    }

    if (email && email.length > 0 && emailInputRef.current) {
      emailInputRef.current.value = email;
    }

    if (message && message.length > 0 && messageInputRef.current) {
      messageInputRef.current.value = message;
    }
  })

  return (
    <div id={'contact'}>

      <div className={'grid'}>
        <div className={'col col-3'}>
          <h1>CONTACT ME</h1>
        </div>
        <div className={'col col-3'}>
          <h3>Let me know if you'd like to -</h3>
          <ul>
            <li>Hire me</li>
            <li>Collaborate on a web or photography project</li>
            <li>Ask me a question about something</li>
            <li>Go walk around and shoot photos</li>
            <li>Just get a coffee</li>
          </ul>
        </div>
      </div>

      { loading ? (
        // LOADING
        <Animate
          effect={'fade-up-in'} 
          animateOnLoad  
        >
          <div
            id={'loading-view'} 
            className={'grid contact-response'}
          >
            <div className={'col col-3'}>
              <h3>Sending your message . . .</h3>
              <div className={'lds-roller'}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        </Animate>
      ) : (

        <div>
        { hasSubmit ? (
          <div>
            { success ? (
              // SUCCESS
              <Animate
                effect={'fade-up-in'} 
                animateOnLoad  
                >
                <div
                  id={'success-view'} 
                  className={'grid contact-response'}
                >
                  <div className={'col col-3'}>
                    <h3>Success!</h3>
                  </div>
                  <div className={'col col-3'}>
                    <p>Thank you for your message.</p>
                    <p>I'll get back to you as soon as I can.</p>
                  </div>
                </div>
              </Animate>
            ) : (
              // ERROR
              <Animate
                effect={'fade-up-in'} 
                animateOnLoad  
                >
                <div
                  id={'error-view'} 
                  className={'grid contact-response'}
                >
                  <div className={'col col-3'}>
                    <h3>Oops!</h3>
                    <h3>It looks like something went wrong.</h3>
                  </div>

                  <div className={'col col-3'}>
                    <h3>You said:</h3>
                    <p>{message || '[ message was empty ]'}</p>
                  </div>
                </div>

                <div className={'grid'}>
                  <div 
                    className={'col col-1 action-button'}
                    onClick={() => setHasSubmit(false)}  
                  >
                    <p>Click here to try again</p>
                  </div>

                  <div 
                    className={'col col-1 action-button'}
                    onClick={() => window.location.href = `mailto:joeboylson@gmail.com?&body=${message || '[ message was empty ]'}`}  
                  >
                    <p>Or click here to open the message in your email</p>
                  </div>
                </div>
              </Animate>
            )}
          </div>
        ) : (
          <form
            id={'contact-form'}
            className={'grid'}
            action=""
            onSubmit={handleSubmit}  
            >

            <Animate
              className={'col col-2 form-control'}
              effect={'fade-up-in'}
              delay={0}
              animateOnLoad
            >
              <label htmlFor="name">Name: *</label>
              <input 
                onChange={(e) => handleNameChange(e.target.value)}
                className={ nameInputClass }
                ref={nameInputRef}
                type="text" 
                id="name" 
                name="name"
              />
            </Animate>

            <Animate
              className={'col col-2 form-control'}
              effect={'fade-up-in'}
              delay={0.1}
              animateOnLoad
            >
              <label htmlFor="email">Email: *</label>
              <input 
                onChange={(e) => handleEmailChange(e.target.value)}
                className={ emailInputClass }
                ref={emailInputRef}
                type="text" 
                id="email" 
                name="email"
              />
            </Animate>

            <Animate
              className={'col col-2 form-control'}
              effect={'fade-up-in'}
              delay={0.2}
              animateOnLoad
            >
              <label htmlFor="message">Message: *</label>
              <textarea 
                onChange={(e) => handleMessageChange(e.target.value)}
                className={messageInputClass}
                ref={messageInputRef}
                name="message" 
                id="message"
              ></textarea>
            </Animate>

            <Animate
              className={'col col-2 form-control'}
              effect={'fade-up-in'}
              delay={0.3}
              animateOnLoad
            >
              <button type="submit">SUBMIT</button>
            </Animate>
          </form>
        )}
        </div>
      )}
    </div>
  )
} 

export default Contact;