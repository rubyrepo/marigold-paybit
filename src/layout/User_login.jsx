import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';  // Import useNavigate
import { AuthContext } from '../provider/AuthProvider';

const User_login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();  // Initialize navigate

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('Logged in user:', user);
                // Redirect to the Bills page after successful login
                navigate('/bills');  // Redirect to /bills route
            })
            .catch((error) => {
                console.error('Login failed:', error.message);
                // Optionally, show the error in the UI for better UX
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-bold text-center mb-6">User Login</h2>

                <form onSubmit={handleLogin}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                    />

                    <label className="label mt-4">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full"
                    />

                    <button type="submit" className="btn btn-neutral w-full mt-6">
                        Login
                    </button>

                    <p className="pt-5 text-sm text-center">
                        New to the site?{' '}
                        <Link className="text-red-400 font-semibold" to="/User_register">
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default User_login;
