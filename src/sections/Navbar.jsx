import React from 'react'
import { navLinks } from '../constants';

const NavItems = () =>{
    return(
        <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
            {navLinks.map(({name,id,href}) => (
                <li key={id} className='text-neutral-400 hover:text-white transition-colors'>
                    <a href={href} className='text-lg md:text-base hover:text-white transition-colors' onClick={() => {}} >{name}</a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const[isOpen, setIsOpen] = React.useState(false);

    /*  you can also use this but is not recomended */
    /* const toggleMenu = () => setIsOpen(!isOpen); */

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className='fixed top-0 left-0 right-0 z-100 bg-black/90'>
      <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">

                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Charles</a>

                <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex transition-colors aria-label="toggle menu">'>
                    <img src={isOpen ? "assets/close.svg":"assets/menu.svg"} className='w-6 h-6' alt="toggle-menu" />
                   
                </button>

                <nav className='sm:flex hidden'>
                    <NavItems/>
                </nav>


            </div>
      </div>

      <div className={`absolute left-0 right-0 bg-stone-950 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block; ${isOpen ? "max-h-screen":"max-h-0"}`}>
        <nav className='p-5'>
            <NavItems/>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
