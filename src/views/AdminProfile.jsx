import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom'
/* Responsive LISTA */
const AdminProfile = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            {
                !!store.currentUser ?
                    <>
                        <div className="container mt-3">

                            <div className="row">
                                <div class="col-md card">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <img src="https://picsum.photos/200/300" class="img-top ml-3 mt-3" alt="avatar" width="200" height="200" />
                                        </div>
                                        <div class="col">
                                            <br />
                                            <br />
                                            <br />
                                            <h1 class="card-title ml-5">Hola {store.currentUser.user.name}!</h1>
                                        </div>
                                    </div>
                                    <br />
                                    <br />

                                    <div class="card">
                                        <div class="card-header">
                                            <h5>¿Qué te gustaría revisar hoy?</h5></div>
                                    </div>
                                    <br />

                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-5">
                                            <h5 class="card-text mt-2">Ver todos los clientes</h5>
                                            <Link to='/admin/client' class="btn btn-primary ml-5">Clientes</Link>
                                        </div>
                                        <div class="col-md-4">
                                            <h5 class="card-text mt-2">Ver todos los Profesionales </h5>
                                            <Link to='/admin/profesional' class="btn btn-success ml-5">Profesionales</Link>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>

                    </>
                    :
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    
            }
        </>

    )
}
export default AdminProfile;