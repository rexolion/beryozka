import React from 'react';
import BigMap from '../../components/BigMap/bigMap';
import SideBarWrap from '../../components/SideBarWrap/sideBarWrap';
import Header from '../../components/Header/header'

const LoginPage = () => (
    <div className="Container">
       <SideBarWrap>
           <Header />
       </SideBarWrap>
       <BigMap />
    </div>
);

export default LoginPage;