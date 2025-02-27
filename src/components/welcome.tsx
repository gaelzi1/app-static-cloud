import React from 'react';
import Perro from '../img/PerroInicio.png';
export default function Welcome (){
    return (
        <div className="relative flex  flex-col items-center justify-center font-poppins">
            <p className="text-4xl">Comparte conmigo</p>
            <p className="text-[230px] py-3 font-bold">Amor</p>
            <img className='absolute mask-gradient top-10 drop-shadow-[0px_20px_0px_rgba(0,0,0,0.45)]' src={Perro.src} alt="" />
        </div>
    );
}