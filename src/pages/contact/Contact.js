import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <>
        <div className="contact">
            <div className="contact-title">CONTACT</div>

            <div className="form">
                <form>
                    <h3>Send Message to us!</h3>
                    <input type="text" placeholder="Name" className="input-contact"/>
                    <input type="email" placeholder="Email" className="input-contact"/>
                    <input type="text" placeholder="Subject" className="input-contact"/>
                    <textarea type="text" placeholder="Message" className="message"></textarea>

                    <button>Send Message</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact;