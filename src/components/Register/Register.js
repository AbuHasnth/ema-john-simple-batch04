import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register: Create New Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='type your email' />
                    <br />
                    <input type="password" name="" id="" placeholder='type your password' />
                    <br />
                    <input type="submit" value="submit" />
                </form>

                <p>ALready have an account ?? <Link to='/login'>Log In</Link></p>

                <div>
                    <button className='btn-regular'>Google Sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Register;