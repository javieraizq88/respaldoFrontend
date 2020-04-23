import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'


const ProfesionalDetail = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.adminLoadProfesionals(props.location.pathname);
    }, [])
    return (
        <>
            {
                !!store.profesionals && store.profesionals.length > 0 ?
                    <>
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <h1>{store.profesionals[0].name}</h1>


                                <form onSubmit={(e)=>actions.changeActiveStatus(e,props.location.pathname)}>
                                    <div className="form-check" >
                                        <input className="form-check-input" type="radio" name="is_active" id="exampleRadios1" value={!store.profesionals[0].is_active} onChange={actions.handleChange} />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                            Active
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="is_active" id="exampleRadios2" value={!store.profesionals[0].is_active}
                                            onChange={actions.handleChange} />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                            Inactive
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Change active status</button>
                                </form>

                            </div>
                        </div>

                    </>

                    :
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
            }
        </>
    )
}

export default ProfesionalDetail