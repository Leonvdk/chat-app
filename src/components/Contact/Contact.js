import React from 'react';
import './Contact.css';
import PropTypes from "prop-types";

class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isContactOnline: true
        }
    }

    contactListHandler = () => {
        this.setState({isContactOnline: !this.state.isContactOnline})
    }

    render (){
        return(
            <div className = "contact-container">
                <div className = "Contact">
                        <div className = {this.state.isContactOnline? "shadow-online": "shadow-offline"}>
                            <img src = {this.props.avatar} alt = "avatar" className= "avatar"/>
                            <div className = "info">
                                <h3 className = "name">{this.props.name}</h3>
                                <div className = "status">
                                    <div className= {this.state.isContactOnline? "status-online": "status-offline"}></div>
                                    <span className = {"status-text"}>{this.state.isContactOnline? "online": "offline"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type= "button" className = "button" onClick = {this.contactListHandler}>{this.state.isContactOnline? "Go offline": "Go Online"}</button>
            </div>
            )}
}        

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.node.isRequired,
};

export default Contact;

// style = {online? " ":{boxShadow: '2px 3px 2px 2px #d58181'}