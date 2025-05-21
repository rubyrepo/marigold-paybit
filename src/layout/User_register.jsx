import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const User_register = () => {
    const { createUser, setUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log('User registered:', user);
                setUser(user);


                // Optional: update profile here or reset form
                form.reset();
            })
            .catch((error) => {
                console.error('Registration error:', error.code, error.message);
            });
    };

    return (
        <div className="h-screen overflow-hidden flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-bold text-center mb-6">User Registration</h2>

                <form onSubmit={handleRegister} autoComplete="off">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" required />

                    <label className="label mt-4">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />

                    <label className="label mt-4">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="url" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" required />

                    <label className="label mt-4">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" required />

                    <button type="submit" className="btn btn-neutral w-full mt-6">Register</button>

                    <p className="pt-5 text-center">
                        Already have an account? <Link className="text-red-400" to="/User_login">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default User_register;
