import React, {Component} from "react";
import FeatureItem from '../../components/FeatureItem';
// import projects from '../../projects.json';
// import axios from 'axios';

class FeaturedWorks extends Component {

    state = {
        // projects: projects,
        project: {}
    }

    // featuredWork = function (id) {
    //     return axios.get('/Works/' + id)
    // }

    // componentDidMount() {
    //     this.featuredWork(this.props.match.params.id)
    //     .then(res => this.setState({ project: res.data }))
    //     .catch(err => console.log(err));
    // }
 
 
render() {
    return (
    <FeatureItem 
        id={this.state.project.id}
        image={this.state.project.image}
    />
)}  
}

   


export default FeaturedWorks;