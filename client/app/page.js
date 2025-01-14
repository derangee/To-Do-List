import Image from "next/image";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';

export default function Home() {
  return (
    <div className="text-gray-200">

      {/*This is the input div*/}
      <div className="flex justify-center mt-7">
      <input type="text" placeholder="Enter your To-Do here" className="text-black px-4 py-2 rounded-md w-[35vw] bg-gray-200"/>
      <button className="ml-5 text-lg px-4 text-bold rounded-md border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300" >  Add
        </button>
      </div>

      <div className="task">
        <h1 className="text-xl flex justify-center mt-[7vh] text-gray-400">Your Tasks</h1>
      </div>

      <div className="flex justify-center">
        <div className="container mt-5 p-4 flex justify-center rounded-lg border-2 border-green-500 bg-gray-800 w-[40vw] shadow-md gap-2">       
        <span className="text-gray-300 w-[70%] break-words">Your To-Do</span>
        <div className="flex ml-[1vw] gap-4">
        <button><EditIcon className="text-blue-500"></EditIcon> </button>
        <button><DeleteRoundedIcon className="text-red-500"></DeleteRoundedIcon> </button>
        </div>      
        </div>
      </div>


    </div>
  );
}
