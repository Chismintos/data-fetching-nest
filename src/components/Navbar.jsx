'use client'

import Link from 'next/link'
import React from 'react'
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react';
import { PopoverButtonProps } from '@headlessui/react';

import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import { BiCalendarEdit } from "react-icons/bi";
import {LuBadgeInfo} from 'react-icons/lu'


const Navbar = () => {
  return (
    <nav>
      <header>
    
      {/* Responsive Navbar  */}  
      <Popover className=' hidden sm:flex bg-blue-200 h-20 text-lg font-bold justify-evenly  '>

          <div className=''>
            <img  src="https://images.vexels.com/media/users/3/319206/isolated/lists/dda922dc54b34944b310af368fbb5137-capybara-with-a-bird-atop-its-back-flat-image.png" 
                  alt="logo empresa" 
                  width="90" height="90"
                  className='p-2'
                  />
          </div>

          {/* Primer div (enlaces) */}
          <div className='hidden  space-x-10 items-center font-bold sm:flex md:space-x-20 lg:space-x-28 '>
            <Link href={'/'}>Homepage</Link>
            <Link href={'/dummyapi'}>DummyApi</Link>
            <Link href={'/fakestoreapi'}>FakeStopreApi</Link>
          </div>

          {/* Segundo div (Login | Signin) */}
          <div className='hidden md:flex '>
            <button className=' '> Sign in | Sign up </button>
          </div>
          
      </Popover>
      

      {/*Responsive Menu*/}

      <Popover className='sm:hidden font-bold bg-blue-200 h-20 flex justify-between  '>

        <Popover.Button className='text-3xl  p-6 '>
          <AiOutlineMenu />
        </Popover.Button>

        <div className='items pr-5'>
            <img  src="https://cdn.discordapp.com/attachments/1159699541164036137/1162466839117434890/pngwing.com_1.png?ex=653c0a9c&is=6529959c&hm=578238e8a6648d740ffb9eca6a65a47f34ace77d3844dc578cd0793209b68ea9&" 
                  alt="idk citas" 
                  width="72" height="72"
                  className='p-2'
                  />
          </div>

        <Popover.Overlay className="fixed inset-0 " />

        <Popover.Panel className=" absolute top-16 w-60 left-7  bg-violet-500 p-5 rounded-md shadow-2xl  ">
          <div className='flex flex-col gap-5 text-white'>
            <div className='flex items-center'>
              <AiFillHome className='text-2xl mr-2' />
              <Link href='/'>Inicio</Link>
            </div>
            <div className='flex items-center'>
              <BiCalendarEdit className='text-2xl mr-2' />
              <Link href='/citas'>Agendar cita</Link>
            </div>
            <div className='flex items-center'>
              <LuBadgeInfo className='text-2xl mr-2' />
              <Link href='/acercade'>Acerca de</Link>
            </div>
          </div>
        </Popover.Panel>

        
      </Popover>


     
   </header>
    </nav>
  )
}

export default Navbar
