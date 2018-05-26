import React, {Component} from "react";
import FeatureItem from '../../components/FeatureItem';
import projects from '../../projects.json';

class FeaturedWorks extends Component {

    state = {
        projects: projects
    }
 
 
render() {
    return (
    <FeatureItem />
)}  
}

   


export default FeaturedWorks;