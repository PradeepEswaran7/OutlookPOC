import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import EmailLanding from './app/core/components/outlook_creation/email_landing_page/EmailLanding';





export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        
        <Route path='/signup' element={<Signup />} />
       
        <Route path='/home' element={ <EmailLanding/>} />
      
      </Routes>
    </BrowserRouter>
  );
}


