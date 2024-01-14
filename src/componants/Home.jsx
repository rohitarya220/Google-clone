import React from 'react'
import logo from '../assets/google-logo.png'
import HomeHeader from './HomeHeader'
import SearchInput from './SearchInput'
import Footer from './Footer'



const Home = () => {
  return (
    <div className=' flex h-[100vh] flex-col '>
      <HomeHeader />
      <main className=' flex justify-center grow'>
        <div className='flex flex-col items-center mt-32 w-full px-5'>
          <img className=' w-[172px] md:w-[272] mb-2' src={logo} />
           <SearchInput /> 
            <div className=' flex gap-2 text-[#3c4043] mt-12'>
              <button className=' h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'>
               Google Search
              </button>
              <button className=' h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'>
                i'm feeling great
              </button>
            </div>
        </div>
      </main>
       <Footer />
    </div>
  )
}

export default Home