import React, { useContext } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';


const NavBar = props => {
    const { store, actions } = useContext(Context);

    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Fit good</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            store.currentUser === null &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>Login</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/team">Our Health professionals<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Profesionals
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/register/profesional/3">Register as Trainer </Link>
                                        <Link className="dropdown-item" to="/register/profesional/2">Register as Nutririonist </Link>
                                    </div>
                                </li>
                            </>

                        }

                        
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About us</Link>
                        </li>

                        {
                            !!store.currentUser && store.currentUser.user.role.name === 'client'
                            &&
                            <>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/team">Our Health professionals<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My profile
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/profile">My account </Link>
                                        <Link className="dropdown-item" to="/profile/health-team">My health team</Link>
                                        <Link className="dropdown-item" to="/profile/health-plans">My health plans</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" onClick={() => actions.logout(props.history)}>Logout</Link>
                                    </div>
                                </li>
                            </>
                        }
                        {
                            !!store.currentUser && store.currentUser.user.role.name !== 'client' && store.currentUser.user.role.name !== 'admin'
                            &&
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My professional profile
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/profile/professional">My account </Link>
                                    <Link className="dropdown-item" to="/profile/professional/clients">My clients</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" onClick={() => actions.logout(props.history)}>Logout</Link>
                                </div>
                            </li>
                        }
                        {
                            !!store.currentUser && store.currentUser.user.role.name === 'admin'
                            &&
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Admin profile
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/admin/profile">My Profile </Link>
                                    <Link className="dropdown-item" to="/admin/client">All Clients </Link>
                                    <Link className="dropdown-item" to="/admin/profesional">All Profesionals</Link>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item" onClick={() => actions.logout(props.history)}>Logout</button>                                </div>
                            </li>
                        }
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default withRouter(NavBar);