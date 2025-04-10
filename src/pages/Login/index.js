import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import style from './Login.module.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use for redirection

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Both fields are required');
            return;
        }

        if (username === 'admin' && password === 'admin123') {
            alert('Login successful!');
            navigate('/Home'); // Redirect to Home page
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <header >
                <Link to="./">
                    <img src={logo} alt="Logo do cinetag"></img>
                </Link>
            </header>
            <section className={style.container}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.username}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className={style.password}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>

                    {error && <p className={style.error}>{error}</p>}

                    <button type="submit">Login</button>
                </form>

                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </section>
        </>
    );
}
