import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const Login = props => {
    const { store, actions } = useContext(Context)
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h1>Login</h1>

                        <form onSubmit={e => actions.login(e, props.history, store.role)}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input autoFocus type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"
                                    name='email'
                                    onChange={actions.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                    name='password'
                                    onChange={actions.handleChange} />
                            </div>
                            <div class="form-check" >
                                <input class="form-check-input" type="radio" name="role" id="exampleRadios1" value={4} onChange={actions.handleChange} />
                                <label class="form-check-label" for="exampleRadios1">
                                    Client
                            </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="role" id="exampleRadios2" value={3}
                                onChange={actions.handleChange} />
                                <label class="form-check-label" for="exampleRadios2">
                                    Trainer
                            </label>
                            </div>
                            <div class="form-check disabled">
                                <input class="form-check-input" type="radio" name="role" id="exampleRadios3" value={2}
                                onChange={actions.handleChange} />
                                <label class="form-check-label" for="exampleRadios3">
                                    Nutritionist
                            </label>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </form>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Login;