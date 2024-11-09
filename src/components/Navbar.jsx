import React, { useState } from 'react'
import logo from '../assets/rgu.png';
import { GrLanguage } from "react-icons/gr";
import { BiSolidDashboard, BiX } from "react-icons/bi";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];



    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex space-x-14 items-center'>
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                            <img src={logo} alt="logo" className='w-10 inline-block' />
                            <span>Sxyz</span>
                        </a>

                        <ul className='md:flex space-x-12 hidden'>
                            {navItems.map(({ link, path }) => (
                                <Link key={link} activeClass='active' spy={true} smooth={true} offset={-100} to={path} className='block hover:text-[#212EA0] cursor-pointer'>
                                    {link}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center hover:text-secondary'>
                            <GrLanguage className='mr-2' />
                            <span>Language</span>
                        </a>
                        <button className='bg-secondary text-white py-2 px-4 transition-all duration-100 rounded hover:text-white hover:bg-indigo-600'>
                            SignUp
                        </button>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-primary focus:outline-none'>
                            {isMenuOpen ? <BiX className='w-6 h-6 text-primary' /> : <BiSolidDashboard className='w-6 h-6 text-primary' />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`space-y-4 px-4 pt-5 pb-5 bg-secondary text-white fixed top-0 right-0 left-0 z-50 transition-transform duration-300 ${
                    isMenuOpen ? 'block' : 'hidden'
                }`}
            >
                {/* Close Icon at Top Right */}
                <div className='flex justify-end px-4'>
                    <button onClick={toggleMenu} className='text-white'>
                        <BiX className='w-8 h-8' />
                    </button>
                </div>

                {/* Navigation Links */}
                {navItems.map(({ link, path }) => (
                    <Link key={link} activeClass='active' spy={true} smooth={true} offset={-80} to={path} className='block text-white hover:text-gray-300'>
                        {link}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Navbar;