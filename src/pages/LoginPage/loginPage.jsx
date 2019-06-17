import React from 'react';
import BigMap from '../../components/BigMap/bigMap';
import SideBarWrap from '../../components/SideBarWrap/sideBarWrap';
import Logo from '../../components/Logo/logo';

const LoginPage = () => (
    <div className="Container">
       <SideBarWrap >
           <Logo />
       </SideBarWrap>
       <BigMap blurer={true} />
    </div>
);

export default LoginPage;