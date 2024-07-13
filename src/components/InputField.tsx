import { Input } from '@nextui-org/react'
import React from 'react'

const InputField = () => {
  return (
    <div>
        <Input label="First Name" labelPlacement='outside' placeholder='Your first name' classNames={{label: "!text-textColorDark !pb-0.5", inputWrapper:"!border-[0.5px] !border-[#CFD2E2] !rounded-[10px] !py-[11px] !pl-4 !placeholder-[#A8A8A8] !h-[61px] !shadow-none w-[390px] group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1px border-solid !transition-all !duration-5000 group-data-[focus=true]:ring-primary group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-opacity-20 group-data-[hover=true]:border-primary group-data-[hover=true]:border-[1px]"}}/>
    </div>
  )
}

export default InputField