import React from 'react';
import './authorization.styles.scss'
import SignIn from "../../components/sign-in/sign-in.component";


const AuthorizationPage = props => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
        </div>
    );
};


export default AuthorizationPage;
