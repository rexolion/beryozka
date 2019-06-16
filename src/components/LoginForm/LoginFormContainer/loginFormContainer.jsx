import React from 'react';
import LoginFormContainerHeading from './LoginFormContainerHeading/loginFormContainerHeading';
import LoginFormContainerBtn from './LoginFormContainerBtn/loginFormContainerBtn';
import LoginFormContainerForgotSmall from './LoginFormContainerForgotSmall/loginFormContainerForgotSmall';
import LoginFormContainerInput from './LoginFormContainerInput/loginFormContainerInput';
import LoginFormContainerGos from './LoginFormContainerGos/loginFormContainerGos';
import './loginFormContainer.css';

const LoginFormContainer = () => (
    <div className="Login-form-container">
        <LoginFormContainerHeading />
        <LoginFormContainerInput />
        <LoginFormContainerInput />
        <LoginFormContainerBtn />
        <LoginFormContainerForgotSmall />
        <LoginFormContainerGos />
    </div>
);

export default LoginFormContainer;