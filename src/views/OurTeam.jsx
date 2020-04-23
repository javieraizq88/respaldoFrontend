import React from 'react'
import nutritionistImage from '../images/nutritionist.jpg';
import personalImage from '../images/personal.jpg';
import { Link } from 'react-router-dom';

const OurTeam = props => {
    
    return (
        <>
        <div className="container-fluid">
            <h1>Get the best team for you</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card bg-dark text-dark border-0 rounded-0px-0">
                    <h5 class="card-title">Dietitian</h5>
                        <img src={nutritionistImage} className="card-img" />
                        <Link className="card-link" to="/nutrionists" class="stretched-link">Meet our nutrionists</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card bg-dark text-dark border-0 rounded-0px-0">
                    <h5 class="card-title">Personal trainers</h5>
                        <img src={personalImage} className="card-img" />
                        <Link className="card-link" to="/personal-trainers" class="stretched-link">Meet our personal trainers</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default OurTeam;