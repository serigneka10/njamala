import React from 'react'

export default function page () {
  return (
    <div className='mt-7'>
         <section className="bg-black px-6 py-20 space-y-6">
       <div className='flex'>
        <p className='font-extrabold text-gray-800'>Accueil /</p>  
        <p className='font-extrabold text-white'>Blog /</p> 
       </div>
       <p className='bg-amber-300 font-extrabold px-2 py-1 rounded-2xl text-white inline-block'>Articles et Guides</p>
       <p className='text-5xl font-extrabold text-white'>Blog <span className='text-amber-400'>Njamala</span></p>
       <p className='text-2xl text-white'>Actualités, guides dachat et conseils shopping au Sénégal</p>
      </section>
      
      <div className='bg-white flex flex-col justify-center items-center p-24'>
<p className='text-2xl font-extrabold'>Aucun article pour le moment.</p>

<p className='text-xl text-gray-500 font-extrabold'>Revenez bientôt !</p>
      </div>
    </div>
  )
}
