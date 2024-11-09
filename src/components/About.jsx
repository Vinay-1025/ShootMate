import React from 'react';
import AboutImg from '../assets/rgukt.jpg'; // Ensure this path is correct

const About = () => {
    return (
        <div className='md:px-14 p-4 max-w-screen mx-auto space-y-10' id='about'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5 mb-20'>
                <div className='md:w-1/2'>
                    <img src={AboutImg} alt="About" />
                </div>

                <div className='md:w-3/5'>
                    <h2 className='md:text-3xl text-2xl font-bold text-primary mb-5 loading-normal'>
                        We have been improving our Product <span className='text-secondary'>for many years!</span>
                    </h2>
                    <p className='text-teritary text-lg mb-7'>
                        hfrciuweh ewicxiwxbjew bxicbwix bcifbx eb xkcehbfxo bf diwbz qbibx cwechewvx zifbx v exzebfxvz
                        xw uvc ixb webwxcfxow fxw xibfx w xehvoebf 
                    </p>
                    <button className='py-2 px-5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>
                        Get Started
                    </button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-5'>
                <div className='md:w-1/2'>
                    <img src={AboutImg} alt="About" />
                </div>

                <div className='md:w-2/5'>
                    <h2 className='md:text-3xl text-2xl font-bold text-primary mb-5 loading-normal'>
                        We have been improving our Product <span className='text-secondary'>for many years!</span>
                    </h2>
                    <p className='text-teritary text-lg mb-7'>
                        hfrciuweh ewicxiwxbjew bxicbwix bcifbx eb xkcehbfxo bf diwbz qbibx cwechewvx zifbx v exzebfxvz
                        xw uvc ixb webwxcfxow fxw xibfx w xehvoebf 
                    </p>
                    <button className='py-2 px-5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    );
};

export default About;
