"use client";

import Image from "next/image";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';

export default function Home() {

  const handleadd = () =>{

  }

  const handleedit = () =>{

  }

  const handledelete = () =>{

  }

  return (
    <div className="text-gray-200">

    
      <div className="flex justify-center mt-12">
      <input type="text" placeholder="Enter your To-Do here" className="text-black px-4 py-2 rounded-md w-[35vw] bg-gray-200"/>
      <button onClick={handleadd} className="ml-5 text-lg px-4 text-bold rounded-md border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300" >Add</button>
      </div>


      <div className="task flex gap-7 justify-center">
        <button className="text-lg mt-[7vh] text-red-400 rounded-md border-2 border-red-400 p-2 hover:bg-red-500 hover:text-white transition duration-300">Your To-Do</button>
        <button className="text-lg mt-[7vh] text-green-400 rounded-md border-2 border-green-400 p-2 hover:bg-green-500 hover:text-white transition duration-300">Completed Tasks</button>
      </div>


      <div className="flex justify-center">
        <div className="container mt-5 p-4 flex justify-center rounded-lg border-2 border-red-400 bg-gray-800 w-[40vw] shadow-md gap-2">       
        <span className="text-gray-300 w-[70%] break-words">Your To-Dos</span>
        <div className="flex ml-[1vw] gap-4">
        <button onClick={handleedit} ><EditIcon className="text-blue-500"></EditIcon> </button>
        <button onClick={handledelete}> <DeleteRoundedIcon className="text-red-500"></DeleteRoundedIcon> </button>
        </div>      
        </div>
      </div>

      

    </div>
  );
}
