import React, {Component} from "react";
import FeatureItem from '../../components/FeatureItem';
import projects from '../../projects.json';

class FeaturedWorks extends Component {

    state = {
        projects: projects,
        project: {}
    }

    featuredWork = function (id) {
        return projects.get(projects + id)
    }

    componentDidMount() {
        this.featuredWork(this.props.match.params.id)
        .then(res => this.setState({ project: res.data }))
    }
 
 
render() {
    return (
    <FeatureItem />
)}  
}

   


export default FeaturedWorks;