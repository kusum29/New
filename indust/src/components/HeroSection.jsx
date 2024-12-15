import React from "react";
//import "./../styles/HeroSection.css";
//import {projiimg} from "../img/projimg.jpg";
import { IoBookOutline } from "react-icons/io5";
const HeroSection = () => {
  return (
    <div className="flex flex-col   bg-slate-50 items-end ">
      <div className="flex flex-row gap-x-2 py-2 ">
<p className="border border-red-400 bg-red-400 px-4 py-4 flex  w-9 h-8"></p>
<p className="border border-purple-400 bg-purple-400 px-4 py-4 flex  w-9 h-8"></p>
      </div>
      <div className=" flex flex-col lg:flex-row  text-center justify-between px-8">
        <div className="flex flex-col margin 15px">
      <div className="flex flex-col items-start">
        <h1 className="text-8xl font-bold text-red-400">Unlock</h1>
        
        <div className="flex flex-row gap-x-5">
        <h2 className="text-8xl font-bold "> Your </h2>
        <div className="flex flex-col lg:flex-row gap-x-4 ">
        <h3 className="text-8xl font-bold ">Career</h3>
        <img src="https://cdn.prod.website-files.com/663e96ebe7e165e8a1394118/663ea0930286ca35fa48d50c_643583155e1dce2ddd365c92_outseta-affiliate-opportunities-april-2023.gif" alt="" style={{  maxWidth: '100px' }}/>
        <div className="flex items-end">
      <IoBookOutline/>
      </div>
        </div>
        </div>
        
        </div>

        <div>
        <p className="text-xl font-medium text-gray-800 leading-relaxed max-w-md  py-4 text-slate-400 flex items-start">

          Explore opportunities from across the globe to learn, showcase skills, 
          gain CV points & get hired by your dream company.
        </p>
        <div className="flex flex-row gap-x-6 py-4">
        <button className="text-white font-medium border rounded-lg px-7 py-2 bg-red-500">Contact</button>
        <div className="text-black font-medium border rounded-lg px-10 py-2 gap-x-4 bg-slate-300 ">
        <span className="px-2">🎉 </span>
          <span className=" font-extrabold text-red-500 px-2">  Arjun </span>
          <span className="px-3"> Just Went Unstop Pro!</span>
        </div>
        </div>
        </div>
      </div>
      <div className="hero-image">
        
      </div>
     
      <div>
        <img src="../Landing_image.png" alt="kml" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} className="flex px-10"/>
      </div>
    </div>
  
    </div>
    );
  };

export default HeroSection;
