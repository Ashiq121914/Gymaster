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
        <div>
            <div>
                <h1 className="text-[#000000] text-[700] text-[40px] text-center mt-[123px]">Reset your password</h1>

                <div className="lg:ml-[450px] 2xl:ml-[700px] md:ml-[350px] ml-[90px] mt-[40px]">
                    <div>
                        <h2 className='text-[16px] forgetColor'>We'll send you an email to reset your password.</h2>
                    </div>
                    <form onSubmit={handleForgetPassword} className="mt-[24px]">
                        <div className="flex flex-col gap-[8px]">
                            <label className="text-[#000000] text-[16px] font-[600]">Email</label>
                            <input placeholder="your@email.com" name='email' className="loginInput pl-[16px] lg:w-[500px] w-[250px] xl:w-[600px] placeholder:pl-[3px] md:w-[350px] h-[40px] lg:h-[48px]" type="text" />
                        </div>
                        <div className="mt-[4px]">
                            <p className="text-red-600">{error}</p>
                        </div>
                        <div className="mt-[40px] flex items-center gap-[24px]">
                            <button type="submit" className="lg:w-[109px] w-[100px] h-[45px] lg:h-[60px] bg-[#D2232A] text-[#FFFFFF] font-[600]">REST</button>
                            <div>
                                <Link href='#' className="font-[400] text-[13px] forgetColor">Cancel</Link>
                            </div>
                        </div>

                    </form>

                   
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;