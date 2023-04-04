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
                <button className='bg-red-700 px-9 py-2 rounded ml-3'>Let's go</button>
              </div>
              {/* SearchBar */}
            </div>
          </div>
          {/* Header */}
          {/* CARDS */}
          <div className='felx justify-wrap py-5 m-10'>
            {/* CARD */}
            <div></div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
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
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  )
}
