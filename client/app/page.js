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

  <div className="box border-white text-center">

  <div className="inp flex gap-7 justify-center">
   <input type="input form" placeholder="Enter your To-Do task here"  className="w-[40%] text-black rounded-3xl h-11 " />
   <button className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Add</button>
   </div>

  </div>

      

    </div>
  );
}
