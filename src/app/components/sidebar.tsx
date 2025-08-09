'use client'

import React, {useState} from 'react'
import NavBar from './navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ModeButton from './button/mode-button';

export default function SideBar({children} : {children: React.ReactNode}) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSideBar = ():void => {
      setIsOpen(!isOpen);
  }

  const pathName = usePathname();

  const paths = [
    { path: '/', name: 'Home' },
    { path: '/dummy', name: 'Dummy' },
  ]

  return (
    <div className={`w-full h-full flex flex-row transition-all `}>
      <div className={`${isOpen? 'block lg:hidden' : 'hidden'} translate-0 fixed w-full h-full bg-black opacity-50 z-10`}></div>
      <div className={`${isOpen? 'translate-x-0 visible' : '-translate-x-full invisible'} fixed px-5 py-1 bg-background min-w-52 w-52 h-full z-20 border-r-1 border-r-gray-200 flex flex-col items-start transition-all`}>
        <button title={`${isOpen? 'Close Menu' : 'Open Menu'}`} onClick={toggleSideBar}>
          <i className={`ri-menu-fold-line text-xl`} />
        </button> 
        {
          ...paths.map((route, index) => {
            return (
              <Link href={route.path} className={`flex gap-x-5 items-center py-1`} key={index}>
                <span className={`text-sm w-fit ${route.path === pathName ? 'font-semibold' : 'font-normal'}`}>{route.name}</span>
              </Link>
            )
          })
        }
        <ModeButton />
      </div>
      <div className={`${isOpen? 'block' : 'hidden'} min-w-52 w-52`}></div>
      <div className={`w-full h-full`}>
        <NavBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
        { children }
      </div>
    </div>
  )
}
