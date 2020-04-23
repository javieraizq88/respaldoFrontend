import React from 'react';

const HealthPlans = props => {
    return (
        <>
        <div className="container">
            <div className="row">
        <div className="col-md-12 card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Health Plan</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="col-md-6">
        <button type="button" class="btn btn-outline-dark">See all plans</button>
        <button type="button" class="btn btn-outline-dark">Request new plan</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default HealthPlans;