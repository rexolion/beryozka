import React from 'react';
import {connect} from 'react-redux';
import LoginForm from '../../components/LoginForm/loginForm';
import BigMap from '../../components/BigMap/bigMap';
import SideBarWrap from '../../components/SideBarWrap/sideBarWrap';
import Logo from '../../components/Logo/logo';

const LoginPageConnected = ({authorized}) => (
    <div className="Container">
       <SideBarWrap >
           <Logo />
           {!authorized && <LoginForm />}
       </SideBarWrap>
       <BigMap blurred={true} />
    </div>
);

const mapStateToProps = state => ({ authorized: state.authorized});

const LoginPage = connect(mapStateToProps)(LoginPageConnected);

export default LoginPage;