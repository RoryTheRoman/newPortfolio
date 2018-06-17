import React, { Component } from 'react';
import ItemCard from '../../components/ItemCard';
import projects from '../../projects.json';
import Wrapper from '../../components/Wrapper';
import { Link } from "react-router-dom";

class Works extends Component {

    state = {

        projects: projects,
        project: []

    };
    featureItemHandler = () => {
        this.setState({
            project: [
                {
                    id: this.id,
                    name: this.name,
                    image: this.image,
                    github: this.github,
                    deployed: this.deployed,
                    description: this.description

                }    

            ]
        })

    }
 render() {
     return(
        <div className="works">
            <Wrapper>
            {this.state.projects.map(project => (
                 <ItemCard
                     key={project._id}
                     id={project.id}
                     name={project.name}
                     image={project.image}
                     onClick={this.featureItemHandler}
                     click={this.featureItemHandler}
                 >
                    <Link to={"/Works/" + project.id} />
                 </ItemCard>

            ))}
            </Wrapper>
        </div>
        

)
}
}
export default Works;