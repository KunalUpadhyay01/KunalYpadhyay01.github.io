import React from 'react';
import "../css/contact.css"
const Contact = () => {
    return (
        <div className='contactContainer'>
            <form className='form'>
                <p className='paragraph'>Username <input type='text' name='Name' required className='userName' /> </p>
                <p className='paragraph'>E-mail  <input type='email' name='Email' required className='email' /> </p>
                <p className='paragraph'>Message <textarea type='text' name='Message' required className='message' /></p>
            </form>
        </div>
    );
}

export default Contact;
