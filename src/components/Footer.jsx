import React from "react";
import { introduction } from "../data/introduction";
import { resource } from "../data/introduction";
import { partcipate } from "../data/introduction";
import { other } from "../data/introduction";

const Footer = () => {
  return (
    <div className="dark:bg-slate-900 bg-[#38bdf8]">
      <div className="dark:bg-slate-900 footer-section">
        <div className="donate">
          Support Bitcoin.org :<button className="btn-donate">Donate</button>
        </div>
        <div className="list">
          <div className="lists">
            <div className="list-title">introduction : </div>
            <ul className="list-items">
              {introduction.map((e) => {
                return <li>{e}</li>;
              })}
            </ul>
          </div>
          <div className="lists">
            <div className="list-title">resource : </div>
            <ul className="list-items">
              {resource.map((e) => {
                return <li>{e}</li>;
              })}
            </ul>
          </div>
          <div className="lists">
            <div className="list-title">partcipate : </div>
            <ul className="list-items">
              {partcipate.map((e) => {
                return <li>{e}</li>;
              })}
            </ul>
          </div>
          <div className="lists">
            <div className="list-title">other : </div>
            <ul className="list-items">
              {other.map((e) => {
                return <li>{e}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5 text-xs text-white text-center">
        © Bitcoin Project 2009-2023 Released under the MIT license
      </div>
    </div>
  );
};

export default Footer;
