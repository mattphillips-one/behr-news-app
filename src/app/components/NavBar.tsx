'use client';

import Link from "next/link";
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { fonts } from "./ui/fonts";
import { useRef, useState } from 'react';

const navItems = {
  '/': "home",
  '/about': "about"
}

export default function Navbar() {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  function toggleSideMenu() {
    setIsVisible(!isVisible);
  }
  function closeSideMenu() {
    setIsVisible(false);
  }


  return (
    <nav className="z-50">
    <div className='flex flex-row items-center md:items-baseline w-full text-white border-b-1 border-neutral-300 dark:border-neutral-500 px-5 pb-2 justify-between bg-neutral-900 dark:bg-neutral-950'>
      <a href='/' className={`${fonts.stix} font-bold text-white text-xl md:text-2xl w-3/4 md:w-full text-left pt-3`}>
        Business Environment & Human Rights News
      </a>
      
      <div className='hidden md:flex flex-row gap-5'>
        {Object.entries(navItems).map(([key, value]) => (
          <Link className={`${fonts.noto_sans} font-medium hover:text-neutral-400 md:active:text-neutral-400`}
            href={key}
            key={key}
          >
            {value}
          </Link>
        ))}
      </div>

      <button className='w-6 md:hidden cursor-pointer'
        onClick={toggleSideMenu}
      >
        <Image className='invert'
          src={isVisible ? assets.close_black : assets.menu_black}
          alt='menu icon'
        />
      </button>
    </div>
    {isVisible ? 
        <SideMenu closeMenu={closeSideMenu}/>
      : null
    }
    </nav>
  )
}

const SideMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className='w-full z-50 bg-neutral-900 dark:bg-neutral-950'>
      <ul className={`flex flex-row gap-5 py-3 ${fonts.outfit} justify-center items-center border-b-1 dark:border-neutral-500`}>
        {Object.entries(navItems).map(([key, value]) => {
          return (
            <li key={key}><a className={`font-normal text-lg text-white active:text-neutral-500`} onClick={closeMenu} href={key}>{value}</a></li>
          )
        })}
      </ul>
    </div>
  );
};