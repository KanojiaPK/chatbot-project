import React from "react";
import logo from "../assets/chatbotpic.png";
import "./chatbot.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Chatbot = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-row border w-60 h-[500px] ">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-20 p-2 rounded-[4rem] botHeader"
        ></img>
        <div className="h-20">
          <p className="flex items-start justify-start mt-3 mb-0 ml-4 text-2xl ">
            Chatbot
          </p>
          <p className="flex items-start justify-start ml-4 text-sm">online</p>
        </div>
        <div className="absolute w-60 top-[5.5rem] border h-40 ">
          salkdsalkd
        </div>

        <div className="absolute bottom-0 flex flex-row">
          <input
            type="text"
            placeholder="enter message here"
            className="absolute bottom-10"
          ></input>
          <div className="absolute bottom-0 ">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
