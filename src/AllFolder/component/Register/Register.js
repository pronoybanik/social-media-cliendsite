import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUser, googleLogin } = useContext(authContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signError, setSignError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');


    const handleRegister = event => {
        event.preventDefault()

        const from = event.target
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setCreateUserEmail(user?.email)
                from.reset('');
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(result => {
                        const user = result.user
                        console.log(user);

                        toast.success('Account Register');


                    })
                    // logOut()


                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.error(error)
                // toast.error('password is Incorrect')
                setSignError(error.message)
            });

    }

    const provider = new GoogleAuthProvider()
    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))

    };




    return (
        <div>
            <h1>register page</h1>
            <div className="hero font-serif">
                <div className="hero-content ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center mt-2">Sing UP</h1>
                        <form onSubmit={handleRegister} className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select name='role' className="select select-bordered w-full max-w-xs" >
                                    <option value='Buyer'>Buyer </option>
                                    <option value='Seller'>Seller</option>
                                </select>


                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p>I Have a Account- <Link to='/login' className='text-sky-400 font-semibold'>Login Now</Link></p>
                                </label>
                            </div>
                            <p className=''>{signError}</p>
                            <div className="form-control mt-6">
                                {/* <PrimaryButton classes="btn broder-none w-full">SingUp</PrimaryButton> */}
                                <button className="btn text-white">SingUp</button>
                            </div>

                            <div className='divider'>OR</div>
                            <button onClick={handleGoogle} className='btn btn-outline'>Google</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;