import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer';
import React from 'react';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Menu1 from './components/PMI/PMI_Main_Menu';
import Menu2 from './components/Faskes/Faskes_Main_Menu';
import Menu3 from './components/Menu/Main_Menu';
import Menu4 from './components/About_Us/about';
import AboutUs from './components/About_Us/about';
import Tabel1 from './components/PMI_Tabel/Menu_Tabel_PMI';
import Tabel2 from './components/Faskes_Tabel_Menu/Faskes_Main_Menu';
// import Menu2 from './components/Faskes/Faskes_Main_Menu';
// import Menu3 from './components/Menu/Main_Menu';
// import Menu4 from './components/About_Us/about';

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
            <Navbar />
            <main>
              <Switch>
                <Route path="/" exact>
                  <Login />
                  {/* <Gerbong/> */}
                </Route>

                <Route path="/menu2">
                  <Menu1 />
                </Route>
                <Route path="/menu1">
                  <Menu2 />
                </Route>
                <Route path="/menu3">
                  <Menu3></Menu3>
                </Route>
                <Route path="/menu4">
                  <Menu4></Menu4>
                </Route>
                <Route path="/Tabel1">
                  <Tabel1></Tabel1>
                </Route>
                <Route path="/Tabel2">
                  <Tabel2></Tabel2>
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
