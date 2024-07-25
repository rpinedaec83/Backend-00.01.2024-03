import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setError(null);
  };

  const handleLoginFailure = (error) => {
    console.error(error);
    setError('Login failed. Please try again.');
  };

  return {
    user,
    error,
    handleLoginSuccess,
    handleLoginFailure,
  };
};

export default useAuth;