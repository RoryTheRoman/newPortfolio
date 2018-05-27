import React from "react";
import "./Sidebar.css";

const Sidebar = props => {

    return(
        <div className="sidebar">
            <div className="card sidebar-card">
                <div className="card-body">
                    <h5 className="card-title">Michael McDaniel</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Full Stack Web Developer</h6>
                    <p className="text-left">I'm a Chicago based freelance web developer, passionate about designing and building.  I love the satisfaction that comes with contributing to a project.</p>
                    <p className="text-left">My entry into development came in the late 1980s.  When other kids my age were at summer camp, I was at computer camp.  Working on a TI-99, I learned to program an animated smiley face.  For a nine-year-old, this was magic!</p>
                    <p className="text-left">Unfortunately, for many years after that I didn't do much programming.  I messed around with HTML templates on different blog sites (shout out to diaryland.com!) but career-wise my path completely diverged.  I graduated in 2003 from Edgewood College with a BS in Psychology and a Minor in Art.  I worked in the public sector for many years, and ended up at a third-party credit reporting agency in Chicago - where I work currently.</p>
                    <p className="text-left">When bootcamps came on the scene, I was immediately interested.  Unable to convince myself that I should quit my job and attend a full time bootcamp, I eventually found a part-time Full Stack program at Northwestern University that allowed me to work and learn.  The program focused on the MERN stack, which built on the HTML, CSS and Javascript fundamentals we were taught.  I graduated May 2018, and I am looking to transition into a full time Web Developer position.</p>
                    <p className="text-left">Finding web development has been the greatest gift.  It is creativity with structure, and allows me to problem solve again.  Above else, I love the fact that it is a career in which you have to continue to learn and grow.  A developer's education never stagnates.</p>
                </div>
            </div>

        </div>

    )



}

export default Sidebar;