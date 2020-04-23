import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const AdminLogin = props => {
    const {store, actions} = useContext(Context);
    return (
        <>
         <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h1>Login</h1>

                        <form onSubmit={e => actions.admin_login(e, props.history)}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input autoFocus type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Username"
                                    name='username'
                                    onChange={actions.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                                    name='password'
                                    onChange={actions.handleChange} />
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminLogin;