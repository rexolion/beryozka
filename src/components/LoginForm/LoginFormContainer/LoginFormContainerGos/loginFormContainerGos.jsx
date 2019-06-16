import React from 'react';
import './loginFormContainerGos.css';
import LoginFormContainerGosHeading from './LoginFormContainerGosHeading/loginFormContainerGosHeading';
import LoginFormContainerGosBtn from './LoginFormContainerGosBtn/loginFormContainerGosBtn';

const LoginFormContainerGos = () => (
    <div className="Login-form-container-gos">
        <LoginFormContainerGosHeading />
        <LoginFormContainerGosBtn />
    </div>
);

export default LoginFormContainerGos;