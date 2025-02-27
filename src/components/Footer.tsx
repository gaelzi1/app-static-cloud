import React from 'react'
import Logo from '../img/Logo.png';
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#ededed] text-black p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Sección de Redes Sociales */}
        <div className="mb-4 md:mb-0 mr-20 pr-20 ">
         
          <img src={Logo.src} alt="Logo" className="w-16 mb-2 w-20  " />
          <p className="font-semibold">Síguenos en:</p>
          <div className="flex space-x-3 mt-2 text-2xl">
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
            <FaYoutube />
            <FaPinterest />
          </div>
          
        </div>

        {/* Secciones del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div>
            <h3 className="font-bold mb-2">Servicio para mascotas</h3>
            <ul>
              <li>Entrenamiento</li>
              <li>Blog</li>
              <li>Adopción</li>
              <li>Veterinarios</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Categorías</h3>
            <ul>
              <li>Perro</li>
              <li>Gato</li>
              <li>Pequeños mamíferos</li>
              <li>Aves</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Enlaces de interés</h3>
            <ul>
              <li>Aviso de privacidad</li>
              <li>Términos y condiciones</li>
              <li>Políticas de envío</li>
              <li>Proveedores</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
