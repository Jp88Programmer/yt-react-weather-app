import React, { useEffect, useState } from "react";
import { UilSignout } from "@iconscout/react-unicons";
import { UilBitcoin } from "@iconscout/react-unicons";
import { UilBagAlt } from "@iconscout/react-unicons";
import { UilDesktopAlt } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import BitcoinImg from "../asserts/bitcoin-img.svg";
import Instant from "../asserts/main_ico_instant.svg";
import Lowfee from "../asserts/main_ico_lowfee.svg";
import Worldwide from "../asserts/main_ico_worldwide.svg";
import Sun from "../asserts/sun-svgrepo-com.svg";
import Moon from "../asserts/moon-stars-svgrepo-com.svg";

import Footer from "./Footer";
const PraticeCss = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const dark = localStorage.getItem("dark");
    if (dark === "true") setIsDark(true);
  }, []);
  const isSwitch = () => {
    setIsDark(!isDark);
    if (!isDark) localStorage.setItem("dark", true);
    else localStorage.removeItem("dark");
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="dark:bg-slate-900 bg-[#38bdf8] flex justify-between p-5 text-white text-xl capitalize border-blue-500">
        <ul className="flex items-center space-x-10">
          <li className="cursor-pointer">
            <UilBitcoin className="w-8 h-8 bitcoin" />
          </li>
          <li className="cursor-pointer bitcoin">product</li>
          <li className="cursor-pointer bitcoin">utility</li>
        </ul>
        <ul className="flex items-center space-x-10">
          <li className="cursor-pointer">
            {isDark ? (
              <img
                src={Sun}
                alt="light"
                className="dark-icon"
                onClick={isSwitch}
              />
            ) : (
              <img
                src={Moon}
                alt="dark"
                className="dark-icon"
                onClick={isSwitch}
              />
            )}
          </li>
          <li className="cursor-pointer">profile</li>
          <li className="cursor-pointer">
            <UilSignout className="w-8 h-8" />
          </li>
        </ul>
      </div>
      <div className="dark:bg-slate-800 bg-[#98daf7]  w-full h-full pb-10">
        <div className="flex flex-col space-y-4 items-center p-10">
          <span className="text-white text-lg max-w-4xl text-center">
            Bitcoin is an innovative payment network and a new kind of money.
          </span>
          <div className="btn-container">
            <button className="btn-first">Get started with Bitcoin</button>
            <button className="btn-second">Choose your wallet</button>
            <button className="btn-second">Buy Bitcoin</button>
          </div>
        </div>
        <div className="overview">
          <span className="span-text">Get a quick overview for</span>
          <div className="overview-box">
            <div className="box-des">
              <UilUser className="icon" />
              <span className="box-des-head">Individuals</span>
              <a href="/" className="link">
                Learn More
              </a>
            </div>
            <div className="box-des">
              <UilBagAlt className="icon" />
              <span className="box-des-head">Businesses</span>
              <a href="/" className="link">
                Learn More
              </a>
            </div>
            <div className="box-des">
              <UilDesktopAlt className="icon" />
              <span className="box-des-head">Developers</span>
              <a href="/" className="link">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="my-20 flex flex-col gap-10">
          <span className="span-text">Get started with Bitcoin</span>
          <div className="des">
            <div className="des-box">
              <div className="text-md leading-8">
                Bitcoin uses peer-to-peer technology to operate with no central
                authority or banks; managing transactions and the issuing of
                bitcoins is carried out collectively by the network. Bitcoin is
                open-source; its design is public, nobody owns or controls
                Bitcoin and everyone can take part. Through many of its unique
                properties, Bitcoin allows exciting uses that could not be
                covered by any previous payment system.
              </div>
              <div className="flex flex-col gap-6">
                <div className="feature-show">
                  <img
                    src={Instant}
                    alt="instant transition"
                    className="icon-size"
                  />
                  <div>Fast peer-to-peer transactions</div>
                </div>
                <div className="feature-show">
                  <img src={Worldwide} alt="world wide" className="icon-size" />
                  <div>Worldwide payments</div>
                </div>
                <div className="feature-show">
                  <img src={Lowfee} alt="low fee" className="icon-size" />
                  <div>Low processing fees</div>
                </div>
              </div>
            </div>
            <div className="des-box">
              <img src={BitcoinImg} alt="bitcoin img" className="m-auto" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn-first">Get started with Bitcoin</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PraticeCss;
