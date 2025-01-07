import React from 'react'
import { MdAddBox } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";

const Buttons = ({isEditing,handleAddorUpdate}) => {
  return (
    <button onClick={handleAddorUpdate}>
        {
            isEditing ? (
                <CiSaveDown2 className='h-[40px] w-[60px] bg-green-700 rounded-lg text-white hover:bg-green-900 cursor-pointer' />
                ):
                <MdAddBox className='h-[40px] w-[60px] bg-white rounded-lg text-green-700 hover:text-green-900 cursor-pointer' />
        }
    </button>
  )
}

export default Buttons