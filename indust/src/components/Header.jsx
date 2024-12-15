import React from "react";
//import "./../styles/Header.css";
import { IoBagRemove } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:w-full justify-between transition-all text-black my-4">
      <div className="text-red-500 text-2xl font-sans font-bold text-left px-8">WEBSITE</div>
      <div className="flex flex-row gap-x-4 font-medium">
        <a href="b">Practice</a>
        <a href="c">Internships</a>
        <a href="x">Jobs</a>
        <a href="z">Compete</a>
        <a href="s">Mentorship</a>
        <a href="g">Courses</a>
      </div>
      <div className=" flex flex-row gap-x-4 px-8">
        <button className="border border-richblack-500 rounded-2xl px-4 bg-red-500 text-white">Login</button>
        <div className="flex justify-center items-center gap-x-2 border border-b-slate-800 rounded-2xl px-2 text-black ">
            
            <button className="text-red-400 font-semibold">
+
            </button>
            <button className="font-sm ">
Host
            </button>
            </div>
       <div className="rounded-[8px] border border-yellow-500 flex items-center gap-x-2 py-2 px-2 bg-yellow-200">
        <IoBagRemove/>
       <p className=" flex flex-row font-sm ">For Busin<p className="text-red-500">ess</p></p>
       </div>
    <div className="border border-red-600 rounded-lg px-2 py-2 bg-red-500 text-white">
        <CiSearch/>
    </div>
      </div>
    </div>
  );
};



export default Header;
