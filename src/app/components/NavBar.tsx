'use client';

import Link from "next/link";
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { fonts } from "./ui/fonts";
import { useRef } from 'react';

const navItems = {
  '/': "home",
  '/about': "about"
}

export default function Navbar() {

  const sideMenuRef = useRef<HTMLDivElement>();

  function openSideMenu() {
    sideMenuRef.current!.style.transform = 'translateX(-16rem)';
  }
  function closeSideMenu() {
    sideMenuRef.current!.style.transform = 'translateX(16rem)';
  }


  return (
    <nav className='flex flex-row items-center md:items-baseline w-full text-white border-b-1 border-neutral-300 dark:border-neutral-500 px-5 pb-2 justify-between bg-neutral-900 dark:bg-black'>
      <a href='/' className={`${fonts.stix} font-bold text-white text-xl md:text-2xl w-3/4 md:w-full text-left pt-3`}>
        Business Environment & Human Rights News
      </a>
      
      <div className='hidden md:flex flex-row gap-5'>
        {Object.entries(navItems).map(([key, value]) => (
          <Link className={`${fonts.noto_sans} font-medium hover:text-neutral-400 md:active:text-black`}
            href={key}
            key={key}
          >
            {value}
          </Link>
        ))}
      </div>

      <button className='w-6 md:hidden cursor-pointer'
        onClick={openSideMenu}
      >
        <Image className='dark:invert'
          src={assets.menu_black}
          alt='menu icon'
        />
      </button>
      <SideMenu ref={sideMenuRef} closeMenu={closeSideMenu}/>
      
    </nav>
  )
}

const SideMenu = ({ref, closeMenu }) => {
  return (
    <div className='flex md:hidden flex-col py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/[.96] dark:bg-black/[.91] transition duration-500'
      ref={ref}
    >
      <div className='absolute right-6 top-7 cursor-pointer'
        onClick={closeMenu}
      >
        <Image className='w-5 dark:invert'
          src={assets.close_black}
          alt=''
        />
      </div>
      <ul className={`flex flex-col gap-5 mt-5 ${fonts.outfit}`}>
        {Object.entries(navItems).map(([key, value]) => {
          return (
            <li key={key}><a className={`font-normal text-lg`} onClick={closeMenu} href={key}>{value}</a></li>
          )
        })}
      </ul>
    </div>
  );
};