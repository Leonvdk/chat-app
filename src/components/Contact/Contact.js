import React from 'react';
import './Contact.css';



let online = true;
let avatar = "https://randomuser.me/api/portraits/men/81.jpg";
let name = "Hank Moody";



function Contact(){

    return(
            <div className = "Contact">
                <div className = {online? "shadow-online": "shadow-offline"}>
                    <img src = {avatar} alt = "avatar" className= "avatar"/>
                    <div className = "info">
                        <h3 className = "name">{name}</h3>
                        <div className = "status">
                            <div className= {online? "status-online": "status-offline"}></div>
                            <span className = {"status-text"}>{online? "online": "offline"}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
    
}

export default Contact;

// style = {online? " ":{boxShadow: '2px 3px 2px 2px #d58181'}