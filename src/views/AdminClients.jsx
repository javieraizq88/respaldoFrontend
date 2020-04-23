import React, { useEffect, useContext } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

/* Responsive LISTO */

const AdminClients = props => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.adminLoadClients(props.location.pathname);
    }, [])

    return (
        <>
            <Link to='/admin/profile' class="btn btn-danger ml-3 mt-2">Volver a Administrador</Link>
            <h1 class="text-center">Lista total de clientes </h1>
            <br />
            <div className="cointainer">
                <div className="row">
                    <div className="container">
                        <div class="card-deck">
                            {
                                !!store.clients > 0 ?
                                    store.clients.map((elem, index) => {

                                        return (
                                            <div class="card col-sm-md-3 border-primary" key={index}>
                                                <div class="card-header border-primary">{elem.name + ' ' + elem.last_name}</div>
                                                <div class="card-body">
                                                    <p class="card-text ml-3">ID : {elem.id}</p>
                                                    <p class="card-text ml-3">Inscripción : {elem.date_created}</p>
                                                    <p class="card-text ml-3">Email : {elem.email}</p>
                                                    <p class="card-text ml-3">Status : {elem.is_active ? "Active" : "Inactive"}</p>
                                                    <a href={"/admin/client/" + elem.id} class={"btn btn-info text-white text-center list-group-item-action " + (elem.is_active)}> Más información</a>
                                                </div>
                                            </div>
                                        )
                                    }) :
                                    <div class="alert alert-warning" role="alert">
                                        {store.errors}
                                    You have no Clients in your database :(
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminClients