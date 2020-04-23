import React from 'react';
import ContactCard from './ContactCard';

const PersonalTrainers = props => {

    return (
        <div className="container">
        <div>
         
            <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                <h1 className="text-center">Personal Trainers</h1>
                <ul className="list-group pull-down" id="contact-list">
                    <ContactCard  />
                    <ContactCard />
                    <ContactCard />
                    <ContactCard />
                </ul>
            </div>
        </div>
    </div>
    )
}
export default PersonalTrainers;