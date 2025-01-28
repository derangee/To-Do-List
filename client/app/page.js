"use client";

import Image from "next/image";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";

export default function Home() {

  const handleadd = () =>{
    
  }

  const handleedit = () =>{

  }

  const handledelete = () =>{

  }

  return (
  <div className="">

  <div className="box border border-white w-[80%] mx-auto text-center mt-20 h-full rounded-2xl">

 
  <div className="input flex gap-7 justify-center mt-7 ">
   <input type="input form" placeholder="Enter your To-Do task here"  className="w-[40%] text-black rounded-3xl h-11 p-2 font-bold" />
   <button onClick={handleadd} className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Add</button>
  </div>

  <div className="card border border-white w-[60%] rounded-3xl mx-auto mt-7 mb-11 flex justify-between p-4"> 
    <div className="max-w-[75%] flex-col text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"> Your todo</div>
    <div className="icons flex gap-4"> 
     <button onClick={handleedit}><EditIcon className="text-blue-500 text-2xl"/></button> 
     <button onClick={handledelete}><DeleteRoundedIcon className="text-red-500 text-2xl"/></button>
    </div>
  </div>

   

  </div>

      

    </div>
  );
}
