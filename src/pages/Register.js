import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [fname, setFname] = useState("");
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(username, email, password, phone, fname);
        setUsername("");
        setEmail("");
        setPassword("");
        setPhone("");
        navigate('/joinus'); // Redirect to login after registration
    };

    return (
        <main className='register'>
            <h1 className='registerTitle'>Create an account</h1>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label htmlFor='fname'>Full name</label>
                <input
                    type='text'
                    name='fname'
                    id='fname'
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='phone'>Phone</label>
                <input
                    type='text'
                    name='phone'
                    id='phone'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
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
                <button className='registerBtn'>REGISTER</button>
                <p>
                    Have an account? <span><Link to='/joinus'>Sign in</Link></span>
                </p>
            </form>
        </main>
    );
}
