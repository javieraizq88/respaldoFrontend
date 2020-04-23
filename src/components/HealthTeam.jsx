import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const HealthTeam = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            {
                store.currentUser === null ?
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    :
                    store.currentUser.user.planes_id.length == 0 ?
                        <div class="alert alert-warning" role="alert">
                            {store.error}
                                    You have no active plans yet :(
                                </div>
                        :

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 card">
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Contact my nutritionist</a>
                                    </div>
                                </div>
                                <div className="col-md-6 card">
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Contact my personal</a>
                                    </div>
                                </div>

                            </div>
                        </div>
            }

        </>
    )
}
export default HealthTeam;