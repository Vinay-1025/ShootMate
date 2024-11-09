import React from 'react';
import Img from '../assets/undraw2.svg';
import Img2 from '../assets/undraw6.svg';
import Img3 from '../assets/undraw8.svg';


const Features = () => {
    return (
        <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='feature'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-2/4'>
                    <h1 className='text-2xl text-primary font-bold lg:w-2/2 mb-3'>
                        Why to choose us ?
                    </h1>
                    <p className='text-base text-teritary text-justify mb-5'>
                    ShootMate bridges the gap between photographers and users, making it easier than ever to capture your most cherished moments. Whether you're organizing a major event or planning a casual shoot, ShootMate ensures every experience is professional, convenient, and memorable.
                    </p>
                    <span className='text-secondary font-semibold text-xl'>Features</span>
                    <p className='text-teritary mt-2'>Detailed Photographer Profiles.</p>
                    <p className='text-teritary'>Interactive Availability Calendar.</p>
                    <p className='text-teritary'>Effortless Booking Process.</p>
                    <p className='text-teritary'>Smart Search & Filter Options.</p>
                </div>
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-5'>
                        <div className='bg-white border shadow-xl px-5 rounded-[15px] flex h-96 items-center justify-center hover:-translate-y-4 transition-transform duration-300 cursor-pointer'>
                            <div>
                                <img src={Img} alt="Feature" />
                                <h5 className='text-1xl font-semibold text-primary px-5 text-center mt-5'>Convenient Shoots</h5>
                            </div>
                        </div>
                        <div className='bg-white border shadow-xl px-5 rounded-[15px] flex h-96 items-center justify-center hover:-translate-y-4 transition-transform duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={Img2} alt="Feature" />
                                <h5 className='text-1xl font-semibold text-primary px-5 text-center mt-5'>Professional Intakes</h5>
                            </div>
                        </div>
                        <div className='bg-white border shadow-xl px-5 rounded-[15px] flex h-96 items-center justify-center hover:-translate-y-4 transition-transform duration-300 cursor-pointer'>
                            <div>
                                <img src={Img3} alt="Feature" />
                                <h5 className='text-1xl font-semibold text-primary px-5 text-center mt-5'>Expert Guidance</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
