'use client'
import BtnSelect from '@/components/BtnSelect'
import SelectBox from '@/components/SelectBox'
import { cats } from '@/constants/animals'
import React, { useState } from 'react'

const page = () => {
    const [selected, setSelected] = useState('')
    const catsImgs = cats
    return (
        <section className='flex flex-col items-center justify-around  h-full'>
            <SelectBox select={selected} setSelect={setSelected} animals={cats}/>
            <BtnSelect/>
        </section>
    )
}

export default page