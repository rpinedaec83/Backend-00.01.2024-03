import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import StripePayment from "./components/StripePayment"; 
import Success from "./components/Success"; 
import Cancel from "./components/Cancel"; 

// import LoginForm from './components/LoginForm';
// import useAuth from './hooks/useAuth';
 
function App() { 
  // const { handleLoginSuccess, handleLoginFailure } = useAuth();

  return ( 
    <BrowserRouter> 
      <Routes> 
        {/* <Route path="/inicio" element={<LoginForm onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} />} />             */}
        <Route path="/success" element={<Success />} /> 
        <Route path="/cancel" element={<Cancel />} /> 
        <Route path="/" element={<StripePayment />} />
            
      </Routes> 
    </BrowserRouter> 
  ); 
}  
export default App; 