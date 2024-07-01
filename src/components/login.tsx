import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://localhost:3001/login', {
        username,
        password,
        rememberMe: checked
      });

      console.log('Login success:', response.data);

      // Esempio di gestione della navigazione dopo il login
      navigate('/dashboard'); // Naviga alla dashboard dopo il login riuscito
    } catch (error) {
      console.error('Errore durante il login:', error);
      // Gestisci gli errori di login qui
    }
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Naviga alla pagina di registrazione
  };

  const handleResetClick = () => {
    navigate('/resetPassword'); // Naviga alla pagina di reset password
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={require('../assets/images/FAAM-MATESE.svg').default} alt="Logo" className="logo-image" />
      </div>
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <div className="login-title">Accedi</div>
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Email*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              className="input-field"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex-container">
            <div className="checkbox-group">
              <Checkbox
                inputId="rememberMe"
                onChange={(e) => setChecked(e.checked ?? false)}
                checked={checked}
              />
              <label htmlFor="rememberMe">Ricordami</label>
            </div>
            <button type="button" className="reset-button" onClick={handleResetClick}>
              Hai dimenticato la password?
            </button>
          </div>
          <button type="submit" className="login-button">
            ACCEDI
          </button>
          <label htmlFor="registrati">Non hai un account?</label>
          <button className="register-button" onClick={handleRegisterClick}>
            Registrati
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
