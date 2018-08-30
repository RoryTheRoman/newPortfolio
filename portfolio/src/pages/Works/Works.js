import React, { Component } from 'react';
import ItemCard from '../../components/ItemCard';
import projects from '../../projects.json';
import Wrapper from '../../components/Wrapper';
// import { Link } from "react-router-dom";
import FeatureItem from "../../components/FeatureItem";

class Works extends Component {

    state = {

        projects: projects,
        project: [],
        matched: false,
        feature: null


    };

    clickedImage = id => {
        const clicked = this.state.projects.find(project => project.id === id);

        if (clicked) {
            this.setState.feature({
            id: this.id,
            name: this.name,
            image: this.image,
            github: this.github,
            deployed: this.deployed,
            description: this.description

         })}

    }


    // now the if statement will be "if not null/ if null, render this thing using the value of the feature.  feature now has the value of the index of the array so that is how we're grabbing the value in order to render the correct thing."
    render () {
        if(!this.clicked){
     return(
        <div className="works">
            <Wrapper>
            {this.state.projects.map((project, i) => (
                 <ItemCard
                    onClick={() => this.setState({feature: i})}
                     key={project._id}
                     id={project.id}
                     name={project.name}
                     image={project.image}
                     onClick={this.clickedImage}
                     click={this.clickedImage}
                 >

                    {/* <Link to={"/Works/" + project.id} /> */}
                 </ItemCard>

            ))}
            </Wrapper>
        </div>
        

)}else{
    return (
        <FeatureItem 
            key={this.feature._id}
            id={this.feature.id}
            name={this.feature.name}
            image={this.project.image}
            clickedImage={this.clickedImage}
            
        />


    )
}
}
}
export default Works;