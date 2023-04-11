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
            {/* TITLE */}
            <div className='mt-4 border-b pb-6'>
              <h1 className='text-6xl font-bold'>
                101 Holiday Inn
              </h1>
            </div>
            {/* TITLE */}
            {/* RATING */}
            <div className='flex items-end'>
              <div className='mt-2 ratings flex items-center'>
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
                <h3 className='text-reg ml-3'>4.5</h3>
                <h3 className='text-reg ml-3'>600 reviews</h3>
              </div>
            </div>
            {/* RATING */}
        {/* DESCRIPTION */}
        <div className='mt-4'>
          <p className='text-lg font-light'>
            We believe in the commitment to our community and in fostering long-term relationships with locals and tourists. Our menus reflect these connections, featuring local, seasonal produce. Situated in the first line of Altea Beach, with a flowerly terrace, we aim to offer a new experience to our customers
          </p>
        </div>
        {/* DESCRIPTION */}
            {/* IMAGES */}
            <h1 className='font-bold text-3lx mt-10 mb-7 border-b pb-5'>
              7 photos
            </h1>
            <div className='flex flex-wrap'>
              <img className='w-56 h-44 mr-1 mb-1 object-cover rounded' src="https://resizer.otstatic.com/v2/photos/xlarge/2/50334381.jpg" alt="" />
              <img className='w-56 h-44 mr-1 mb-1 object-cover rounded' src="https://resizer.otstatic.com/v2/photos/xlarge/2/50334382.jpg" alt="" />
              <img className='w-56 h-44 mr-1 mb-1 object-cover rounded' src="https://resizer.otstatic.com/v2/photos/xlarge/2/50334383.jpg" alt="" />
              <img className='w-56 h-44 mr-1 mb-1 object-cover rounded' src="https://resizer.otstatic.com/v2/photos/xlarge/2/50334388.jpg" alt="" />
              <img className='w-56 h-44 mr-1 mb-1 object-cover rounded' src="https://resizer.otstatic.com/v2/photos/xlarge/2/50334385.jpg" alt="" />
            </div>
            {/* IMAGES */}
        </div>
        </div>

      </main>
    </main>
  )
}
