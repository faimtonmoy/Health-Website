import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PatientsInfo from './Components/PatientsInfo/PatientsInfo';
import Appointment from './Components/Appointment/Appointment';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/patientinfo">
              <PatientsInfo></PatientsInfo>
            </PrivateRoute>
          <PrivateRoute path="/service/:serviceID">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="*">
            <NotFound>
            </NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
