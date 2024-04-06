"use client"

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AppleIcon, FacebookIcon, GoogleIcon, LoginIllustration } from '@/components/svgs';


  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });
export default function Login() {
  const router = useRouter();
  const[showPassword,setShowPassword]=useState(false);
  const handleSubmit = async (values:any, actions:any) => {
    // Handle form submission
    console.log(values);
  };

  const TogglePassword = () => {
    // Toggle password visibility
    setShowPassword(!showPassword)
  };

  

  


  return (
    <>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-7xl p-3">
      <div className="flex flex-col justify-center w-full">
        <div className="mx-auto">
          <h1 className="font-bold text-4xl lg:text-5xl text-white my-4">
            Log in to your <span className="text-gradient-pink-orange">Account</span>
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col p-6 pt-10 rounded w-full md:max-w-md mx-auto">
        <Formik
  initialValues={{
    email: '',
    password: '',
  }}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({ errors, touched }) => (
    <Form className='w-full'>
  
      <Field
        type="text"
        name="email"
        className="w-full rounded-lg josefin-sans-font text-lg px-3 py-3 mb-4 bg-[#1F1F3B] border-gray-600 border-2 focus:outline-none focus:border-sqilcoPink text-white"
        placeholder="Email"
      />
      {errors.email && touched.email && (
        <div className="text-red-500 mb-4">{errors.email}</div>
      )}
      <div className='relative'>
        <Field
          type={`${showPassword ? "text" : "password"}`}
          name="password"
          className="w-full josefin-sans-font text-lg rounded-lg px-3 py-3 mb-4 bg-[#1F1F3B] border-gray-600 border-2 focus:outline-none focus:border-sqilcoPink text-white"
          placeholder="Password"
        />
        <div className="absolute right-0 top-3 pr-3 pt-1 text-xl text-white" onClick={TogglePassword}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </div>
      </div>
      {errors.password && touched.password && (
        <div className="text-red-500 mb-4">{errors.password}</div>
      )}     
   
      <button type="submit" className="w-full text-lg text-white py-3 font-semibold rounded-lg bg-gradient-to-r from-sqilcoPink to-sqilcoOrange hover:from-sqilcoOrange hover:to-sqilcoPink">
        Login to my account
      </button>
    </Form>
  )}
</Formik>

          <div className="text-center text-white font-semibold m-2 josefin-sans-font">Or continue with</div>
          <div className='other-signin-options flex justify-around items-center '>
            {/* Your social login icons */}
            <GoogleIcon/>
              <FacebookIcon/>
              <AppleIcon/>
          </div>
          <span className="text-white text-lg">New here? <Link href="/Register" className="text-gradient-pink-orange font-semibold">Sign Up</Link></span>
        </div>
      </div>
      <div className="justify-center items-center hidden md:block">
        {/* Your image or illustration */}
        <div className="w-full">
            {/* <Image
              src={IndianStudent}
              alt="Indian Student"
              width={600}
              height={800}
            /> */}
            <LoginIllustration />
          </div>
      </div>
    </div>
    </>
  );
}
