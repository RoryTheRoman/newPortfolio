import React, { Component } from 'react';
import ItemCard from '../../components/ItemCard';
import projects from '../../projects.json';

class Works extends Component {

    state = {

        projects: projects,

    };
 render() {
     return(
        <div className="works">

            {this.state.projects.map(project => (
                 <ItemCard
                     key={project.id}
                     name={project.name}
                     image={project.image}
                 />

            ))};
        
        </div>
        

);
}
}
export default Works;