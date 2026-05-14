"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const LoginPage = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    // // console.log(watch());
    // // const watchEmail = watch("email");
    // // const watchPassword = watch("password");

    const handleFormFunc = async (data) => {
        // console.log(data);
        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        // console.log(res, error)
    }

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='container mx-auto flex justify-center items-center '>
            <div className='bg-white md:p-20 mx-auto md:shadow rounded-2xl'>
                <h2 className='text-4xl font-bold text-center'>Login Your Account</h2>
                <div className='divider'></div>
                <div>
                    <form onSubmit={handleSubmit(handleFormFunc)}>
                        <fieldset className="fieldset relative">
                            <label className="label font-semibold">Email</label>
                            <input
                                {...register("email", {
                                    required: "This is required",
                                })}
                                type="email"
                                className="input w-full"
                                placeholder="Email"
                            />
                            <p className='text-red-500'>{errors.email?.message}</p>

                            {/* <p>{watchEmail}</p> */}

                            <label className="label font-semibold">Password</label>
                            <input
                                {...register("password", {
                                    required: "This is required",
                                    minLength: {
                                        value: 8,
                                        message: "Minimum length 8"
                                    }
                                })}
                                type={showPassword ? "text" : "password"}
                                className="input w-full"
                                placeholder="Password"
                            />
                            <span
                            className='absolute top-28 right-4 cursor-pointer' 
                            onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ?
                                        <span className='text-xl'><FaEye /></span> :
                                        <span className='text-xl'><FaEyeSlash /></span>
                                }
                            </span>
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