import React, {Component} from "react";
import FeatureItem from '../../components/FeatureItem';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <FeatureItem />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default About;