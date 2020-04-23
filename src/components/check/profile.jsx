import React, { useEffect, useContext } from 'react'
import sinimagenImage from '../images/sinImagen.jpg';
import ContactCard from '../components/contactcard'
import { Context } from '../store/appContext'

const Profile = props => {
    const { store, actions } = useContext(Context)
    console.log(props)
    return (
        <>
            {
                !!store.currentUser ?
                    <div className="container mt-3">
                        <div className="row">
                            <div class="col-md-12 card">
                                <div class="row">
                                    <div class="col">
                                        <img src={sinimagenImage} class="img-top ml-4 mt-3" alt="avatar" width="150" height="150" />
                                    </div>
                                    <div class="col">
                                        <br />
                                        <br />
                                        <h1 class="card-title ">Hola {store.currentUser.user.name}!</h1>
                                    </div>
                                    <div class="col-3">
                                        <img src="https://picsum.photos/200/300" class="ml-4 mt-3" alt="..." width="150" height="150" />
                                    </div>
                                </div>
                                <br />
                                <br />

                                <div class="card">
                                    <div class="card-header">
                                        <h5>Tu plan actual es el siguiente</h5></div>
                                    <div class="card-body ">
                                        <div class="row">
                                            <div class="col-3"></div>
                                            <div class="col-3">
                                                <h5 class="card-text">Fecha inicio: </h5>
                                            </div>
                                            <div class="col-4">
                                                {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.created}
                                            </div>
                                        </div>
                                        <br />

                                        <div class="row">
                                            <div class="col-3"></div>
                                            <div class="col-3">
                                                <h5 class="card-text">El Objetivo es: </h5>
                                            </div>
                                            <div class="col-4">
                                                {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.objective}
                                            </div>
                                        </div>
                                        <br />
                                        <div class="row">
                                            <div class="col-3"></div>
                                            <div class="col-3">
                                                <h5 class="card-text">Tu Nutricionista es: </h5>
                                            </div>
                                            <div class="col-4">
                                                {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.nutritionist_name}
                                            </div>
                                        </div>
                                        <br />

                                        <div class="row">
                                            <div class="col-3"></div>
                                            <div class="col-3">
                                                <h5 class="card-text">Tu Personal Trainer es: </h5>
                                            </div>
                                            <div class="col-4">
                                                {store.currentUser.user.planes_id[store.currentUser.user.planes_id.length - 1].all_plans.trainer_name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />



                                <div class="row">
                                    <div class="col-3">
                                        <h5 class="card-text ml-2 mt-2">Planes anteriores </h5>
                                        <a href='/profile/client/plans' type="button" class="btn btn-warning">Historial</a>
                                    </div>
                                    <div class="col-3">
                                        <h5 class="card-text mt-2">Contactar a mi nutricionista </h5>
                                        <a href='#' type="button" class="btn btn-primary">Contactar</a>
                                    </div>
                                    <div class="col-3">
                                        <h5 class="card-text mt-2">Contactar a mi entrenador </h5>
                                        <a href='#' type="button" class="btn btn-secondary">Contactar</a>
                                    </div>

                                    <div class="col-3">
                                        <h5 class="card-text ml-4 mt-2">Nuevo plan</h5>
                                        <a href='/profile/fichaingreso' type="button" class="btn btn-success ml-4">Completar formulario</a>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    :
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
            }


        </>

    )
}

export default Profile
