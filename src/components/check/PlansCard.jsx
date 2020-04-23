import React, { useContext } from 'react'
import { Context } from '../store/appContext';

const PlansCard = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div class="card col-sm-5 ml-5 mt-3">
                <div class="card-header">
                    <h5>Plan 1</h5></div>
                <div class="card-body ">
                    <h5 class="card-title text-primary">Profesionales</h5>
                    <small>id : {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.id}</small>
                    <p class="card-text">Nutricionista =  {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_name}</p>
                    <p class="card-text">Personal Trainer =  {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_name}</p>
                    <h5 class="card-title text-dark">Objetivo</h5>
                    <p class="card-text"> {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.objective}</p>
                    <h5 class="card-title text-danger">Fecha</h5>
                    <p class="card-text"> {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.created}</p>
                    <a href='#' type="button" class="btn btn-primary ml-4 mr-5">Pauta alimentaria</a>
                    <a href='#' type="button" class="btn btn-warning">Pauta de ejercicios</a>
                </div>
            </div>
        </>
    )
}

export default PlansCard;