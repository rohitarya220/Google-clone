import React from 'react'
import {TbGridDots} from 'react-icons/tb'

import Profile from '../assets/profile-200x200.jpg'
import ProfileRing from '../assets/profile-ring.svg'

const ProfileIcon = () => {
  return (
    <div className=' flex gap-2'>
      <span className=' h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]'>
        <TbGridDots size={20} color='#5f668' />
      </span>
      <span className=' h-10 w-10 relative flex justify-center rounded-full'>
        <img className='absolute' src={ProfileRing} />
        <span className='h-8 w-8 rounded-full overflow-hidden'>
           <img className='h-full w-full object-cover' src={Profile} />
        </span>
      </span>

    </div>
  )
}

export default ProfileIcon