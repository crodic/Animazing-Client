import Image from 'next/image'
import React from 'react'

const TagInfo = () => {
    return (
        <section className='hidden w-full bg-card text-card-foreground p-4 rounded-md md:flex gap-5'>
            <Image src="/artwork.png" alt='' width={150} height={100} className='object-cover aspect-square object-top rounded-md' />
            <div className='space-y-2'>
                <h4 className='text-xl font-semibold'>Jingliu</h4>
                <span className='block text-base text-muted-foreground/60'>12.873 works</span>
                <p className='text-sm font-normal line-clamp-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequuntur, enim molestias quaerat natus minima unde porro quisquam qui soluta ipsa perferendis doloremque, alias laboriosam dicta ut nulla officiis atque error, quae saepe sequi nemo. Ipsam, illum, blanditiis similique nulla optio consequuntur cumque nam dignissimos error autem sapiente, sequi saepe?</p>
            </div>
        </section>
    )
}

export default TagInfo