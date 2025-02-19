import React from 'react';
import Logo from '../img/Logo.png';
export default function Header (){
    return (
        <header className='flex space-x-4 items-center justify-between p-4 px-10 '>
           <img src={Logo.src} alt="Logo" className="w-20 h-20 rounded-full" />
           <div className='flex space-x-12 text-base fomt-popins'>
           <p >Perros</p>
           <p>Gatos</p>
           <p>Nuestra historia</p>
           </div>
        </header>
    );
}
