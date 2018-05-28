import React from "react";
import "./Contact.css";

const Contact = () => {

    return(

        <form action="mailto:someone@example.com" method="post" enctype="text/plain">
            <h4>Contact Me</h4>
            <div className="form-group">
                <label for="yourName">Your Name</label>
                <input type="text" class="form-control" id="yourName" placeholder="Your Name Here" />
            </div>
            <div className="form-group">
                <label for="yourEmail">Your Email</label>
                <input type="email" class="form-control" id="yourEmail" placeholder="name@example.com" />
            </div>
            <div class="form-group">
                <label for="emailTextArea">Example textarea</label>
                <textarea class="form-control" id="emailTextArea" rows="3"></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Contact;