import './login.css';
// import sido from '../img/Sidoplasma.png';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/auth-hook';
import React, { useState } from 'react';

const roles = [{ email: 'pmi@gmail.com' }];

const Login = () => {
  const history = useHistory();
  const auth = useAuth();
  const [email, setEmail] = useState('');

  const roleMap = (email) => {
    const data = {
      'pmi@gmail.com': 'pmi',
      'faskes@gmail.com': 'faskes',
      'admin@gmail.com': 'admin',
    };

    if (!email in data) {
      return 'pmi';
    }

    return data[email];
  };

  const handleLogin = () => {
    const data = { username: 'aaa@gmail.com', password: '123123' };
    const url = 'https://appsa.awanpintar.com/login';

    const role = roleMap(email);
    console.log(role);

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'X-Parse-Application-Id': 'MyAPPID',
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        auth.login(res.sessionToken, role);
        if (role === 'pmi') {
          history.replace('/FormPMI');
        } else if (role === 'faskes') {
          history.replace('/FormFaskes');
        } else if (role === 'admin') {
          history.replace('/FormAdmin');
        } else {
          throw new Error('Invalid user credentials');
        }
      })
      .catch((err) => {
        alert('Invalid username or password');
      });
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle" classname="fontlogin">
        L O G I N
      </h2>

      <div>
        <FormInput
          description="Username"
          placeholder="Enter your username"
          type="text"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
        />
        <div id="button" class="row">
          <button
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  </div>
);

export default Login;
