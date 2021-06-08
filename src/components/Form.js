import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className="form">
            <h2>Send me your notions</h2>
            <form action="#" id="form__input">
                <input type="text" name="firstname" id="form__firstname" autoComplete required placeholder="Your firstname (required)"/>
                <input type="text" name="secondname" id="form__secondname" autoComplete required placeholder="Your secondname (required)"/>
                <input type="email" name="email" id="form__email" autoComplete required placeholder="Your email (required)"/>
                <input type="text" name="message" id="form__message" autoComplete required placeholder="Your message (required)"/>
                <div role="button" type="submit" className="calltoact__buttonForm"><div className="calltoact__innerForm">Send Out</div></div>
            </form>
        </div>
    )
}

export default Form
