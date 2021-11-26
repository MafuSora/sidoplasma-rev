// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer';
import React from 'react';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import FormPMI from './components/PMI/PMI_Main_Menu';
import FormFaskes from './components/Faskes/Faskes_Main_Menu';
import FormAdmin from './components/Admin/Admin_Main_Menu';
import AboutUs from './components/About_Us/about';
import TabelPMI from './components/PMI_Tabel_Menu/PMI_Menu_Tabel';
import TabelFaskes from './components/Faskes_Tabel_Menu/Faskes_Tabel_Menu';
import TabelAdmin from './components/Admin_Tabel_Menu/Admin_Tabel_Menu';
import NavbarPMI from './components/navbar/navbarPMI';
import NavbarFaskes from './components/navbar/navbarfaskes';
import NavbarAdmin from './components/navbar/navbaradmin';
import Navbarguest from './components/navbar/navbarguest';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useAuth } from './auth/auth-hook';
import { AuthContext } from './auth/auth-context';


function App() {
  const { token, login, logout, role } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        role,
      }}
    >
      <div Classname="App">
        <div className="backg">
          <Router>
            <main>
              <Switch>
                <Route path="/" exact>
                  <Navbarguest />
                  <AboutUs />
                  {/* <Gerbong/> */}
                </Route>
                <Route path="/FormAdmin">
                  <NavbarAdmin />
                  <FormAdmin />
                </Route>

                <Route path="/TabelAdmin">
                  <NavbarAdmin />
                  <TabelAdmin />
                </Route>

                <Route path="/FormPMI">
                  <NavbarPMI />
                  <FormPMI />
                </Route>

                <Route path="/FormFaskes">
                  <NavbarFaskes />
                  <FormFaskes />
                </Route>

                <Route path="/TabelPMI">
                  <NavbarPMI />
                  <TabelPMI></TabelPMI>
                </Route>

                <Route path="/TabelFaskes">
                  <NavbarFaskes />
                  <TabelFaskes></TabelFaskes>
                </Route>

                <Route path="/Login">
                  <Login></Login>
                </Route>

                <Redirect to="/" />
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
