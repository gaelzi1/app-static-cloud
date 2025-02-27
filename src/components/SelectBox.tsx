import Image from 'next/image';
import React from 'react';

interface SelectBoxProps {
    select:string,
    setSelect: (value:string) => void
    animals: {name:string, href:string}[]
}

const SelectBox = ({select, setSelect, animals}: SelectBoxProps) => {
  const animalsImgs = animals;
  return (
    <div className='flex flex-row flex-wrap justify-around w-full'>
      {animalsImgs.map((animal, index) => (
        <div
          key={index}
          className={`w-[30vw] h-[50vh] flex justify-center items-center cardAnimal ${animal.name === select && 'cardAnimalSelect'}`}
          onClick={()=>setSelect(animal.name)}
        >
          <div className='relative w-[17vw] h-[40vh] m-2'>
            <Image
              src={animal.href}
              alt=''
              layout='fill'
              objectFit='contain'
              className='rounded-lg'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectBox;