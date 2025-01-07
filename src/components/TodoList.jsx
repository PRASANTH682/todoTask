import React from 'react'
import { useState } from 'react';
import Buttons from './Buttons';
import TodoItems from './TodoItems';

const TodoList = () => {
  
  const [users,setUsers] = useState([])
  const [isEditing,setIsEditing] = useState(false);
  const [task,setTask] = useState("");
  const [UpdateCurrId,setUpdateCurrId] = useState(null);

  //checked function
  const handleCheck =(id)=>{
    const changeItem = users.map((user)=>user.id ===id?{...user,checked:!user.checked}:user);
    setUsers(changeItem);
  }

  //create and update function
  const handleAddorUpdate = (e)=>{
    e.preventDefault();
    if(isEditing){
      let updateItem = users.map((user)=>(
        user.id === UpdateCurrId ? {...user,task:task} : user
      ))
      setUsers(updateItem);
      setTask("");
      setUpdateCurrId(null);
      setIsEditing(false);
    }else{
      const id = users.length >0 ? users[users.length - 1].id +1:1;
      const newItem = [...users,{id,task:task,checked:false}]
      setUsers(newItem);
      setTask("");
    }
  }

  //update function
  const handleUpdate = (id)=>{
    setIsEditing(true);
    let findUpdateUser = users.find((user)=>user.id === id);
    setTask(findUpdateUser.task)
    setUpdateCurrId(id);
  }

  //Delete function
  const handleDelete =(id)=>{
    let newUsers = users.filter((user)=>user.id !== id).map((user,index)=>{
      return {...user,id:index+1}
    });
    setUsers(newUsers)
  }

  return (
    <main className='flex items-center justify-center'>
        <div className="bg-blue-500 w-[80%] md:w-[55%] mt-10 p-2 md:p-5 rounded-md text-center shadow-md">
            <h1 className='text-3xl pb-1 md:text-4xl md:pb-3 font-bold border-b-2 mb-3'>TODO List</h1>
            <form className='flex gap-3 mb-3'>
                <input type="text" id="task" value={task} placeholder='Enter your Task' className="border w-[100%] outline-none px-2 py-1 md:text-lg rounded-md" onChange={(e)=>setTask(e.target.value)}/>

              <Buttons isEditing={isEditing} handleAddorUpdate={handleAddorUpdate}/>     
            </form>

            <TodoItems users={users} handleCheck={handleCheck} handleUpdate={handleUpdate} handleDelete={handleDelete} />

        </div>
    </main>
  )
}

export default TodoList