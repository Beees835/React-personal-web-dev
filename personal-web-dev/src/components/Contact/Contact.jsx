import React from 'react';
import classes from './Contact.module.css';

function Contact() {
    return (
        <section id="contact">
            <h1>Contact Me</h1>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
