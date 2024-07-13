import Image from 'next/image'
import React from 'react'

const Steps = (props:Props) => {

  return (
    <div>
        <ul className='flex flex-col gap-7 mt-[88px]'>
        {props.steps.map((step, index) => (
            <li key={index} className='flex items-center gap-4 relative'>
                <span
                    className={`flex items-center bg-white text-black justify-center p-3 rounded-full leading-[19.2px] w-[50px] h-[50px]`}
                >   
                    {props.completed ? <Image src={"/assets/check-mark.svg"} alt="icon" width={16} height={16}/> :
                    index + 1}
                </span>
                <span className={`text-lg leading-[21.6px] sm:block hidden hover:text-white transition-colors duration-5000 ml-[41px] ${props.current?"text-white":"text-[#A8A8A8]"}`}>{step.label}</span>
                {index < props.steps.length - 1 && (
                    <span className='absolute left-6 top-[51px] w-[2px] h-[70px] bg-gray-300'></span>
                )}
            </li>
        ))}
        </ul>
    </div>
  )
}

type Props = {
    steps: Array<{label:string}>
    completed?: boolean
    current: boolean
}

export default Steps