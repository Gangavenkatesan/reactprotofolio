


import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between px-5 py-2 bg-main">
      <a className="font-bold text-black" href="#">Ganga</a>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
          
        </ul>
      </nav>
      <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
        <Bars3Icon className="text-white h-5" />
      </button>
      {toggleMenu && (
        <nav className="absolute top-12 left-0 w-full bg-main md:hidden">
          <ul  onClick ={()=>setToggleMenu(!toggleMenu)}className="flex flex-col items-center text-black space-y-2 py-2">
            <li><a href="/">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Resume">Resume</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
