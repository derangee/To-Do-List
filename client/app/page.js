import Image from "next/image";

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
        <h1 className="text-xl flex justify-center mt-[7vh]">Tasks</h1>
      </div>


    </div>
  );
}
