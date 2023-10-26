import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const navIcons = [
  { src: 'assets/icons/search.svg', alt: 'Busca' },
  { src: 'assets/icons/black-heart.svg', alt: 'Coração' },
  { src: 'assets/icons/user.svg', alt: 'Usuário' },

]

const Navbar = () => {
  return (
    <header className='w-full bg-slate-300 fixed z-50'>

      <nav className='nav '>
        <Link href={"/"} className='flex items-center gap-1'>

          <Image title='PreçoSábio' alt='Logomarca' width={27} height={27} src={"/assets/icons/logo.svg"} />

          <p className='nav-logo'>Preço<span className='text-primary'>Sábio</span></p>
        </Link>

        <div className="flex item-center gap-5">
          {navIcons.map((icon) => (

            <img src={icon.src} alt={icon.alt} width={30} height={30} className='object-contain  cursor-pointer ease-out duration-300 hover:bg-red-500 rounded-full text-center p-1' />


          ))}

        </div>
      </nav>
    </header>
  )
}

export default Navbar;