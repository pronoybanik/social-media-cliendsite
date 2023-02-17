import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const { signUser, googleLogin } = useContext(authContext)

    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state?.from?.pathname || '/';

    const [loginError, setLoginError] = useState('');

    // const [loginUserEmail, setLoginUserEmail] = useState('')
    // const [token] = useToken(loginUserEmail)

    // if (token) {
    //     navigate(form, { replace: true })
    // }


    const provider = new GoogleAuthProvider()
    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                
                


            })
            .catch(error => {
                console.error(error)
                toast.error('Password is Incorrect')
            })
    }

    const handleLogin = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);
        signUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                from.reset('');
                navigate(form, { replace: true })
                toast.success('login success');

            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            })

    }

    return (
        <div>
            <h1>login page</h1>

            <div className="hero ">
                <div className="hero-content ">
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center mt-2 font-serif">Login Now</h1>
                        <div className="card-body w-96">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-serif">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover font-serif">Forgot password?</Link>
                                </label>
                            </div>
                            <p className=''>{loginError}</p>
                            <div className="form-control mt-6">
                                <button className="btn font-serif text-white">Login</button>
                            </div>

                            <div className='divider font-serif'>OR</div>
                            <button onClick={handleGoogle} className='btn btn-outline font-serif'>Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;