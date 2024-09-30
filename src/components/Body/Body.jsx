import React, { useState } from "react";
import planeImg from "../../assets/images/plane.jpeg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Body.css";

const Body = () => {
  const [date1, setdate1] = useState();
  const [date2, setdate2] = useState();

  return (
    <div className="mb-[200px]">
      <div className="relative flex justify-center items-center h-[500px] mt-[72px]">
        <img
          alt="plane"
          src={planeImg}
          className="h-[600px] w-[83rem] object-cover rounded-3"
        />
        <h1 className="absolute text-white top-[50px] text-[62px]">
          Best deals are waiting for you
        </h1>
      </div>
      <div className="relative flex justify-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[1200px] cardSearch">
          <div className="flex flex-wrap ">
            <div className="flex-1 min-w-[200px] searchItem">
              <label className="flex justify-start mb-1 text-sm font-medium text-gray-700 ml-[15px] ">
                From
              </label>
              <input
                type="text"
                className="block w-full px-3 py-2 border-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search location"
              />
            </div>

            <div className="flex-1 min-w-[200px] searchItem">
              <label className="flex justify-start mb-1 text-sm font-medium text-gray-700 ml-[15px]">
                To
              </label>
              <input
                type="text"
                className="block w-full px-3 py-2 border-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search location"
              />
            </div>

            <div className="flex-1 min-w-[200px] searchItem">
              <label className="flex justify-start mb-1 text-sm font-medium text-gray-700 ml-[15px] ">
                Departure
              </label>
              <DatePicker
                selected={date1}
                onChange={(date) => setdate1(date)}
                className=" flex justify-start w-full px-3 py-2 border-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm top-[-2px] left-[-40px] relative"
                dateFormat="MM/dd/yyyy"
                placeholderText="Select date"
              />
            </div>

            <div className="flex-1 min-w-[200px] searchItem">
              <label className="flex justify-start mb-1 text-sm font-medium text-gray-700 ml-[15px]">
                Return
              </label>
              <DatePicker
                selected={date2}
                onChange={(date) => setdate2(date)}
                className=" flex justify-start w-full px-3 py-2 border-0 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm top-[-2px] left-[-40px] relative"
                dateFormat="MM/dd/yyyy"
                placeholderText="Select date"
              />
            </div>

            <div className="bg-[#009688ff] h-[63px] w-[57px] flex items-center justify-center rounded-3 z-4 absolute right-[20px]">
              <ArrowForwardIcon className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
