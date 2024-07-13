import { Button, Divider, Input } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='login-page flex justify-center items-center mx-auto '>
            <div className='bg-backgroundColor sm:rounded-[10px] lg:w-[727px] w-[500px] h-[700px] sm:p-11 py-10 px-4 overflow-auto'>
                <div className=' flex flex-col items-center text-textColorDark text-center '>
                    <Image src={"/assets/images/GIBC LOGO.svg"} alt='logo' width={250} height={80}/>
                    <h3 className='md:text-[32px] text-3xl font-semibold leading-[38px]'>Welcome Back</h3>
                    <p className='text-[#A8A8A8] text-base leading-[19.2px] p-2.5 mt-1'>Don't have an account yet?<Link href={"/auth/signup"} className='text-textColorDark p-2.5 font-medium' >Sign Up</Link></p>
                </div>
                <form>
                    <div className='grid grid-cols-1  mt-[21px] gap-x-[18px] gap-y-[29px] '>
                        <Input label="Email Address" labelPlacement='outside' placeholder='Your email address e.g. johndoe@example.com' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full"}}/>
                        <div>
                            <Input label="Password" labelPlacement='outside' type='password' placeholder='***************' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full"}} endContent={<Image src={"/assets/eye-icon.svg"} alt='eye-icon' width={31} height={18}/>}/> 
                            <div className='flex justify-end text-[#F62222] mt-[5.5px]'>Forgot Password?</div>
                        </div>
                    </div>
                    <Button  className="bg-primary text-textColorLight p-2.5 text-xl leading-6 w-full mt-[27px] rounded-[15px] font-semibold h-[63px]" variant="flat">
                        Login
                    </Button>
                </form>
                <div className='flex mt-[22px] justify-center items-center'>
                    <Divider orientation="horizontal" className='lg:w-[236px] w-[100px] !border-[#A8A8A8]' />
                    <p className='p-[10px] text-[#A8A8A8] lg:text-xl text-base'>Or Sign up with</p>
                    <Divider orientation="horizontal" className='lg:w-[236px] w-[100px] !border-[#A8A8A8]'/>
                </div>
                <div className='flex justify-center mt-[34px] sm:gap-[73px] gap-5'>
                    <Image src={"/assets/Google-icon.svg"} alt={"icon"} width={64} height={64} />
                    <Image src={"/assets/Apple-icon.svg"} alt={"icon"} width={64} height={64} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login