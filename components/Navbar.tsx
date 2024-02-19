import { NAV_LINKS } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import * as React from "react";
import Button from './Button'
import {NextUIProvider} from '@nextui-org/react';
import {useRouter} from 'next/navigation';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark flexBetween max-container padding-container relative z-30 py-5">

        <Link href="/">
           <Image
            src="/sqilco.svg"
            alt='Sqilco-logo'
            width={74}
            height={29}
           />
        </Link>


        <Link href="/Register" aria-current="page">
        <p className="navbar-brand" style={{ color: 'white', fontWeight: 'bold' }}>Register</p>
        </Link>

      
        <Link className="navbar navbar-light bg-light" href="/Login" aria-current="page">
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