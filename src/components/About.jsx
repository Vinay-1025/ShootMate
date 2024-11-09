import React from 'react';
import AboutImg from '../assets/undraw4.svg'; // Ensure this path is correct
import AboutImg2 from '../assets/undraw5.svg';

const About = () => {
    return (
        <div className='md:px-14 p-4 max-w-screen mx-auto space-y-10' id='about'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5 mb-20'>
                <div className='md:w-1/2'>
                    <img src={AboutImg} alt="About" className='md:h-[400px] md:w-[100%] p-5'/>
                </div>

                <div className='md:w-3/5'>
                    <h2 className='md:text-3xl text-2xl font-bold text-primary mb-5 loading-normal'>
                    How ShootMate Benefits <span className='text-secondary'>Photographers !</span>
                    </h2>
                    <p className='text-teritary text-lg mb-7 text-justify'>
                    ShootMate simplifies photography bookings by helping photographers manage profiles, display their work, and set availability. The platform ensures easy scheduling, clear communication with clients, and a seamless booking experience. Photographers can showcase their equipment, receive ratings, and increase their visibility within the college community.
                    </p>
                    <button className='py-2 px-5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>
                        Get Started
                    </button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-5'>
                <div className='md:w-1/2'>
                    <img src={AboutImg2} alt="About" className='md:h-[400px] md:w-[100%] p-5 ' />
                </div>

                <div className='md:w-2/5'>
                    <h2 className='md:text-3xl text-2xl font-bold text-primary mb-5 loading-normal'>
                    Why ShootMate is the <span className='text-secondary'>Best Choice for Users !</span>
                    </h2>
                    <p className='text-teritary text-lg mb-7 text-justify'>
                    ShootMate allows users to easily find and book photographers based on their needs. With real-time availability shown on an interactive calendar, users can quickly schedule sessions. The platform’s review system ensures users can make informed decisions by reading feedback from past clients. Communication between users and photographers is streamlined, making the booking process smooth for both personal and event photoshoots.
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
