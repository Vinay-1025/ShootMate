import React, { useState } from 'react';
import { BiCircle, BiInfoCircle } from 'react-icons/bi';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        { name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "Description" },
        { name: "Advance", monthlyPrice: 29, yearlyPrice: 299, description: "Description" },
        { name: "Premium", monthlyPrice: 39, yearlyPrice: 399, description: "Description" },
    ];

    return (
        <div className='md:px-14 p-4 max-w-screen mx-auto py-10' id='pricing'>
            <div className='text-center'>
                <h2 className='md:text-2xl text-1xl font-extrabold text-primary mb-2'>
                    Here are all plans
                </h2>
                <p className='text-teritary md:w-2/3 mx-auto px-4'>
                    A simple paragraph is comprised of three major components. The first is often a declaration sentence.
                </p>

                <div className='mt-16'>
                    <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
                        <span className='mr-8 text-1xl font-semibold'>Monthly</span>
                        <div className='w-14 h-6 bg-gray-300 rounded-full '>
                            <div 
                                className={`w-6 h-6 rounded-full transform transition-all duration-300 ${isYearly ? 'bg-primary translate-x-8' : 'bg-gray-500'}`}
                            ></div>
                        </div>
                        <span className='ml-8 text-1xl font-semibold'>Yearly</span>
                    </label>
                    <input
                        type="checkbox"
                        id="toggle"
                        className='hidden'
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                    />
                </div>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
                {
                    packages.map((pkg, index) => <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-2xl'>
                        <h3 className='text-2xl font-bold text-center text-primary'>{pkg.name}</h3>
                        <p className='text-primary text-center my-5'>{pkg.description}</p>
                        <p className='mt-5 text-center text-secondary text-2xl font-bold'>
                            {isYearly ? `₹${pkg.yearlyPrice}` : `₹${pkg.monthlyPrice}`}
                            <span className='text-base text-teritary font-medium'>/{isYearly ? 'year' : 'month'}</span>
                        </p>
                        <ul className='mt-4 space-y-2 px-4'>
                            <li className='flex gap-3 items-center'>
                                <BiInfoCircle className='text-pink w-10'/>Videos
                            </li>
                            <li className='flex gap-3 items-center'>
                                <BiInfoCircle className='text-pink w-10'/>Hello
                            </li>
                            <li className='flex gap-3 items-center'>
                                <BiInfoCircle className='text-pink w-10'/>Hello
                            </li>
                            <li className='flex gap-3 items-center'>
                                <BiInfoCircle className='text-pink w-10'/>Hello
                            </li>
                        </ul>
                        
                        <div className='flex flex-col justify-center  p-5 mt-3'> 
                        <button className='py-2 px-5 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get Started</button>
                        </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Pricing;
