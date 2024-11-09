import React from 'react'
import Rgu from '../assets/rgu.png';
import { BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='bg-[#112851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
        <div className='my-12 flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 space-y-5'>
                <a href="/" className='text-1xl font-semibold flex items-center space-x-3 text-primary'>
                    <img src={Rgu} alt="" className='w-10 inline-block items-center' />
                    <span className='text-white'>ShootMate</span>
                </a>
                <p className='md:w-1/2'>
                    Your Perfect Shot, Simplified.
                </p>
                <div>
                    <input type='email' name='email' id='email' placeholder='Your Email'
                    className='bg-[#9a7af1589] py-2 px-4 rounded-md focus:outline-none'/>
                </div>
                <div>
                    <input type='textarea' name='msg' id='msg' placeholder='Comment Here...'
                    className='bg-[#9a7af1589] py-2 px-4 rounded-md focus:outline-none'/>
                    <input type='submit' value="Send" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer
                    hover:bg-primary  duration-300 transition-all' />
                </div>
            </div>

            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Platform</h4>
                    <ul className='space-y-3'>
                        <li href="/" className='block hover:text-gray-300'>Overview</li>
                        <li href="/" className='block hover:text-gray-300'>Overview</li>
                        <li href="/" className='block hover:text-gray-300'>Overview</li>
                        <li href="/" className='block hover:text-gray-300'>Overview</li>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Help</h4>
                    <ul className='space-y-3'>
                        <li href="/" className='block hover:text-gray-300'>How does it works?</li>
                        <li href="/" className='block hover:text-gray-300'>Where to ask questions?</li>
                        <li href="/" className='block hover:text-gray-300'>How to play?</li>
                        <li href="/" className='block hover:text-gray-300'>What is needed for this?</li>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Contacts</h4>
                    <ul className='space-y-3'>
                        <li href="/" className='block hover:text-gray-300'>(+91) 62814....9</li>
                        <li href="/" className='block hover:text-gray-300'>vinay....@gmail.com</li>
                        <li href="/" className='block hover:text-gray-300'>headquaters nuzvid I1</li>
                        <li href="/" className='block hover:text-gray-300'>53387</li>
                    </ul>
                </div>
            </div>
        </div>

        <hr />
        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-2'>
            <p>@shootmate. All copy rights reserved</p>
            <div className='flex items-center space-x-5'>
                <BiLogoLinkedin className='w-8 cursor-pointer hover:-transition-all duration-300'/>
                <BiLogoGithub className='w-8 cursor-pointer hover:-transition-all duration-300'/>
                <BiLogoFacebook className='w-8 cursor-pointer hover:-transition-all duration-300'/>
                <BiLogoInstagram className='w-8 cursor-pointer hover:-transition-all duration-300'/>
                <BiLogoTwitter className='w-8 cursor-pointer hover:-transition-all duration-300'/>
            </div>
        </div>

    </div>
  )
}

export default Footer
