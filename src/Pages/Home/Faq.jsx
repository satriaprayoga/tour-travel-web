import React from 'react';
import './Faq.css'
import footerlogo from "../../assets/logobig.png"

class Faq extends React.Component{

    render(){
        return(
            <div className="faq-container">
                <div className="inner">
                    <div className="faqitems">
                        <div className="leftfaq">
                            <h1>FAQ</h1>
                            <img className="imgfaq" src={footerlogo} height={50}/>
                        </div>
                    </div>
                    <div className="faqitems">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus quo similique modi dolores laborum quod iure 
                    quae eligendi</p>
                    <ol>
                        <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </li>
                    </ol>
                    </div>
                </div>
            </div>
        )
           
        
    }
}

export default Faq;