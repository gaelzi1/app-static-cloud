'use client'
import BtnSelect from '@/components/BtnSelect'
import SelectBox from '@/components/SelectBox'
import React, { useState } from 'react'

const page = () => {
    const [selected, setSelected] = useState('')
    return (
        <section className='flex flex-col items-center justify-around  h-full'>
            <SelectBox select={selected} setSelect={setSelected} />
            <BtnSelect/>
        </section>
    )
}

export default page