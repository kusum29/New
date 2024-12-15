import React from "react";
//import "./../styles/Statistics.css";

const Statistics = () => {
  return (
    <section className="absolute flex flex-col lg:flex-row transform lg:translate-y-[-50px] translate-y-[-140px] items-center border border-slate-300 rounded-lg bg-white left-5 lg:bottom-[-40px] lg:px-5 py-3 overflow">
      <div className="flex flex-col place-items-center justify-center lg:border-r-4 border-red-500 lg:h-12 h-12 px-7 lg:py-3 py-10 ">
      <div className="flex flex-row  ">
      <h3 className="text-lg font-bold">18</h3>
      <h2 className="text-lg font-bold text-red-500">M+</h2>
      </div>
        <p className="text-lg font-medium items-center">Active Users</p>
      </div>
     
      <div className="flex flex-col place-items-center justify-center lg:border-r-4 border-red-500 h-12 px-7 lg:py-3 py-10">       
 <div className="flex flex-row">
        <h3 className="text-lg font-bold">22.3</h3>
        <h2 className="text-lg font-bold text-red-500">M+</h2>
        </div>
        <p className="text-lg font-medium">Assessments</p>
      </div>

      <div className="flex flex-col place-items-center justify-center lg:border-r-4 border-red-500  h-12 px-7 lg:py-3 py-10 ">
        <div className="flex flex-row">
        <h3 className="text-lg font-bold">130</h3>
        <h2 className="text-lg font-bold text-red-500">K+</h2>
        </div>
        <p className="text-lg font-medium">Opportunities</p>
      </div>

      <div className="flex flex-col place-items-center justify-center lg:border-r-4 border-red-500 h-12 px-5 lg:py-3 py-10">
        <div className="flex flex-row">
        <h3 className="text-lg font-bold">800</h3>
        <h2 className="text-lg font-bold text-red-500">+</h2>
        </div>
        <p className="text-lg font-medium">Brands Trust Us</p>
      </div>

      <div className="flex flex-col place-items-center justify-center lg:border-r-4  border-red-500 h-12 px-7 lg:py-3 py-10">
       <div className="flex flex-row ">
       <h3 className="text-lg font-bold">42</h3>
       <h2 className="text-lg font-bold text-red-500">K+</h2>
       </div>
        <p className="text-lg font-medium">Organisations</p>
      </div>

      <div className="flex flex-col place-items-center justify-center px-7 lg:py-3 py-10">
        <div className="flex flex-row">
        <h3 className="text-lg font-bold">78</h3>
        <h2 className="text-lg font-bold text-purple-600">+</h2>
        </div>
        <p className="text-lg font-medium">Countries</p>
      </div>
    </section>
  );
};

export default Statistics;
