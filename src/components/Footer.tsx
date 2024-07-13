import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#3F4E59]'>
      <footer className='md:py-20 py-10 lg:px-16 px-6 text-[#EFEFEF]'>
        <div className='flex md:flex-row flex-col md:items-start self-stretch md:justify-between justify-center items-center xl:p-12 gap-4'>
          <div className='grid grid-cols-4 lg:gap-10 md:gap-2 gap-10'>
            <Image src={"/assets/Logo.svg"} alt='logo' width={73} height={80} />
            <ul>
              <li className='font-semibold'>About Us</li> 
              <li className='text-sm leading-[21px] mt-4 py-2'>
                <Link href="#">Contact</Link>
              </li>
              <li className='text-sm leading-[21px] py-2'>
                <Link href="#">Sign Up</Link>
              </li>
              <li className='text-sm leading-[21px] py-2'>
                <Link href="#">Support</Link>
              </li>
            </ul>
            <ul>
              <li className='font-semibold'>Trade Center</li> 
              <li className='text-sm leading-[21px] mt-4 py-2'>
                <Link href="#">How it Works</Link>
              </li>
            </ul>
            <ul>
              <li className='font-semibold'>Support</li> 
              <li className='text-sm leading-[21px] mt-4 py-2'>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4 md:items-start items-center'>
            <p>Subscribe</p>
            <p>Join our community to stay connected.</p>
            <div className='flex gap-4 mt-2 '>
              <Input type="email" placeholder='Enter your email' classNames={{inputWrapper:"!rounded-[15px] !h-full !p-3 !bg-[#DFEDEC] w-[350px]"}}/>
              <div className="bg-gradient-to-r from-[#2D338FCC] to-[#17B2A24D] rounded-[16px] w-[134px] p-px ">
                <Button as={Link} className="text-[#EFEFEF] w-full  py-3 px-6 text-base bg-[#3F4E59] h-full rounded-[15px]" href="#">
                  Subscribe
                </Button>
              </div>
            </div>
            <p className='text-xs'>By subscribing, you agree to our Privacy Policy and consent to receive updates from us.</p>
          </div>

        </div>
        <div className='flex md:flex-row flex-col gap-4 sm:justify-between justify-center mt-8'>
          <ul className='flex gap-6 text-sm'>
            <li>&copy; 2024 ImpactHub. All rights reserved.</li>
            <li>
              <Link href="#" className="underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#" className="underline">Terms of Service</Link>
            </li>
            <li>
              <Link href="#" className="underline">Cookie Settings</Link>
            </li>
          </ul>
          <div className='flex gap-3'>
            <Image src={"/assets/Facebook.svg"} alt='logo' width={24} height={24} />
            <Image src={"/assets/Instagram.svg"} alt='logo' width={24} height={24} />
            <Image src={"/assets/Ex.svg"} alt='logo' width={24} height={24} />
            <Image src={"/assets/LinkedIn.svg"} alt='logo' width={24} height={24} />
            <Image src={"/assets/Youtube.svg"} alt='logo' width={24} height={24} />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

