import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className='bg-white p-2 flex justify-between'>
          <a href="#" className="text-gray-700 font-bold text-2xl" > TableGenie </a>
          <div>
            <div className='flex'>
              <button className='text-white bg-blue-400 border rounded p-1 mr-3'> Sign in</button>
              <button className='text-black border rounded p-1'> Sign up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          {/* Header */}
          <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
            <div className='text-center font-bold mt-10'>
              <h1 className='text-white text-5xl mb-2'>Find your table for any occasion</h1>
              {/* SearchBar */}
              <div className='flex justify-center m-auto py-3 text-left'>
                <input className='bg-white text-gray-400 border rounded p-2 mr-3 w-80' type="text" placeholder='Location, Restaurant, or Cuisine' />
                <button className='bg-red-600 px-9 py-2 rounded ml-3'>Let's go</button>
              </div>
              {/* SearchBar */}
            </div>
          </div>
          {/* Header */}
          {/* CARDS */}
          <div className='felx justify-wrap py-5 m-10 '>
            {/* CARD */}
            <div className='w-64 h-100 bg-black m-2 rounded border overflow-hidden cursor-pointer group hover:transform hover:-translate-y-1 transition duration-200 hover:shadow-md'>
              <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover  max-w-full transition duration-300 transform group-hover:scale-105" src="https://resizer.otstatic.com/v2/photos/wide-medium/1/25981520.jpg" alt="Your image"></img>
              </div>

              <div className='bg-white p-2'>
              <h1 className='text-black text-2xl mb-2'>101 Holiday Inn</h1>
                <div className='bg-white flex justify-between items-start mb-2'>
                  <div className='flex'>
                    <svg className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24"><path d="M12 16.56l-5.93 3.61 1.79-6.16L3.34 9.79l6.22-.53L12 3.98l2.44 5.28 6.22.53-4.52 3.22 1.79 6.16L12 16.56z"></path></svg>
                    <svg className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24"><path d="M12 16.56l-5.93 3.61 1.79-6.16L3.34 9.79l6.22-.53L12 3.98l2.44 5.28 6.22.53-4.52 3.22 1.79 6.16L12 16.56z"></path></svg>
                    <svg className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24"><path d="M12 16.56l-5.93 3.61 1.79-6.16L3.34 9.79l6.22-.53L12 3.98l2.44 5.28 6.22.53-4.52 3.22 1.79 6.16L12 16.56z"></path></svg>
                    <svg className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24"><path d="M12 16.56l-2.76 1.67.66-2.27L6.68 9.79l2.76-.24L12 4.95l1.56 3.36 2.76.24-2.11 1.5.66 2.27L12 16.56z"></path></svg>
                    <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M12 16.56l-5.93 3.61 1.79-6.16L3.34 9.79l6.22-.53L12 3.98l2.44 5.28 6.22.53-4.52 3.22 1.79 6.16L12 16.56z"></path></svg>
                  </div>
                  <h3 className='text-black mb-2 text-right' >1 review</h3>
                </div>
                <div className='text-black pb-2 flex items-start'>
                  <div className='flex items-start justify-between'>
                    <h3 className='mr-3'>Mediterranean</h3>
                    <h3 className='mr-3'>$$$$</h3>
                    <h3 className='mr-3'>Algires</h3>
                  </div>
                </div>
                <div className='text-black mb-2 text-left '>
                  <p className='font-bold text-sm'>Booked N times Today</p>
                </div>
                <div className='flex items-start justify-start mb-2'>
                  <button className='bg-red-600 hover:bg-red-700 py-2 px-1 rounded mr-2'>18:30 PM</button>
                  <button className='bg-red-600 hover:bg-red-700 py-2 px-1 rounded mr-2'>18:30 PM</button>
                  <button className='bg-red-600 hover:bg-red-700 py-2 px-1 rounded'>18:30 PM</button>
                </div>
                <div className='flex items-center justify-center '>
                  <button className='bg-white border text-orange-500 rounded py-2 px-9  w-full' >Find next available</button>
                </div>
              </div>

            </div>
{/*             <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image className="h-48 w-full object-cover md:w-48 max-w-full" src="https://resizer.otstatic.com/v2/photos/wide-medium/1/25981520.jpg" alt="Your image" width={300} height={300}></Image>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Rating:</div>
                  <div className="flex items-center mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-500">
                      <path fill-rule="evenodd" d="M19.392 7.04c.255.248.352.614.252.954l-1.33 4.612c-.19.657-.838 1.106-1.542.986l-4.098-.505c-.54-.067-.975-.502-1.042-1.041L11.43 8.82a.984.984 0 00-.986-.751H5.704c-.657 0-1.224-.411-1.436-1.003L2.366 3.55C2.165 2.992 2.548 2.387 3.145 2.218l4.718-1.617c.6-.206 1.236-.206 1.836 0l4.718 1.617c.597.205.98.81.78 1.367l-1.092 3.168a.983.983 0 00.249.954zM9.83 9.63l-.588 1.704c-.077.224-.296.38-.536.38H6.07a.28.28 0 01-.278-.222L4.587 7.078c-.035-.104.01-.214.111-.282l1.702-1.312c.1-.077.223-.112.345-.097l1.885.232c.104.013.202.062.277.136l1.095 1.11c.074.075.122.173.135.277l.231 1.886c.015.122-.02.245-.097.345z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-yellow-500">
                      <path fill-rule="evenodd" d="M10 12.585L3.316 16.7l1.01-6.037L.415 7.315l6.02-.875L10 1.7l3.565 5.74 6.02.875-4.912 4.348 1.01 6.037L10 12.585z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-gray-400">
                      <path fill-rule="evenodd" d="M10 12.585L3.316 16.7l1.01-6.037L.415 7.315l6.02-.875L10 1.7l3.565 5.74 6.02.875-4.912 4.348 1.01 6.037L10 12.585z" clip-rule="evenodd" />
                    </svg>
                    <span className="text-gray-600 ml-3">4.5 (1,234 reviews)</span>
                  </div>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">City:</div>
                  <div className="text-gray-600 mt-2">Batna</div>
                  <div className="mt-6">
                    <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full">Find next available</button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-900">Le 101 Holiday Inn Algiers - Cheraga Tower</h3>
              </div>
            </div>
 */}            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  )
}
