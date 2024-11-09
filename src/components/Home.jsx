import React from 'react';
import Hero from '../assets/undraw1.svg';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20' id='home'>
            <div className='gradientbg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                    <div>
                        <img src={Hero} className='lg:h-[250px] lg:w-[550px] md:w-[400px] md:h-[200px]' />
                    </div>
                    <div className='md:w-3/5'>
                        <h2 className='md:text-2xl text-1xl font-bold text-primary loading-relaxed'>ShootMate</h2>
                        <span className='text-xl font-semibold text-secondary'>Your Perfect Shot, Simplified.</span>
                        <p className='text-[#SDEDED] text-1xl mb-8 mt-5 text-justify'>ShootMate is a dedicated platform that transforms the way students and photographers connect within your college. Designed to simplify the photoshoot booking process, ShootMate offers a seamless solution for finding and reserving photographers for all your college events and personal shoots.
                        </p>
                        <div className='space-x-5 space-y-4'>
                            <Link to='feature' spy={true} smooth={true} offset={-100}>
                                <button className='py-2 px-5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get Started</button>
                            </Link>
                            <Link to='pricing' spy={true} smooth={true} offset={-100} >
                                <button className='py-2 px-5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Pricing</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
