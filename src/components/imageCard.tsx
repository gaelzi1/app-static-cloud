
import Image from "next/image";
import streetDog from "../img/streetDog.jpg";

const ImageCard = () => {
  return (
    <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg w-full h-full"> 
      <Image
        src={streetDog.src}
        alt="Dog"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
        <div className="text-right w-full mb-2">
          <span className="text-5xl font-bold">Cambiando</span>
          <br />
          <span className="text-5xl font-bold">vidas</span>
        </div>
        <button className="bg-black text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-white hover:text-black transition-all">
          conoce más
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
