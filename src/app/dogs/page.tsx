"use client"
import BtnSelect from '@/components/BtnSelect'
import SelectBox from '@/components/SelectBox'
import { dogs } from '@/constants/animals'
import React, { useState } from 'react'

export default function page() {
  const [selected, setSelected] = useState('')
      const dogsImgs = dogs
  return (
        <section className='flex flex-col items-center justify-around  h-full'>
            <SelectBox select={selected} setSelect={setSelected} animals={dogs}/>
            <BtnSelect/>
        </section>
  )
}
