import Image from "next/image";

export default function Home() {
  return (
    <div className="text-gray-200">
      <div className="flex justify-center">
      <input type="text" placeholder="Enter your To-Do here" className="text-black px-4 py-2 rounded-md "/>
      <button className="ml-5 text-lg">Add</button>
      </div>
    </div>
  );
}
