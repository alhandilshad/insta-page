import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { TbMessageCircleBolt } from "react-icons/tb";
import { LuSend } from "react-icons/lu";

const Post = () => {
  return (
    <>
    <div className='flex flex-col items-center ml-32 mt-7'>
    <div className='flex text-center gap-4'>
        <div>
            <img src='/download.jfif' className='h-[65px] w-[65px] rounded-full border-[3px] p-[2px] border-pink-500'></img>
            <h1 className='text-[12px]'>Alhandil...</h1>
        </div>
        <div>
            <img src='/download (1).jfif' className='h-[65px] w-[65px] rounded-full border-[3px] p-[2px] border-pink-500'></img>
            <h1 className='text-[12px]'>Anandfalah..</h1>
        </div>
        <div>
            <img src='/download (4).jfif' className='h-[65px] w-[65px] rounded-full border-[3px] p-[2px] border-pink-500'></img>
            <h1 className='text-[12px]'>jerry....</h1>
        </div>
        <div>
            <img src='/download (2).jfif' className='h-[65px] w-[65px] rounded-full border-[3px] p-[2px] border-pink-500'></img>
            <h1 className='text-[12px]'>johnbikes..</h1>
        </div>
        <div>
            <img src='/download (5).jfif' className='h-[65px] w-[65px] rounded-full border-[3px] p-[2px] border-pink-500'></img>
            <h1 className='text-[12px]'>hunaindil..</h1>
        </div>
        <div>
            <img src='/download (6).jfif' className='h-[65px] w-[65px] rounded-full border-[3px] p-[2px] border-pink-500'></img>
            <h1 className='text-[12px]'>ahsansuo...</h1>
        </div>
        <div>
            <img src='/download (3).jfif' className='h-[65px] w-[65px] rounded-full border-[3px] p-[2px] border-pink-500'></img>
            <h1 className='text-[12px]'>cherrry...</h1>
        </div>
        <div>
            <img src='/download (7).jfif' className='h-[65px] w-[65px] rounded-full border-[3px] p-[2px] border-pink-500'></img>
            <h1 className='text-[12px]'>popatlal..</h1>
        </div>
    </div>
    <div className='w-[75%] h-[92vh] flex flex-col mt-6'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img src='/download (7).jfif' className='h-[50px] w-[50px] rounded-full'></img>
                <h1 className='pl-4'><span className='font-semibold'>therealpcb</span> .2m</h1>
            </div>
            <div>
                <BsThreeDots />
            </div>
        </div>
        <div className='mt-3'>
            <img src='/download.jpg' className='w-full'></img>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <div className='flex items-center gap-3'>
                <GoHeart className='text-[30px]' />
                <TbMessageCircleBolt className='text-[30px]' />
                <LuSend className='text-[30px]' />
            </div>
            <div>
                <img src='/download (3).png' className='w-[28px] h-[28px]'></img>
            </div>
        </div>
        <div>
            <h1 className='font-semibold text-[14px] pt-3'>185 likes</h1>
            <h1><span className='font-semibold pt-3'>therealpcb</span>   Babar Azam is a very good player</h1>
        </div>
    </div>
    </div>
    </>
  )
}

export default Post;