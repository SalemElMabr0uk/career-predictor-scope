import Link from 'next/link';
import React from 'react';
import "../../app/globals.css"
import Image from 'next/image'
import IndianStudent from '../../public/indian-kid-books.png'
import Navbar from '@/components/Navbar';



export default function Login() {
  return (
    <>
      <Navbar />

        <div className="grid justify-items-center grid-cols-2 justify-between ">
          <div className='justify-center pt-8 ml-24 '>
            <div className="grid  max-w-screen-xl p-5 m-5 justify-start">
          
              <h1 className='font-bold lg:text-5xl text-white '>
               
                <span className="text-pink-10  justify-center">Log </span>  In To <span className="text-orange-10">  Your Account  </span>
              </h1>
              <span className='text-red-100 '>
                    Already A Member?
                  <Link href="/Register" className='text-blue-500'> Sign in </Link> </span>
            </div>


            <div className=" p-6 pt-10 justify-center rounded shadow-md w-100 h-50 ml-16 ">
            <h1 className="text-4xl text-center font-semibold mb-9 text-red-100">Login</h1>
            <form>
              <input
                type="text"
                className="w-full border  border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                placeholder="Email"
                required
              />
              <input
                type="password"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 "
                placeholder="Password"
                required
              />
              <div className=' bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500   hover:to-purple-400'>
                <button
                  type="submit"
                  className="w-full text-white py-2 rounded-full "
                >
                  Login
                </button>
              </div>
            </form>
            <button
              className="w-full bg-black text-white py-2 rounded "
            >
              Sign In with Github
            </button>
            <div className="text-center text-gray-500 "> - OR - </div>
            <Link className="block text-center text-blue-500 hover:underline mt-2" href="/Register">
              Register Here
            </Link>


          </div>
          
          </div>

          <div className=' flex flex-1 items-start '>
            <div className='h-full w-full relative z-20 flex-col gap-8 rounded-3xl px-2 py-8 '>
              <Image
                src={IndianStudent}
                alt="Indian Student"
                width={600}
                height={800}
              />
            </div>
          </div>
          <div></div>



        </div>
      
    </>
  );

}
