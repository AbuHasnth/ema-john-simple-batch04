import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'


const Login = () => {

    const { SignInUsingGoogle} = useAuth();
    const location = useLocation();

    const history = useHistory();
    const redirectUri = location.state?.from || '/';

    const handleGoogleLogin = () =>{
        SignInUsingGoogle()
        .then(result =>{
            history.push(redirectUri);

        })
    }

    
    console.log('came from',location.state?.from);
    return (
        <div className='login-form'>
            <div>
                <h2>Log in</h2>
                <form>
                    <input type="email" name="" id="" placeholder='type your email' />
                    <br />
                    <input type="password" name="" id="" placeholder='type your password' />
                    <br />
                    <input type="submit" value="submit" />
                </form>

                <p>New to Ema-John <Link to='/register'>Create New Account</Link></p>

                <div>
                    <button className='btn-regular' onClick={handleGoogleLogin} >Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;