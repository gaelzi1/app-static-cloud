'use client'
 
import { usePathname } from 'next/navigation'
import React from 'react';
import Logo from '../img/Logo.png';
import { navigate } from '@/constants/navigate';
import Link from 'next/link';

interface HeaderProps {
    path: string;
  }

export default function Header ({path}:HeaderProps){
    const routes = navigate
    return (
        <header className='flex space-x-4 items-center justify-between p-4 px-10 '>
           <Link href='/' className='flex flex-row items-center'>
           <img src={Logo.src} alt="Logo" className="w-20 h-20 rounded-full" />
           </Link>
           <div className='flex space-x-12 text-base fomt-popins'>
            {routes.map((route, index) => (
                 <Link href={route.href} key={index} className={`${path === route.href && 'border-b-2 border-black '}`}><p>{route.name}</p></Link>
            ))}
           </div>
        </header>
    );
}

{/* <p >Perros</p>
           <p>Gatos</p>
           <p>Nuestra historia</p> */}