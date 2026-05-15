"use client"
import Image from 'next/image';
import React from 'react';
import userImg from '@/assets/user.png'
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const AuthSection = () => {

    const { data, isPending } = authClient.useSession();
    const user = data?.user
    // console.log(user);

    const router = useRouter()
    const handleSignOut = async() => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    }

    if (isPending) {
        return <span className="loading loading-spinner loading-md"></span>
    }

    return (
        <>
            {
                user ?
                    (
                        <div className='flex md:justify-center items-center gap-4 relative'>
                            <h2 className='text-green-600 mr-20 '>Hello, {user.name}</h2>
                            <Image
                                src={user?.image}
                                alt={user.name}
                                width={50}
                                height={50}
                                className='rounded-full w-[50px] h-[50px] object-cover'
                            ></Image>

                            <button
                                onClick={handleSignOut}
                             className='btn btn-primary'>LogOut</button>

                        </div>
                    ) :
                    (
                        <div className='flex justify-center items-center gap-2'>
                            <Image
                                src={userImg}
                                alt='user'
                                width={40}
                                height={40}
                                className='rounded-full'
                            ></Image>
                            <Link href={'/login'}>
                                <button className='btn btn-neutral'>Login</button>
                            </Link>
                        </div>
                    )
            }
        </>
    );
};

export default AuthSection;