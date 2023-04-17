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
          <a href="#" className="text-gray-700 font-bold text-2xl"> TableGenie </a>
          <div>
            <div className='flex'>
              <button className='text-white bg-blue-400 border rounded p-1 mr-3'> Sign in</button>
              <button className='text-black border rounded p-1'> Sign up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        {/* Header */}

        <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
          <div className='text-center font-bold mt-10'>
            <h1 className='text-white text-5xl mb-2 font-sans font-brandon'>Find your table for any occasion
            </h1>
            {/* SearchBar */}
            <div className='flex justify-center m-auto py-3 text-left'>
              <input className='bg-white text-gray-400 border rounded p-2 mr-3 w-80' type="text"
                placeholder='Location, Restaurant, or Cuisine' />
              <button className='bg-red-600 px-9 py-2 rounded ml-3 text-white'>Let's go</button>
            </div>
            {/* SearchBar */}
          </div>
        </div>
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <div className='w-1/5'>
            <div className="border-b pb-4">
              <h1 className="mb-2">Region</h1>
              <p className="font-light text-reg">Toronto</p>
              <p className="font-light text-reg">Ottawa</p>
              <p className="font-light text-reg">Montreal</p>
              <p className="font-light text-reg">Kingston</p>
              <p className="font-light text-reg">Niagra</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2">Cuisine</h1>
              <p className="font-light text-reg">Mexican</p>
              <p className="font-light text-reg">Italian</p>
              <p className="font-light text-reg">Chinese</p>
            </div>
            <div className="mt-3 pb-4">
              <h1 className='mb-2'>Price</h1>
              <div className="flex">
                <button className="border w-full font-light rounded-l pb-2">$</button>
                <button className="border-r border-t border-b w-full font-light pb-2">$$</button>
                <button className="border-r border-t border-b w-full font-light rounded-r pb-2">$$$</button>
              </div>
            </div>
          </div>
          {/* Search SideBar */}
          <div className='w-5/6'>
            {/* RESTAURANT CARD */}
            <div className="border-b flex pb-5">
              <img className='rounded w-44' src="https://resizer.otstatic.com/v2/photos/legacy/3/41955669.jpg" alt="" />
            <div className="pl-5">
                <h2 className="text-3xl">
                  Pamelas at Pikes Ibiza
                </h2>
                <div className="flex items-start">
                  <div className="flex mb-2">
                    <svg className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24">
                      <path
                        d="M12 16.56l-5.93 3.61 1.79-6.16L3.34 9.79l6.22-.53L12 3.98l2.44 5.28 6.22.53-4.52 3.22 1.79 6.16L12 16.56z">
                      </path>
                    </svg>
                    <svg className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24">
                      <path
                        d="M12 16.56l-5.93 3.61 1.79-6.16L3.34 9.79l6.22-.53L12 3.98l2.44 5.28 6.22.53-4.52 3.22 1.79 6.16L12 16.56z">
                      </path>
                    </svg>
                    <svg className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24">
                      <path
                        d="M12 16.56l-5.93 3.61 1.79-6.16L3.34 9.79l6.22-.53L12 3.98l2.44 5.28 6.22.53-4.52 3.22 1.79 6.16L12 16.56z">
                      </path>
                    </svg>
                    <svg className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 24 24">
                      <path
                        d="M12 16.56l-2.76 1.67.66-2.27L6.68 9.79l2.76-.24L12 4.95l1.56 3.36 2.76.24-2.11 1.5.66 2.27L12 16.56z">
                      </path>
                    </svg>
                    <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                      <path
                        d="M12 16.56l-5.93 3.61 1.79-6.16L3.34 9.79l6.22-.53L12 3.98l2.44 5.28 6.22.53-4.52 3.22 1.79 6.16L12 16.56z">
                      </path>
                    </svg>
                    <p className="ml-2 text-sm">
                      Exceptional
                    </p>
                  </div>
                </div>
                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Mexican</p>
                    <p className="mr-4">Ottawa</p>
                  </div>
                </div>
                <div className='text-red-600'>
                  <a href="">View More Information</a>
                </div>
            </div>
            </div>
          </div>
          {/* Search SideBar */}
        </div>
        {/* Header */}
      </main>
    </main>
  )
}
