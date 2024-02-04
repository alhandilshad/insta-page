import Post from '@/components/Post';
import SideNavbar from '@/components/SideNavbar';
import Suggest from '@/components/Suggest';
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
      <SideNavbar />
      <Post />
      <Suggest />
    </div>
  )
}

export default page;