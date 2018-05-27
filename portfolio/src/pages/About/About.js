import React, {Component} from "react";
import FeatureItem from '../../components/FeatureItem';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import sidebar from '../../sidebar.json';

class About extends Component {

    state = {
        
        sidebar: sidebar,
    };

    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <FeatureItem />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            {this.state.sidebar.map(item => (
                                <Sidebar
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    pOne={item.pOne}
                                    pTwo={item.pTwo}
                                    pThree={item.pThree}
                                    pFour={item.pFour}
                                    pFive={item.pFive}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default About;