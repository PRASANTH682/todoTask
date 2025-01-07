import React from 'react'
import { FaTrash } from "react-icons/fa6"; 
import { FaEdit } from "react-icons/fa";

const TodoItems = ({users,handleCheck,handleUpdate,handleDelete}) => {
  return (
    <ul className='list-none p-1 md:p-2'>
    {
      users.map((user)=>(
        <li key={user.id} className='text-xl flex justify-between items-center mb-2'>
          <input type="checkbox"  id="task" checked={user.checked} className='h-[20px] w-[20px]' onChange={()=>handleCheck(user.id)}/>
          <label htmlFor="task" className={`text-white ${user.checked===true?`line-through`:``}`}>{user.task}</label>
          <div className="flex gap-2 md:gap-5 justify-center items-center">
            <FaEdit role='button' tabIndex={0} className='text-amber-700 w-[30px] h-[30px] md:w-[40px] md:h-[25px] hover:text-amber-900' onClick={()=>handleUpdate(user.id)}/>     
            <FaTrash role='button' tabIndex={0} className='text-red-600 w-[40px] h-[25px] hover:text-red-800' onClick={()=>handleDelete(user.id)} />
          </div>
        </li>
      ))
    }
  </ul>
  )
}

export default TodoItems