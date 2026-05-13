"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';



const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    // const { register, handleSubmit, watch, formState:{errors}} = useForm();

    // console.log(errors);
    // // console.log(watch());
    // // const watchEmail = watch("email");
    // // const watchPassword = watch("password");

    const handleFormFunc = (data) => {
        // console.log(data);
    }

    return (
        <div className='container mx-auto flex justify-center items-center pb-20'>
            <div className='bg-white p-20 w- mx-auto shadow rounded-2xl'>
                <h2 className='text-3xl font-bold text-center'>Login Your Account</h2>
                <div className='divider'></div>
                <div>
                    <form onSubmit={handleSubmit(handleFormFunc)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                {...register("email", {
                                    required: "This is required",
                                })}
                                type="email"
                                className="input"
                                placeholder="Email"
                            />
                            <p className='text-red-500'>{errors.email?.message}</p>

                            {/* <p>{watchEmail}</p> */}

                            <label className="label">Password</label>
                            <input
                                {...register("password", {
                                    required: "This is required",
                                    minLength: {
                                        value: 8,
                                        message: "Minimum length 8"
                                    }
                                })}
                                type="password"
                                className="input"
                                placeholder="Password"
                            />
                            <p className='text-red-500'>{errors.password?.message}</p>

                            {/* <p>{watchPassword}</p>  */}

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
                <p className='text-center my-5'>
                    Do not Have An Account ?
                    <span className='text-pink-800 font-bold'>
                        <Link href={"/register"}> Register</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;