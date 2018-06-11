import React, { Component } from 'react';
import ItemCard from '../../components/ItemCard';
import projects from '../../projects.json';
import Wrapper from '../../components/Wrapper';
import { Link } from "react-router-dom";

class Works extends Component {

    state = {

        projects: projects,

    };

    // imageClick = id => {
    //     const clicked = this.state.projects.find(project => project.id === id);
        
        
    // }   
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