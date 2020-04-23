import React from 'react'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import About from './views/About.jsx'
import OurTeam from './views/OurTeam.jsx'
import Home from './views/Home.jsx'
import NutritionalEducation from './components/NutritionalEducation.jsx'
import FitnessEducation from './components/FitnessEducation.jsx'
import Clients from './components/Clients.jsx'
import injectContext from './store/appContext.js'
import AdminClients from './views/AdminClients.jsx'
import AdminProfesionals from './views/AdminProfesionals.jsx'
import ClientDetail from './views/AdminClientDetail.jsx'
import FormRegNutri from './components/FormingRegNutri.jsx'
import FormRegTrainer from './components/FormingRegTrainer.jsx'
import ProfesionalDetail from './views/AdminProfesionalDetail.jsx'
import AdminLogin from './views/AdminLogin.jsx'
import AdminProfile from './views/AdminProfile.jsx'
import HealthPlans from './components/HealthPlans.jsx'
import HealthTeam from './components/HealthTeam.jsx'
import Login from './views/Login.jsx'
import Nutritionists from './components/Nutritionists.jsx'
import PersonalTrainers from './components/PersonalTrainers.jsx'
import ProfessionalProfile from './views/ProfessionalProfile.jsx'
import Profile from './views/Profile.jsx'
import Register from './views/Register.jsx'


const App = props => {

  return (
    <>
      <Router>
      <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/team' component={OurTeam} />
          <Route path='/nutrionists' component={Nutritionists}/>
          <Route path='/personal-trainers' component={PersonalTrainers}/>
          <Route path='/nutritional-education' component={NutritionalEducation} />
          <Route path='/fitness-education' component={FitnessEducation} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/register/profesional/2' component={FormRegNutri} />
          <Route exact path='/register/profesional/3' component={FormRegTrainer} />
          <Route path='/profile/health-team' component={HealthTeam} />
          <Route path='/profile/health-plans' component={HealthPlans} />
          <Route exact path='/profile/professional/clients' component={Clients} />
          <Route exact path='/profile/professional' component={ProfessionalProfile} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/admin/login' component={AdminLogin} />
          <Route exact path='/admin/profile' component={AdminProfile} />
          <Route exact path='/admin/client' component={AdminClients} />
          <Route exact path='/admin/client/:id' component={ClientDetail} />
          <Route exact path='/admin/profesional' component={AdminProfesionals} />
          <Route  exact path='/admin/profesional/:role_id/:id' component={ProfesionalDetail} />
        </Switch>
      </Router>
    </>
  )
}

export default injectContext(App);