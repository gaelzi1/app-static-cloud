import { cats } from '@/constants/animals';
import Image from 'next/image';
import React from 'react';

interface SelectBoxProps {
    select:string,
    setSelect: (value:string) => void
}

const SelectBox = ({select, setSelect}: SelectBoxProps) => {
  const catsImgs = cats;
  return (
    <div className='flex flex-row flex-wrap justify-around w-full'>
      {catsImgs.map((cat, index) => (
        <div
          key={index}
          className={`w-[30vw] h-[50vh] flex justify-center items-center cardAnimal ${cat.name === select && 'cardAnimalSelect'}`}
          onClick={()=>setSelect(cat.name)}
        >
          <div className='relative w-[17vw] h-[40vh] m-2'>
            <Image
              src={cat.href}
              alt=''
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectBox;