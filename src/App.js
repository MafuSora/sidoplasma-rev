// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/footer';
import React from 'react';
import Login from './components/Login/login';
import Navbar from './components/Navbar/navbar';
import FormPMI from './components/PMI/PMI_Main_Menu';
import FormFaskes from './components/Faskes/Faskes_Main_Menu';
import AboutUs from './components/About_Us/about';
import TabelPMI from './components/PMI_Tabel_Menu/PMI_Menu_Tabel';
import TabelFaskes from './components/Faskes_Tabel_Menu/Faskes_Tabel_Menu';
import Navbarguest from './components/Navbar/navbarguest';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useAuth } from './auth/auth-hook';
import { AuthContext } from './auth/auth-context';

function App() {
  const { token, login, logout } = useAuth();

  return (

    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >

      <div Classname="App">
        <div className="backg">
          <Router>
            
            <main>
              <Switch>

                <Route path="/" exact>
                  <Navbarguest/>
                  <AboutUs />
                  {/* <Gerbong/> */}
                </Route>

                <Route path="/FormPMI">
                  <Navbar />
                  <FormPMI />
                </Route>

                <Route path="/FormFaskes">
                  <Navbar />
                  <FormFaskes />
                </Route>

                <Route path="/TabelPMI">
                  <Navbar/>
                  <TabelPMI></TabelPMI>
                </Route>

                <Route path="/TabelFaskes">
                  <Navbar />
                  <TabelFaskes></TabelFaskes>
                </Route>

                <Route path="/Login">
                  <Login></Login>
                </Route>

                <Redirect to="/"/>
                
              </Switch>
            </main>
          </Router>
          <Footer />
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
