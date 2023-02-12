/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from './AuthProvider/AuthProvider';


const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleForgetPassword = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log(email)
        resetPassword(email)
            .then(() => {
                toast.success('Password Reset Email sent.Please Check Your email')
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='max-w-[600px] mx-auto my-[60px] p-4'>
            <div>
                <h1 className=" text-[42px] mb-[50px]">Recover Password</h1>

                <div className="">
                    <div>
                        <h2 className='text-[13px] text-black/80'>Please enter your email and we will send you a password reset link.</h2>
                    </div>
                    <form onSubmit={handleForgetPassword} className="mt-[24px]">
                        <div className="flex flex-col gap-[8px]">
                            
                            <input placeholder="Email" name='email' className="w-full border border-black/20 py-[15px] px-[15px] mb-[8px]" type="text" />
                        </div>
                        <div className="mt-[4px]">
                            <p className="text-red-600">{error}</p>
                        </div>
                        <div className="mt-[32px]">
                            <button type="submit" className="border border-black px-[55px] py-[12px] hover:bg-black hover:text-white text-black  text-[14px] font-semibold">Reset Password</button>
                            <div>
                                <Link href='/' className="font-[400] text-[13px] forgetColor">Cancel</Link>
                            </div>
                        </div>

                    </form>

                   
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;