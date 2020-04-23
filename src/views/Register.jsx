import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Register = props => {
    const { store, actions } = useContext(Context)
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h1>Register</h1>
                        <form onSubmit={(e)=>actions.register_client(e,props.history)}>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Nombre</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su nombre"
                                    onChange={actions.handleChange}
                                    name='name' />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Apellidos </label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese ambos apellidos"
                                    onChange={actions.handleChange}
                                    name='lastname' />
                            </div>

                            <legend class="col-form pt-0">Indique su género</legend>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"
                                    value='Masculino'
                                    onChange={actions.handleChange}
                                    name='gender' />
                                <label class="custom-control-label" for="customRadio1">Masculino</label>
                            </div>
                            <div class="custom-control custom-radio">
                                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"
                                    value='Femenino'
                                    onChange={actions.handleChange}
                                    name='gender' />
                                <label class="custom-control-label" for="customRadio2">Femenino</label>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su email"
                                    onChange={actions.handleChange}
                                    name='email' />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingrese su Password"
                                    onChange={actions.handleChange}
                                    name='password' />
                            </div>
                            <div classname="form-group row" >
                                <label for="input" >Foto</label>
                                <div className="form-group row">
                                    <input type="file" classname="form-control-file" id="exampleFormControlFile1"
                                        onChange={actions.handleChangeFiles}
                                        name="avatar" />
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Register