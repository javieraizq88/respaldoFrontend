import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom'
/* Responsive LISTO */
const AdminProfesionals = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadProfesionals(props.location.pathname);
    }, [])

    return (
        <>
            <Link to='/admin/profile' class="btn btn-danger mt-3 ml-4">Volver a Administrador</Link>
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-5">
                        <h1 class="text-center">Personal Trainer</h1>
                        {
                            !!store.profesionals && !!store.profesionals.trainers && store.profesionals.trainers.length > 0 ?
                                store.profesionals.trainers.map((elem, index) => {
                                    return (

                                        <div class="card border-info mt-4" key={index}>
                                            <div class="card-header border-info">{elem.name + ' ' + elem.lastname}</div>
                                            <div class="card-body">
                                                <p class="card-text ml-3">ID : {elem.id}</p>
                                                <p class="card-text ml-3">Planes totales : {elem.all_plans.length} </p>
                                                <p class="card-text ml-3">Email : {elem.email}</p>
                                                <p class="card-text ml-3">Status : {elem.is_active ? "Active" : "Inactive"}</p>
                                                <a href={'/admin/profesional/' + elem.role_id + '/' + elem.id} class={"btn btn-info text-white text-center list-group-item-action" + (elem.is_active == true ? 'active' : '')}>Más información</a>
                                                
                                                <p></p>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div className="alert alert-warning" role="alert">
                                    {store.error}
                                You have no trainers in your database :(
                            </div>
                        }
                    </div>
                    
                <div className="col-md-1"></div>
                    
                    <div className="col-md-6">
                    <h1 class="text-center">Nutritionists</h1>
                        {
                            !!store.profesionals && !!store.profesionals.nutritionists && store.profesionals.nutritionists.length > 0 ?
                                store.profesionals.nutritionists.map((elem, index) => {
                                    return (

                                        <div class="card border-success mt-4" key={index}>
                                            <div class="card-header border-success">{elem.name + ' ' + elem.lastname}</div>
                                            <div class="card-body">
                                                <p class="card-text ml-3">ID : {elem.id}</p>
                                                <p class="card-text ml-3">Planes totales : {elem.all_plans.length} </p>
                                                <p class="card-text ml-3">Email : {elem.email}</p>
                                                <p class="card-text ml-3">Status : {elem.is_active ? "Active" : "Inactive"}</p>
                                                <a href={'/admin/profesional/' + elem.role_id + '/' + elem.id} class={"btn btn-success text-white text-center list-group-item-action " + (elem.is_active == true ? 'active' : '')}>Más información</a>
                                                <p></p>
                                            </div>
                                        </div>

                                    )
                                })
                                :
                                <div className="alert alert-warning" role="alert">
                                    {store.error}
                                    You have no nutritionists in your database :(
                                </div>
                        }
                    </div>
                    {/* <div className="col-x-sm-md-lg-4 mt-1">
                        <h1>Search Specific Profesional</h1>
                        <form >
                        <input list="profesionals" value="" className="custom-select custom-select-sm"/>
                            <datalist id="profesionals">
                                {
                                    !!store.profesionals && !!store.profesionals.nutritionists ?
                                        store.profesionals.nutritionists.map((elem, index) => {
                                            return (
                                                <>
                                                    <option value={+ elem.id + ' ' + elem.name + ' ' + (elem.role_id == 2 ? 'Nutritionist' : 'Trainer')} />
                                                </>
                                            )
                                        })
                                        :
                                        <div className="alert alert-warning" role="alert">
                                            {store.error}
                                        You have no nutritionists in your database :(
                                    </div>
                                }
                                {
                                    !!store.profesionals && !!store.profesionals.trainers ?
                                        store.profesionals.trainers.map((elem, index) => {
                                            return (
                                                <>
                                                    <option value={+ elem.id + ' ' + elem.name + ' ' + (elem.role_id == 2 ? 'Nutritionist' : 'Trainer')} />
                                                </>
                                            )
                                        })
                                        :
                                        <div className="alert alert-warning" role="alert">
                                            {store.error}
                                        You have no nutritionists in your database :(
                                        </div>

                                }

                            </datalist>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div> */}
                </div>
            </div>


        </>
    )
}

export default AdminProfesionals