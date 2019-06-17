import React from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../../../../redux/Actions/actions';
import './loginFormContainerBtn.css';

class LoginFormContainerBtnConnected extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    handleSubmit = () => {
        this.props.submitLogin(true);
    }

    render() { 
        return ( 
            <button onClick={this.handleSubmit} className="Login-form-container-btn">Войти</button>
         );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitLogin: (toogle) => dispatch(submitLogin(toogle)) 
    };
};

const LoginFormContainerBtn = connect(null, mapDispatchToProps)(LoginFormContainerBtnConnected);

export default LoginFormContainerBtn;