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
        {/* HEADER */}
        <div className=' h-96 overflow-hidden' >
          <div className='h-full flex justify-center items-center bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
            <h1 className='text-white text-7xl '>
              101 Holiday Inn
            </h1>
          </div>
        </div>
        {/* HEADER */}
        {/* DESCRIPTION */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        <div className='bg-white w-[70%] p-3 rounded shadow'>
            {/* RESTORANT NAVBAR */}
            <nav className='flex pb-2 border-b text-reg'>
              <a href="" className='mr-7'>Overview</a>
              <a href="" className='mr-7'>Menu</a>
            </nav>
            {/* RESTORANT NAVBAR */}
            {/* MENU */}
            <main className="bg-white mt-5">
             <div>
              <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">
                    Menu
                  </h1>
              </div>
              <div className="flex flex-wrap justify-between">
                  {/* MENU CARD */}
                  <div className="border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg">
                      Surf and Turf
                    </h3>
                    <p className="font-light mt-1 text-sm">
                      A well done steak with lobster and rice
                    </p>
                    <p className="mt-7">$80</p>
                  </div>
                  {/* MENU CARD */}
              </div>
             </div>
            </main>
            {/* MENU */}
        </div>
        </div>
      </main>
    </main>
  )
}
