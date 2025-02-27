import React from 'react'
import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import X from '../img/x.svg';
const Footer = () => {
  return (
    <footer className="pb-12 text-gray-600 text-center text-sm">
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
  )
}

export default Footer