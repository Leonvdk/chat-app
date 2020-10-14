import React from 'react';
import './ContactList.css'
import Contact from '../Contact/Contact'

const users = [
    {online: true,
    avatar: "https://randomuser.me/api/portraits/men/81.jpg",
    name: "Hank Moody",
    email: "hankyM@mail.com",
    address: "Travessa da Pombal 1"},
    
    {online: false,
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
    name: "Joanne D'Arc",
    email: "viveLaFranceM@mail.com",
    address: "Nolenslaan 34"},
    
    {online: false,
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    name: "Marcel El-Metwally",
    email: "wahed@mail.com",
    address: "Wethouder D.M. Plompstraat 78"},
    ]

class ContactList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isContactListDisplayed: false
        }
    }

    contactListHandler = () => {
        this.setState({isContactListDisplayed: !this.state.isContactListDisplayed })
    }

    render (){
        return(
            <div className = "contact-list">    
                <button type = "button" id = "contactButton" className = "button" onClick ={this.contactListHandler}>{this.state.isContactListDisplayed ? "Hide contactlist": "Show contactlist"}</button>
                {this.state.isContactListDisplayed && (
                    users.map( (user, index) => (
                        <Contact
                        key = {index}
                        avatar = {user.avatar}
                        name = {user.name}
                        email = {user.email}
                        address = {user.address}
                        />
                ))
                )}
            </div>
        )
    }
}

export default ContactList;
