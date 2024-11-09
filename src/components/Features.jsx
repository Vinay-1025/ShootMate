import React from 'react';
import Img from '../assets/rgukt.jpg';

const Features = () => {
    return (
        <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='feature'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-2/4'>
                    <h1 className='text-2xl text-primary font-bold lg:w-2/2 mb-3'>
                        Why we are better than others
                    </h1>
                    <p className='text-base text-teritary'>
                        jhfigf igxdhx iw xiw aswi wefivw eiwef xewifbx we iw3ufgebce xicfb
                        hwefigf xeiurs wfgs weifweifs wfiuegfs eife ws
                    </p>
                </div>
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-5'>
                        <div className='bg-teritary rounded-[15px] flex h-96 items-center justify-center hover:-translate-y-4 transition-transform duration-300 cursor-pointer'>
                            <div>
                                <img src={Img} alt="Feature" />
                                <h5 className='text-1xl font-semibold text-primary px-5 text-center mt-5'>Convenient Study Schedule</h5>
                            </div>
                        </div>
                        <div className='bg-teritary rounded-[15px] flex h-96 items-center justify-center hover:-translate-y-4 transition-transform duration-300 cursor-pointer md:mt-16'>
                            <div>
                                <img src={Img} alt="Feature" />
                                <h5 className='text-1xl font-semibold text-primary px-5 text-center mt-5'>Professional Equipment</h5>
                            </div>
                        </div>
                        <div className='bg-teritary rounded-[15px] flex h-96 items-center justify-center hover:-translate-y-4 transition-transform duration-300 cursor-pointer'>
                            <div>
                                <img src={Img} alt="Feature" />
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
