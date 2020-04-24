import React, {Component} from 'react';
import FormInput from "../forn-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss'
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (e) {
            console.log(e);
        }

    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have account</h2>
                <span>Sign in with your email and password</span>

                <form title='sign-in-form' onSubmit={this.handleSubmit} autoComplete={'off'}>
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required/>
                    <div className="buttons">
                        <CustomButton type='Submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}


export default SignIn;
