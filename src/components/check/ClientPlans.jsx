import React, { useContext } from "react";
import { Context } from "../store/appContext";
import sinimagenImage from '../images/sinImagen.jpg';
import PlansCard from "./PlansCard";


const ClientPlans = props => {
    const { store, actions } = useContext(Context)

    return (
        <>
            {
                !!store.currentUser ?
                <div className="container">
                        <h1 classname="text" class="mt-3 text-center" >Planes anteriores</h1>
                <a href='/profile/' type="button" class="btn btn-info ml-5">Volver a Mi Perfíl</a>
                        <br />
                        <div class="container">
                            <div class="row">

                            <PlansCard />
                            <PlansCard />
                            <PlansCard />
                            <PlansCard />
                        </div>
                        </div>
                        <br />
                    </div>
                    :
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
            }
        </>
    )
}


export default ClientPlans