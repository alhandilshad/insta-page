import Link from 'next/link';
import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { TbMessageCircleBolt } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { FiPlusSquare } from "react-icons/fi";
import { FaThreads } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";

const SideNavbar = () => {
  return (
    <>
    <div className='w-[16%] h-[100vh] border-r-[1px] border-gray-200'>
        <img src='/download (1).png' className='h-[34px] w-[110px] mt-8 ml-5' />
        <div className='flex flex-col ml-5 gap-7 mt-8'>
            <div className='flex items-center gap-3'>
                <GoHomeFill className='text-[30px]' />
                <Link href="#" className='font-bold'>Home</Link>
            </div>
            <div className='flex items-center gap-3'>
                <IoSearchOutline className='text-[30px]' />
                <Link href="#">Search</Link>
            </div>
            <div className='flex items-center gap-3'>
                <MdOutlineExplore className='text-[30px]' />
                <Link href="#">Explore</Link>
            </div>
            <div className='flex items-center gap-3'>
                <BsCameraReels className='text-[30px]' />
                <Link href="#">Reels</Link>
            </div>
            <div className='flex items-center gap-3'>
                <TbMessageCircleBolt className='text-[30px]' />
                <Link href="#">Messages</Link>
            </div>
            <div className='flex items-center gap-3'>
                <GoHeart className='text-[30px]' />
                <Link href="#">Notification</Link>
            </div>
            <div className='flex items-center gap-3'>
                <FiPlusSquare className='text-[30px]' />
                <Link href="#">Create</Link>
            </div>
            <div className='flex items-center gap-3'>
                <img src='/download.jfif' className='w-[25px] h-[25px] rounded-full' />
                <Link href="#">Create</Link>
            </div>
            <div className='flex items-center gap-3 mt-12'>
                <FaThreads className='text-[30px]' />
                <Link href="#">Threads</Link>
            </div>
            <div className='flex items-center gap-3'>
                <AiOutlineMenu className='text-[30px]' />
                <Link href="#">More</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideNavbar;