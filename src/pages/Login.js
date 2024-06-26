import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            setEmail("");
            setPassword("");
            navigate('/'); // Redirect to home after login
        } else {
            alert("Invalid email or password. Please register if you don't have an account.");
        }
    };

    return (
        <main className='login'>
            <h1 className='loginTitle'>Log into your account</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email Address</label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='loginBtn'>SIGN IN</button>
                <p>
                    Don't have an account? <span><Link to='/register'>Create one</Link></span>
                </p>
            </form>
        </main>
    );
}
