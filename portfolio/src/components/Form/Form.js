import React from "react";
import "./Form.css";

const Form = () => {

    return(
        <div className="contactMe">
            <h4 id="contactMe">Contact Me</h4>
        <form action="mailto:someone@example.com" method="post" enctype="text/plain">
            <div className="form-group">
                <label for="yourName">Your Name</label>
                <input type="text" class="form-control" id="yourName" placeholder="Your Name Here" />
            </div>
            <div className="form-group">
                <label for="yourEmail">Your Email</label>
                <input type="email" class="form-control" id="yourEmail" placeholder="name@example.com" />
            </div>
            <div class="form-group">
                <label for="emailTextArea">Write Me Something!</label>
                <textarea class="form-control" id="emailTextArea" rows="10" method="post" action="mailto"></textarea>
            </div>
            <button class="btn btn-primary" type="submit" value="send">Submit</button>
        </form>
        </div>
    )
}

export default Form;