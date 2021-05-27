import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './signin-signout.styles.scss';

const SigninSignoutPage = () => (
    <div className='signin-signout'>
        <SignIn /><SignUp />
        </div>        
);

export default SigninSignoutPage;