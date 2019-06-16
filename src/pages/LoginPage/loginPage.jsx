import React from 'react';
import BigMap from '../../components/BigMap/bigMap';
import SideBarWrap from '../../components/SideBarWrap/sideBarWrap';
import Logo from '../../components/Logo/logo';
import LoginForm from '../../components/LoginForm/loginForm';

const LoginPage = () => (
    <div className="Container">
       <SideBarWrap >
           <Logo />
           <LoginForm />
       </SideBarWrap>
       <BigMap blurer={true} />
    </div>
);

export default LoginPage;