import React, { useContext } from "react"
import { Context } from "../store/appContext";

const FormRegNutri = props => {
    const {store, actions} = useContext(Context)
    return (
        <>
            <div className="container">
                <br />
                <h1 classname="text-justify-center" >Formulario Registro Nutricionista</h1>
                <br />
                <form id="loginForm" onSubmit={(e)=>actions.register_profesional(e,2,props.history)}>
                    <div classname="form-group row" >
                        <label for="input">Nombre</label>
                        <input required type="text" class="form-control" id="nameprof" aria-describedby="name"
                        onChange={actions.handleChange}  name="name"/>
                        <small id="nameprof" class="form-text text-muted">Escriba su nombre completo</small>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Lastname</label>
                        <input required type="text" class="form-control" id="lastnameprof" aria-describedby="lastname"
                        onChange={actions.handleChange} 
                        name="lastname"/>
                        <small id="lastnameprof" class="form-text text-muted">Escriba ambos apellidos</small>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="inputEmail3" >Email</label>
                        <input required type="email" class="form-control" id="emailprof" aria-describedby="emailprof"
                        onChange={actions.handleChange} 
                        name="email"/>
                        <small id="emailprof" class="form-text text-muted">El email que escriba, va a ser su usuario</small>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input" >Password</label>
                        <input required type="password" class="form-control" id="passordprof" aria-describedby="passordprof" 
                        onChange={actions.handleChange}
                        name="password"/>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input" >Foto</label>
                        <div className="form-group row">
                            <input type="file" classname="form-control-file" id="exampleFormControlFile1" 
                            onChange={actions.handleChangeFiles}
                            name="avatar"/>
                            <br />
                            <br />
                        </div>
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Specialties</label>
                        <input type="text" class="form-control" id="specialties" 
                        onChange={actions.handleChange}
                        name="specialties"/>
                        <br />
                    </div>

                    

                    <div classname="form-group row" >
                        <label for="input">Edad</label>
                        <input required type="text" class="form-control" id="age" 
                        onChange={actions.handleChange}
                        name="age"/>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Description</label>
                        <textarea required class="form-control" id="description" rows="3"
                        onChange={actions.handleChange} name="description"></textarea>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Certificado de antecedentes</label>
                        <input required type="file" class="form-control-file" id="background" 
                        onChange={actions.handleChangeFiles}
                        name="background"/>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label for="input">Certificado de título</label>
                        <input required type="file" class="form-control-file" id="profesional_title" 
                        onChange={actions.handleChangeFiles}
                        name="profesional_title"/>
                        <br />
                    </div>

                    <div classname="form-group row" >
                        <label required for="input" >Certificado de Superintendencia de Salud</label>
                        <input type="file" class="form-control-file" id="nutritionist_title_validation" 
                        onChange={actions.handleChangeFiles}
                        name="nutritionist_title_validation"/>
                        <br />
                        <br />
                    </div>

                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" 
                        onChange={actions.handleChange}/>
                        <label class="form-check-label" for="exampleCheck1">Acepto términos y contratos</label>
                    </div>

                    <button  type="submit" class="btn btn-primary">Enviar formulario</button>
                </form>
            </div>
            <br />
        </>
    )
}

export default FormRegNutri;