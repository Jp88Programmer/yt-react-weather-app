import React from "react";
import { UilSignout } from "@iconscout/react-unicons";
import { UilBitcoin } from "@iconscout/react-unicons";
import { UilBagAlt } from "@iconscout/react-unicons";
import { UilDesktopAlt } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import Icon from "../asserts/ico_individuals.svg";
const PraticeCss = () => {
  return (
    <div>
      <div className="flex justify-between p-5 bg-[#38bdf8] text-white text-xl capitalize border-blue-500">
        <ul className="flex items-center space-x-10">
          <li className="cursor-pointer">
            <UilBitcoin className="w-8 h-8 hover:text-yellow-600" />
          </li>
          <li className="cursor-pointer">product</li>
          <li className="cursor-pointer">utility</li>
        </ul>
        <ul className="flex items-center space-x-10">
          <li className="cursor-pointer">profile</li>
          <li className="cursor-pointer">
            <UilSignout className="w-8 h-8" />
          </li>
        </ul>
      </div>
      <div className="bg-[#98daf7] w-full h-full pb-10">
        <div className="flex flex-col space-y-4 items-center p-10">
          <span className="text-white text-lg max-w-4xl text-center">
            Bitcoin is an innovative payment network and a new kind of money.
          </span>
          <div className="flex space-x-4 items-center">
            <button className="p-5 bg-[#38bdf8] text-white text-base w-80 hover:bg-white hover:text-[#38bdf8] hover:border-2 border-[#38bdf8]">
              Get started with Bitcoin
            </button>
            <button className="p-5 border-2 border-[#38bdf8] bg-white text-[#38bdf8] w-80 text-base hover:bg-[#38bdf8] hover:text-white">
              Choose your wallet
            </button>
            <button className="p-5 border-2 border-[#38bdf8] bg-white text-[#38bdf8] w-80 text-base hover:bg-[#38bdf8] hover:text-white">
              Buy Bitcoin
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-10 mt-10">
          <span className="text-white text-h">Get a quick overview for</span>
          <div className="flex items-center space-x-5 justify-center">
            <div className="bg-[#38bdf8] p-8 pb-10  flex flex-col items-center space-y-3 w-80">
              <UilUser className="text-white w-12 h-12 mb-2" />
              <span className="text-white text-h">Individuals</span>
              <a href="/" className="text-white">
                Learn More
              </a>
            </div>
            <div className="bg-[#38bdf8] p-8 pb-10  flex flex-col items-center space-y-3 w-80">
              <UilBagAlt className="text-white w-12 h-12 mb-2" />
              <span className="text-white text-h">Businesses</span>
              <a href="/" className="text-white">
                Learn More
              </a>
            </div>
            <div className="bg-[#38bdf8] p-8 pb-10  flex flex-col items-center space-y-3 w-80">
              <UilDesktopAlt className="text-white w-12 h-12 mb-2" />
              <span className="text-white text-h">Developers</span>
              <a href="/" className="text-white">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PraticeCss;
