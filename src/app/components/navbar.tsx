import React from 'react'

export default function NavBar({isOpen, toggleSideBar} : {isOpen: boolean, toggleSideBar: (value: boolean) => void}) {
  return (
    <div className={`w-full h-fit px-5 py-1 bg-background fixed border-b border-gray-300 flex items-center gap-x-10`}>
        <button type="button" title={`${isOpen? 'Close Menu' : 'Open Menu'}`} onClick={() => toggleSideBar(true)} className={`${isOpen? 'hidden' : 'block'}`}>
          <i className={`ri-menu-line text-xl`} />
        </button>
        <h1 className={`text-lg font-medium`}>Notō <i className={`ri-booklet-line font-normal`}/></h1>
    </div>
  )
}
