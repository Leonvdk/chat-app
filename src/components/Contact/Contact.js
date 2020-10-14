import React from 'react';
import './Contact.css';



let online = false;
let avatar = "https://randomuser.me/api/portraits/men/81.jpg";
let name = "Hank Moody";

function Contact(props){
    return(
            <div className = "Contact">
                <div className = {props.online? "shadow-online": "shadow-offline"}>
                    <img src = {props.avatar} alt = "avatar" className= "avatar"/>
                    <div className = "info">
                        <h3 className = "name">{props.name}</h3>
                        <div className = "status">
                            <div className= {props.online? "status-online": "status-offline"}></div>
                            <span className = {"status-text"}>{props.online? "online": "offline"}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Contact;

// style = {online? " ":{boxShadow: '2px 3px 2px 2px #d58181'}