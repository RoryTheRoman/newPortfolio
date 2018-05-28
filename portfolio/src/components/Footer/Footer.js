import React from "react";
import "./Footer.css";


const Footer = () => {

    return (
        <footer className="footer">
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-lg-6">
                        <a href="https://github.com/RoryTheRoman" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/github.png" alt="github" className="socialMedia" />
                        </a>
                        <a href="https://www.linkedin.com/in/michael-mcdaniel-17b0b3aa/" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/linkedin.png" alt="linkedin" className="socialMedia" />
                        </a>
                        <a href="https://plus.google.com/u/0/105620729477638661676" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/googleplus.png" alt="googleplus" className="socialMedia" />
                        </a>
                        <a href="https://stackoverflow.com/story/rorytherroman" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/images/stackoverflow.png" alt="stackoverflow" className="socialMedia" />
                        </a>
                    </div>
                    <div className="col-lg-6 ml-auto">
                        <h6 className="copyright">© Michael McDaniel 2018</h6>
                    </div>
                </div>
            {/* </div> */}
        </footer>


    )
}

export default Footer;