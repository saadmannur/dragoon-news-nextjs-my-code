"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const handleRegisterFunc = (data) => {
        console.log(data)
    } 

    return (
        <div className='container mx-auto flex justify-center items-center '>
            <div className='bg-white p-20 w- mx-auto shadow rounded-2xl'>
                <h2 className='text-4xl font-bold'>Register Your Account</h2>
                <div className='divider'></div>
                <div>
                    <form onSubmit={handleSubmit(handleRegisterFunc)}>
                        <fieldset className="fieldset">
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
                                type="password"
                                className="input w-full"
                                placeholder="Password"
                            />
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