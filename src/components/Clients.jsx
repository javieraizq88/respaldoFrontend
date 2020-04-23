import React from 'react';

const Clients = props => {
    return (
        <>
        <div className="container">
            <div className="row">
            <div className="col-md-12 card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Client name #1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Contact</a>
                            </div>
                    </div>
                    <div className="col-md-12 card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Client name #2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Contact</a>
                            </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Clients;