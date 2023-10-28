"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const navIcons = [
  { src: 'assets/icons/search.svg', alt: 'Busca' },
  { src: 'assets/icons/black-heart.svg', alt: 'Coração' },
  { src: 'assets/icons/user.svg', alt: 'Usuário' },

]

const Navbar = () => {


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={` ${isScrolled ? 'bg-red-200 opacity-80 border-b-4 border-b-slate-500 ' : ''}  w-full bg-slate-300 fixed z-50 ease-in-out duration-300`}>

      <nav className={`nav ${isScrolled ? 'h-12 ' : ''} `}>
        <Link href={"/"} className={`flex items-center gap-1 `}>

          <Image title='PreçoSábio' alt='Logomarca' width={27} height={27} src={"/assets/icons/logo.svg"} />



          <p className='nav-logo'>Preço<span className='text-primary'>Sábio</span></p>
        </Link>

        <div className={`flex item-center gap-5 `}>
          {navIcons.map((icon) => (

            <img src={icon.src} alt={icon.alt} width={30} height={30} className='object-contain  cursor-pointer ease-out duration-300 hover:bg-red-500 rounded-full text-center p-1' />


          ))}

        </div>
      </nav>
    </header>
  )
}

export default Navbar;