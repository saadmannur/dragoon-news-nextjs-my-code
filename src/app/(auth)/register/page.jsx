"use client"
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterFunc = async (data) => {
        // console.log(data);
        const { name, photo, email, password } = data;
        // console.log(name, photo, email, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            image: photo,
            email: email,
            password: password,
            callbackURL: "/"
        })
        console.log(res, error);

        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Sign Up Successful")
            redirect('/')
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='container mx-auto flex justify-center items-center '>
            <div className='bg-white md:p-20  mx-auto md:shadow rounded-2xl'>
                <h2 className='text-4xl font-bold text-center'>Register Your Account</h2>
                <div className='divider'></div>
                <div>
                    <form onSubmit={handleSubmit(handleRegisterFunc)}>
                        <fieldset className="fieldset relative">
                            <label className="label font-semibold">Name</label>
                            <input
                                {...register("name", {
                                    required: "This is required"
                                })}
                                type="name"
                                className="input w-full"
                                placeholder="Name"
                            />
                            <p className='text-red-500'>{errors.name?.message}</p>

                            <label className="label font-semibold mt-3">Photo Url</label>
                            <input
                                {...register("photo", {
                                    required: "This is required"
                                })}
                                type="text"
                                className="input w-full"
                                placeholder="Photo url"
                            />
                            <p className='text-red-500'>{errors.text?.message}</p>

                            <label className="label font-semibold mt-3">Email</label>
                            <input
                                {...register("email", {
                                    required: "This is required"
                                })}
                                type="email"
                                className="input w-full"
                                placeholder="Email"
                            />
                            <p className='text-red-500'>{errors.email?.message}</p>

                            <label className="label font-semibold mt-3">Password</label>
                            <input
                                {...register("password", {
                                    required: "This is required",
                                    minLength: {
                                        value: 8,
                                        message: "Minimum length is 8"
                                    }
                                })}
                                type={showPassword ? "text" : "password"}
                                className="input w-full"
                                placeholder="Password"
                            />
                            <span
                                className='absolute top-75 right-4 cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ?
                                        <span className='text-xl'><FaEye /></span> :
                                        <span className='text-xl'><FaEyeSlash /></span>
                                }
                            </span>
                            <p className='text-red-500'>{errors.password?.message}</p>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;