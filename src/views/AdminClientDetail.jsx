import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

/* RESPOSIVE LISTO*/

const ClientDetail = props => {
    console.log(props.location.pathname)
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadClients(props.location.pathname);
    }, [])

    return (
        <>
            <Link to='/admin/profile' class="btn btn-danger ml-3 mt-2">Volver a Administrador </Link>
            <Link to='/admin/client' class="btn btn-success ml-2 mt-2">Volver a todos los clientes</Link>
            <br />
            <div className="cointainer">
                <div className="row">
                    <div className="container">

                        {
                            !!store.clients &&
                            <div class="col">
                                <h1 class="text-center">{store.clients[0].name} {store.clients[0].last_name} </h1>
                                <br />
                                <div class="card-deck">

                                <div class="card col-md-11 ml-5">
                                    <div class="card-body">
                                        <h5>ID cliente: {store.clients[0].id}</h5>
                                        <h5>Status: {store.clients[0].is_active ? "Activo" : "Inactivo"}</h5>
                                        <h5>Total Planes: {store.clients[0].all_plans.length}</h5>
                                        <h5>Nombre: {store.clients[0].name}</h5>
                                        <h5>Apellido: {store.clients[0].last_name}</h5>
                                        <h5>Inscripción: {store.clients[0].date_created}</h5>
                                        <h5>Usuario: {store.clients[0].email}</h5>
                                        <h5>Inscripción: {store.clients[0].date_created}</h5>
                                    </div>
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-md-3"></div>
                                            <div class="col-md-4">
                                                <Link to='#' class="btn btn-primary ml-3 mt-2">Activar cuenta </Link>
                                            </div>
                                            <div class="col-md-4">
                                                <Link to='#' class="btn btn-warning ml-3 mt-2">Desactivar cuenta </Link>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientDetail;
