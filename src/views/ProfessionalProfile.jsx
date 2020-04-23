import React from 'react';

const ProfessionalProfile = props => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div class="col-md-6 card">
                        <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Name</h5>
                                <p class="card-text">Description</p>
                            </div>
                    </div>
                        <form>
                            <div className="form-group col-md-6">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Make changes</button>
                        </form>
                    </div>
                </div>
        </>
    )
}
export default ProfessionalProfile;