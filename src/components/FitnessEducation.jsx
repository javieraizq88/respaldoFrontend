import React from 'react'
import fitnesseducationtImage from '../images/fitnesseducation.jpg';

const FitnessEducation = props => {

    return (
        <>
            <div className="container-fluid">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={fitnesseducationtImage} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">3 reasons a good exercise routine is ESSENTIAL</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Prevents diseases and infections. When you eat the full range of vitamins, minerals and other nutrients you improve your immune system and your healthy diet may even help prevent diseases like cancer, heart disease, diabetes, and stroke.</li>
                                    <li class="list-group-item">Helps you control your weight. Most people at some point want to lose weight or gain weight – eating a balanced diet helps you control your weight and maintain it over time. It is not feasible to be on a weight-loss diet forever – a balanced diet is the only way to healthily control your weight in the long term.</li>
                                    <li class="list-group-item">Improves your mental health. Getting the right mix of nutrients can help to ease symptoms of depression and anxiety – looking after yourself by eating well is essential as you take steps to good mental health.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
export default FitnessEducation;