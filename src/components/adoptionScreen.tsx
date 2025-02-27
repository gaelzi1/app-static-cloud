'use client'

import React from 'react';
import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import X from '../img/x.svg';
import Shihtzu from '../img/shihtzu.jpg';
import Cat from '../img/cat.jpg';


export default function AdoptionScreen() {
    return (
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Sección superior */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <div className="w-full h-48">
                <img src={Cat.src} alt="Gato en adopción" className="w-48 h-48 rounded-lg" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800">¡Cambia la vida de tu nuevo mejor amigo!</h2>
              <p className="text-gray-600 mt-2">
                Vive de cerca nuestros procesos de adopción de mascotas y descubre lo maravilloso que es hacer la diferencia en la vida de un nuevo compañero de aventuras...
              </p>
            </div>
          </div>
          
          {/* Sección inferior */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 mt-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800">¿Realizaste una adopción en casa?</h2>
              <p className="text-gray-600 mt-2">
                Adoptar una mascota es una experiencia gratificante que beneficia tanto al animal como a su nuevo dueño...
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-48 ">
                <img src={Shihtzu.src} alt="Perro en adopción" className="w-48 h-48 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Pie de página */}
        <footer className="mt-12 text-gray-600 text-center text-sm">
          <p>Síguenos en:</p>
          <div className="flex justify-center gap-4 mt-2">
            <img src={Facebook.src} alt="Logo X" className="w-6 h-6" />
            <img src={X.src} alt="Facebook" className="w-6 h-6" />
            <img src={Instagram.src} alt="Instagram" className="w-6 h-6" />
          </div>
          <div className="mt-4">
            <p className="font-semibold">Servicio para mascotas</p>
            <p className="text-xs">Entrenamiento | Blog | Adopción | Veterinarios</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold">Categorías</p>
            <p className="text-xs">Perro | Gato | Pequeños mamíferos | Aves</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold">Enlaces de interés</p>
            <p className="text-xs">Aviso de privacidad | Términos y condiciones | Políticas de envío | Proveedores</p>
          </div>
        </footer>
      </div>
    );
  }
  