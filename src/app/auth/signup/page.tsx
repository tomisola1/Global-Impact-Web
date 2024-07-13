"use client";

import Steps from '@/components/Steps';
import { Autocomplete, AutocompleteItem, Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Signup = () => {
  const [page, setPage] = useState(1)

  const changeForm = () => {
    setPage(page + 1)
  }

  const goBack = () => {
    setPage(page - 1)
  }
  return (
    <div>
      <div className='min-h-screen'>
        {
          page === 1 ? (
            <PersonalInfo changeForm={changeForm}/>
          ):(
            <BusinessInfo goBack={goBack}/>
          )
        }
      </div>
    </div>
  )
}

export default Signup

type Props = {
  changeForm?: () => void;
  goBack?: () => void
}

const PersonalInfo = (props:Props) => {
  const [isCompleted, setIsCompleted] = useState(false)
  const steps = [
    {label: "Sign Up"},
    {label: "Business Information"},
    {label: "Account Validation"},
  ]
  const handleFormChange = () => {
    setIsCompleted(true)
    if (props.changeForm) props.changeForm()
  }

  return (
    <div>
        <div className='auth-side py-9 sm:pl-7 pl-3 text-textColorLight xl:w-[381px] sm:w-[300px] w-20 absolute transition-width duration-[3000]'>
          <Image src={"/assets/gibc-logo-white.svg"} alt='image' width={200} height={100} />
          <div>
            <p className='ml-[5px] sm:block hidden'>Create your account in a few easy steps</p>
            <Steps steps={steps} completed={isCompleted} current={true}/>
          </div>
        </div>
        <div className='xl:ml-[381px] sm:ml-[300px] ml-20 flex flex-col py-10 justify-center items-center min-h-screen bg-backgroundColor mx-auto overflow-auto'>
          <div className=' flex flex-col items-center text-textColorDark text-center '>
            <h3 className='md:text-[40px] text-3xl font-semibold leading-[48px]'>Welcome to ImpactHub</h3>
            <p className='leading-[19.2px] p-2.5'>Accelerating Businesses for Impact</p>
          </div>
          <form action="" className='sm:px-10 px-3 lg:w-[794px] w-full'>
            <div className='grid lg:grid-cols-2 grid-cols-1  mt-[37px] gap-x-[18px] gap-y-9'>
              <Input label="First Name" labelPlacement='outside' placeholder='Your first name' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full"}}/>
              <Input label="Last Name" labelPlacement='outside' placeholder='Your last name' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full"}}/>
              <div className='grid lg:!col-span-2 gap-y-9'>
              <Input label="Email Address" labelPlacement='outside' placeholder='Your email address e.g. johndoe@example.com' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}}/>
              <Input label="Password" labelPlacement='outside' type="password" placeholder='***************' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !col-span-2 !grid-column-span-2 !w-full"}} endContent={<Image src={"/assets/eye-icon.svg"} alt='eye-icon' width={31} height={18}/>}/>

              </div>
            </div>
            <Button  className="bg-primary text-textColorLight p-2.5 text-base w-full mt-[66px] rounded-[15px] font-semibold h-[63px]" variant="flat" onClick={handleFormChange}>
              Sign Up
            </Button>
          </form>
          <p className='text-[#A8A8A8] text-base leading-[19.2px] p-2.5 mt-[27px]'>Already have an account?<Link href={"/auth/login"} className='text-textColorDark p-2.5' >Log In</Link></p>
        </div>
    </div>
  )
}

const BusinessInfo = (props:Props) => {
  const [isCompleted, setIsCompleted] = useState(false)
  const handleReturn = () => {
    if (props.goBack) props.goBack()
  }

  const steps = [
    {label: "Sign Up"},
    {label: "Business Information"},
    {label: "Account Validation"},
  ]

  const BusinessType = [
    {label: "Fashion", value: "fashion"},
    {label: "Catering", value: "catering"}
  ]
  return (
    <div>
        <div className='auth-side py-9 sm:px-7 px-3 text-textColorLight xl:w-[381px] sm:w-[300px] w-20 absolute transition-width duration-[3000]'>
        <Image src={"/assets/gibc-logo-white.svg"} alt='image' width={200} height={100} />
          <div>
            <div className='flex justify-between mb-[17px] items-center'>
              <Image src={"/assets/user-icon.svg"} alt='icon' width={25} height={17} className=' sm:block hidden'/>
              <span className='flex gap-2 cursor-pointer' onClick={handleReturn}>
                <Image src={"/assets/chevron-left.svg"} alt='icon' width={6} height={9}/>
                <p>Back</p>
              </span>
            </div>
            <p className='ml-[5px] sm:block hidden'>Create your account in a few easy steps</p>
            <Steps steps={steps} completed={isCompleted} current={true}/>
          </div>
        </div>
        <div className='xl:ml-[381px] sm:ml-[300px] ml-20 py-10 flex flex-col items-center min-h-screen bg-backgroundColor overflow-auto mx-auto'>
            <h3 className='md:text-[40px] text-3xl font-semibold leading-[48px] text-textColorDark'>Business Information</h3>
          <form action="" className='sm:px-10 px-3 lg:w-[819px] w-full'>
            <div className='grid lg:grid-cols-2 grid-cols-1  mt-[37px] gap-x-[18px] gap-y-9'>
              <Input label="Business Name" labelPlacement='outside' placeholder='Your business name' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full"}}/>

              <Input label="Business Category" labelPlacement='outside' placeholder='Your product, service, etc. ' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full"}}/>

              <div className='grid lg:!col-span-2 gap-y-9'>
              <Input label="Business Description" labelPlacement='outside' placeholder='Brief description of your business' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}}/>
              </div>
              
              <Autocomplete label="Select the option that matches your business" labelPlacement='outside' placeholder='Brief description of your business' defaultItems={BusinessType} inputProps={{
                classNames:{
                  label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}
                
              }}>
              {(item) => <AutocompleteItem key={item.value}
              classNames={{
                base: "data-[hover=true]:!bg-primary data-[selectable=true]:focus:bg-opacity-10 data-[selectable=true]:focus:transparent  data-[hover=true]:!bg-opacity-10 p-3.5 data-[selected=true]:!bg-primary data-[selected=true]:!bg-opacity-10 rounded-lg",
                title:
                  "text-[rgba(0,0,0,0.5)] font-primary !text-[13px]  font-normal leading-tight group-data-[selected=true]:!text-cng-green-normal ",
              }}
              >{item.label}</AutocompleteItem>}
              </Autocomplete>

              <Input label="Upload Business Logo/Image" labelPlacement='outside' placeholder='Upload your logo (max 5MB, PNG or JPG)' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}} endContent={<Image src={"/assets/download-icon.svg"} alt='icon' width={12} height={16}/>}/>

              <div className='grid lg:!col-span-2 gap-y-9'>
              <Input label="Business Address" labelPlacement='outside' placeholder='Where your business is located' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}}/>
              </div>
              <Input label="Website Link" labelPlacement='outside' placeholder='Link to your website (if any)' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}}/>

              <Input label="Social Media Link" labelPlacement='outside' placeholder='Link to your Instagram, X, Facebook, TikTok, etc.' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}}/>

              <Input label="Business Phone Number" labelPlacement='outside' placeholder='Your active business number' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}}/>

              <Input label="Upload Business CAC Document" labelPlacement='outside' placeholder='Upload your CAC (PDF, PNG or JPG files only' classNames={{label: "!text-textColorDark !pb-1", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary !group-data-[hover=true]:border-[1px] !w-full "}} endContent={<Image src={"/assets/download-icon.svg"} alt='icon' width={12} height={16}/>}/>
            </div>
            <div className='flex justify-center md:gap-[77px] gap-6'>
              <Button  className="flex !items-center bg-primary text-textColorLight p-2.5 w-[136px] text-lg mt-[66px] rounded-[15px] font-semibold h-12" variant="flat">
                <p>Skip </p> 
                <Image src={"/assets/chevron-right.svg"} alt='icon' width={27} height={9}/>
              </Button>
              <Button  className="flex !items-center bg-primary text-textColorLight p-2.5 w-[136px] text-lg mt-[66px] rounded-[15px] font-semibold h-12" variant="flat">
                Submit 
              </Button>

            </div>
          </form>
        </div>
    </div>
  )
}