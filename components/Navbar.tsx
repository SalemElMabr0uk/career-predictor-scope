import { NAV_LINKS } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import * as React from "react";
import Button from './Button'
import {NextUIProvider} from '@nextui-org/react';
import {useRouter} from 'next/navigation';


const Navbar = () => {
  return (
    <nav className="max-w-screen-xl flex flex-wrap items-center space-x-5 mx-auto p-4">
      
      <div>  <Link href="/" className=' rtl:space-x-reverse flex items-center h-8 '>
           <Image
            src="/sqilco.svg"
            alt='Sqilco-logo'
            width={74}
            height={29}
           />
        </Link>
    </div>
      
<div></div>
      
        <Link href="/Register"  aria-current="page">
        <p style={{ color: 'white', fontWeight: 'bold' }}>Register</p>
        </Link>

        <Link className="navbar navbar-light bg-light justify-end" href="/Login" aria-current="page">
        <Button
                type="button"
                title="Login"
                variant="btn_pink_orange"
            />
        </Link>

        {/* Uncomment when we have more nav_links */}
        {/* <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))}
        </ul> */}

      
        {/* Uncomment when navLinks Increase */}
        {/* <Image 
        src="menu.svg"
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer hidden'
        /> */}
        
    </nav>
  )
}

export default Navbar