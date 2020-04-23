import React from 'react';
import nutritionImage from '../images/nutrition.jpg';
import fitnessImage from '../images/fitness.jpg';
import jumbotronImage from '../images/jumbotron.jpg';
import person1Image from '../images/person1.jpg';
import person2Image from '../images/person2.jpg';
import person3Image from '../images/person3.jpg';
import { Link } from 'react-router-dom';



const Home = props => {

    return (
        <>
            <div className="container-fluid">

                {/* Jumbotron */}
                <div className="row">
                    <div className="col">
                        <div className="card bg-dark text-dark border-0 rounded-0px-0">
                            <img src={jumbotronImage} className="card-img" />
                            <div className="card-img-overlay">
                                <h1 className="card-title text-center display-2 text-white">Find your health team today</h1>
                                <h1 className="card-text text-center display-4 text-white">Get your own exclusive team with a nutritionist and personal trainer</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center">Two essential ingredients</h1>
                <div className="row">
                    {/* Cards */}
                    <div className="col-md-6">
                        <div className="card">
                            <img className="card-img-top card-img" src={nutritionImage} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Nutrition</h5>
                                <p className="card-text">A healthy lifestyle starts in the kitchen</p>
                                <Link to="/nutritional-education" className="btn btn-primary">Learn about nutrition</Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img className="card-img-top card-img" src={fitnessImage} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Physical training</h5>
                                <p className="card-text">Our body is designed to be in constant movement</p>
                                <Link to="/fitness-education" className="btn btn-primary">Learn about physical training</Link>
                            </div>

                        </div>
                    </div>
                </div>
                <h1 className="text-center">Real Cases</h1>
                <div className="row">
                    <div className="card-group">
                    <div className="card">
                            <img src={person2Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Anna</h5>
                                <p className="card-text">"Best app ever"</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={person1Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Ignacio</h5>
                                <p className="card-text">"Since I started using FitGood, I've never felt healthier"</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={person3Image} className="card-img-top rounded-circle team-cards" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Francisca</h5>
                                <p className="card-text">"A friend suggested this app and it completely changed my lifestyle"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    

        </>

    )
}

export default Home;