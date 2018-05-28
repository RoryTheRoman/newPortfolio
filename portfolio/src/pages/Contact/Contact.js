import React, { Component } from "react";
import Form from '../../components/Form';

class Contact extends Component {

    render() {
        return (

            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <Form />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;