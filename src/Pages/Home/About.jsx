import React from 'react';
import './About.css'
import footerlogo from "../../assets/logobig.png"

class About extends React.Component{

    render(){
        return(
            <div className="about-container">
                <div className="inner">
                    <div className="aboutitems">
                        <div className="leftabout">
                            <h1>ABOUT</h1>
                            <img className="imgabout" src={footerlogo} height={50}/>
                        </div>
                    </div>
                    <div className="aboutitems">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus quo similique modi dolores laborum quod iure 
                    quae eligendi</p>
                    <p>
                    Etiam lobortis nunc tortor, convallis porttitor sapien hendrerit semper. Aenean rhoncus sapien a lorem blandit convallis. Nam quis risus sollicitudin nisl viverra sollicitudin eget et tellus. Morbi justo eros, tristique eu dui non, cursus vestibulum justo. Etiam fringilla a libero at cursus. Sed consectetur nulla gravida magna porta aliquet. Aenean ullamcorper, leo sed convallis tristique, magna felis ultrices orci, eget auctor eros ligula a turpis.
                    </p>
                    </div>
                </div>
            </div>
        )
           
        
    }
}

export default About;