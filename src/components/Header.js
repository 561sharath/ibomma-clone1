import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSearchPage from "../Hooks/useSearchPage";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [searchName, setSearchName] = useState("");
  const [iconView, setIconView] = useState(false);
  const [optionView, setOptionView] = useState(false);

  const handleSearchIcon = () => {
    setIconView(!iconView);
  };

  const handleOption = () => {
    setOptionView(!optionView);
  };

  return (
    <>
      <div className="flex md:justify-between bg-[#151515]">
        <div className="md:hidden">
          <p
            className="text-white  bg-[#68bc3c] py-5 px-4 md:hidden cursor-pointer"
            onClick={handleOption}
          >
            <AiOutlineMenu />
          </p>
        </div>
        <div className=" md:w-44 md:ml-14  ml-24">
          <img src="https://ibomma.onl/wp-content/uploads/2023/08/ibomma-movie-logo.png" />
        </div>
        <div className="flex gap-4 mr-1 font-extrabold mr-14">
          <ul className="md:flex md:gap-11 text-green-600 mt-6 hidden md:inline-block">
            <Link to="/">
              <li>🏠Home</li>
            </Link>
            <li>ℹ️About</li>
            <li>🪲Bug</li>
          </ul>
          <div>
            <input
              className="hidden  md:inline-block p-2 border border-white bg-black mt-4 rounded-lg text-white rounded-l-full"
              placeholder="  search🔍"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            ></input>
            <Link to={"/searchpage/" + searchName}>
              <button className="md:text-green-600  md:border md:border-white md:rounded-r-full md:p-2 md:hover:bg-green-700  md:inline-block hidden">
                search
              </button>
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <p
            className="text-white  bg-[#68bc3c] py-5 px-4 md:hidden cursor-pointer"
            onClick={handleSearchIcon}
          >
            <IoIosSearch />
          </p>
        </div>
      </div>
      <div className="bg-[#0f0f0f] py-3">
        {iconView && (
          <div className="flex">
            <input
              className=" bg-[#333333] md:text-black p-4 w-full rounded-l font-medium text-white"
              placeholder="search"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <Link to={"/searchpage/" + searchName}>
              <button className="px-4 py-5 bg-[#68bc3c]">
                <IoIosSearch />
              </button>
            </Link>
          </div>
        )}

        {optionView && (
          <ul className="text-white p-3">
            <li>🏠Home</li>
            <li>ℹ️About</li>
            <li>🪲Bug</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
