import  { useState } from "react";
// export default Contact;
const defaultValues = {
    name: '',
    email: '',
    message: ''
}

import React,{Fragment} from 'react'
import '../Styles/contact.css'

const Contact = () => {
    const [formField, setformFields ] = useState(defaultValues);
    const {name, email, message} = formField;

    const handleChange = (event) => {

        const {name, value} = event.target

        setformFields({ ...formField, [name]: value})

    }
  return (
    <Fragment>
    <section className='contact'>
     <div className='contact-heading'>
        <h2>Contact Us</h2>
     </div>

     <div className='container'>
        <div className='row1'>

            <div className='column'>
                <div className='contact-widget'>
                    <div className='contact-widget-item'>
                        <div className='icon'>
                        <i class="fa-solid fa-location-dot"></i>
                        </div>

                        <div className='text'>
                            <h5>Address</h5>
                            <p>Bali, Douala</p>
                        </div>
                    </div>
                </div>

                <div className='contact-widget'>
                    <div className='contact-widget-item'>
                        <div className='icon'>
                        <i class="fa-solid fa-phone"></i>
                        </div>

                        <div className='text'>
                            <h5>Contact Us</h5>
                            <p>+237 677876540</p>
                        </div>
                    </div>
                </div>

                <div className='contact-widget'>
                    <div className='contact-widget-item'>
                        <div className='icon'>
                        <i class="fa-regular fa-envelope"></i>
                        </div>

                        <div className='text'>
                            <h5>Mail</h5>
                            <p>chopoklok@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="column">
                <div className="contact-form">
                    <form onSubmit={() => {}}>
                        <input type='text' placeholder='Name' name='name' onChange={handleChange} value={name} required/>
                        <input type='email' placeholder='Email' name='email' onChange={handleChange}  value={email} required/>
                        <textarea placeholder='Comment' name='message' onChange={handleChange}  value={message} required></textarea>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='map-column'>
                <div className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.54605115397!2d9.671763356449453!3d4.036071988407635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128be2e1fe6d%3A0x92daa1444781c48b!2sDouala!5e0!3m2!1sen!2scm!4v1675085264464!5m2!1sen!2scm" 
                width="600" 
                height="450" 
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
            


        </div>
     </div>
    </section>

    </Fragment>
  ) 
}

export default Contact;