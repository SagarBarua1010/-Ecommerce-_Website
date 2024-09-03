import React from 'react';
import './css/LoginSignup.css';
const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sing Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='email Name' />
                    <input type="password" placeholder='password Name' />
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuig,i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            
        </div>
    );
};

export default LoginSignup;