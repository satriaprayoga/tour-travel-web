import React from 'react';

const Testimonial = (props) => {
        return (
            <div>
                <p>{props.data.title}</p>
                <img src={props.data.url} className="tuser"/>
                <h3 className="tnama">{props.data.name}</h3>
            </div>
        );
}

export default Testimonial;