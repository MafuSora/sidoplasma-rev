import './App.css';
import React, { useEffect } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intel from './components/Intel/Intel';
import Daftar from './components/Daftar/Daftar';
import Ismec from './components/Intel/Ismec';
import Information from './components/Information/Information';
import Sponsor from './components/Information/Sponsor';
import FileExplorer from './components/FileExplorer/FileExplorer';
import Login from './components/Login/Login';
import TeamPage from './components/TeamPage/TeamPage';
import AdminPage from './components/AdminPage/AdminPage';
import AdminTeamPage from './components/AdminPage/AdminTeamPage/AdminTeamPage';
import SubmissionPage from './components/TeamPage/SubmissionPage/SubmissionPage';
import { useAuth } from './Auth/auth-hook';
import { AuthContext } from './Auth/auth-context';
import Announcement from './components/AdminPage/Announcement/Announcement';
import NotFound from './components/Common/NotFound/NotFound';
import ProtectedRoute from './components/Common/ProtectedRoute/ProtectedRoute';
import HomeButton from './components/Common/HomeButton/HomeButton';

function App() {
  const {
    isAdmin,
    nama,
    jenis,
    login,
    logout,
    isLoggedIn,
  } = useAuth();

  let allowedRoutes;
  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn && isAdmin) {
      allowedRoutes = (
        <React.Fragment>
          <ProtectedRoute path="/admin" component={AdminPage} exact />
          <ProtectedRoute path="/admin/berkas" component={FileExplorer} exact />
          <ProtectedRoute path="/admin/team/:email" component={AdminTeamPage} />
          <ProtectedRoute path="/admin/announcement" component={Announcement} />
        </React.Fragment>
      );
    } else if (isLoggedIn) {
      allowedRoutes = (
        <React.Fragment>
          <ProtectedRoute path="/team" component={TeamPage} exact />
          <ProtectedRoute
            path="/team/submit-tugas"
            component={SubmissionPage}
            exact
          />
        </React.Fragment>
      );
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        nama,jenis,
        isAdmin,
        login,
        logout,
       
      }}
    >
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/intel" component={Intel} exact />
          <Route path="/ismec" component={Ismec} exact />
          {/* <Route path="/daftar" component={Daftar} exact /> */}
          <Route path="/information" component={Information} exact />
          <Route path="/sponsor" component={Sponsor} exact />
          <Route path="/login" component={Login} exact />
          <ProtectedRoute path="/admin" admin component={AdminPage} exact />
          <ProtectedRoute
            path="/admin/berkas"
            admin
            component={FileExplorer}
            exact
          />
          <ProtectedRoute
            path="/admin/team/:email"
            admin
            component={AdminTeamPage}
          />
          <ProtectedRoute
            path="/admin/announcement"
            admin
            component={Announcement}
          />

          <ProtectedRoute path="/team" component={TeamPage} exact />
          <ProtectedRoute
            path="/team/submit-tugas"
            component={SubmissionPage}
            exact
          />

          <Route component={NotFound} />
        </Switch>
        <HomeButton />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
