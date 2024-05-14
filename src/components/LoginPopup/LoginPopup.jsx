import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="login-popup-input">
                    {currState === "Sign Up" && <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button onClick={() => setCurrState(currState === "Sign Up" ? "Login" : "Sign Up")}>
                    {currState === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                <p>
                    {currState === "Login" ? "Create a new account?" : "Already have an account?"}
                    <span onClick={() => setCurrState(currState === "Sign Up" ? "Login" : "Sign Up")}>
                        {currState === "Login" ? "Click here" : "Login here"}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default LoginPopup;
