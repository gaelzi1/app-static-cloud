import React from 'react'
import Dog from '@/img/dogAboutUs.svg';
const page = () => {
  return (
   <div className="flex flex-between items-center font-poppins">
    <div className='w-1/2 pl-12 pr-12'>
    <h3 className=''>Nuestra Historia</h3>
   <p className=''>Todo comenzó con un simple deseo: darle un hogar amoroso a cada mascota necesitada. Paws & Home nació cuando un grupo de amantes de los animales vio la cantidad de perros y gatos sin hogar en refugios y calles. Nos dimos cuenta de que muchas personas querían adoptar, pero no sabían cómo empezar.
      Así que creamos un es 💕</p>
      </div>
      <div>
        <img className='pl-12' src={Dog.src} alt="" />
      </div >
   </div>

  )
}

export default page