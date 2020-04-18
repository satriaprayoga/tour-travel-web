import React from 'react';
import './Testimony.css';
import elsa from '../../elsa.png'

class Testimony extends React.Component{

    render(){
        return(
            <div className="testimony">
                <div className="mx-auto text-center">
                    <div className="testimony-header text-center">
                        <h1>Our Loyal Customers Said</h1>
                    </div>
                </div>
                <div className="container">
                <div class="d-flex justify-content-center">
                    <div class="p-2">
                        <img src={elsa}/>
                    </div>
                    <div class="p-2">
                        <h4>Elsa</h4>
                        <h4>Traveler</h4><br/>
                        <h4>"Thanks to you, we had wonderful experience in baluran.. "</h4>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Testimony;