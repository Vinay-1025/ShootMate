import React from 'react';
import Hero from '../assets/rgukt.jpg';


const Home = () => {
    return (
        <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20' id='home'>
            <div className='gradientbg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                    <div>
                        <img src={Hero} className='lg:h-[250px] lg:w-[550px] md:w-[400px] md:h-[200px]' />
                    </div>
                    <div className='md:w-3/5'>
                        <h2 className='md:text-2xl text-1xl font-bold text-primary mb-6 loading-relaxed'>Training & Placement Cell</h2>
                        <p className='text-[#SDEDED] text-1xl mb-8'>A good kjbfrjhcfkje hxwf kjkfxkehrf xrx fkjbf xkherfkj xjfbwekhvf jxbw
                            c wgerjfchjxbkbiuxiux wk xk bwbfx qxkwjxf fwkx  cxihi3bwx jfwrfbkhx weight
                        </p>
                        <div className='space-x-5 space-y-4'>
                            <button className='py-2 px-5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get Started</button>
                            <button className='py-2 px-5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Discount</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
