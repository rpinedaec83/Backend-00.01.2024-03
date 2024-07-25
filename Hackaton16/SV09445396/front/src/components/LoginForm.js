import React, { useState } from 'react';
import { GoogleLogin } from '@leecheuk/react-google-login';
import Welcome from '../components/Welcome';
import axios from 'axios';

const LoginForm = ({ onSuccess, onFailure }) => {
  const [ingGoogle, setIngGoogle] = useState(false);


  const handleLoginSuccess = async (response) => {
    const { tokenId } = response;
    try {
      const res = await axios.post('http://localhost:5000/api/auth/google-login', { tokenId });
      onSuccess(res.data);
      setIngGoogle(true);      
    } catch (error) {
      onFailure(error.response.data);
    }
    
  };

  const handleLoginFailure = (response) => {
    console.error(response);
    onFailure(response);
    // setIngGoogle(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Acceso con Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
      />

      {ingGoogle && <Welcome user={''} />}
    </div>
  );
};

export default LoginForm;
