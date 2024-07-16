import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SubscribeButton from "../components/SubscribeButton";

const Header = () => {
  const navBarItems = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "ABOUT",
      link: "/about",
    },
    {
      title: "INDICATOR",
      link: "/indicator",
    },
    {
      title: "PERFORMANCE",
      link: "/performance",
    },
    {
      title: "GUIDE",
      link: "/guide",
    },
    {
      title: "TWITTER",
      link: "/twitter",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center max-[900px]:flex-row-reverse">
        <div className="flex flex-row py-4 justify-between items-center my-container">
          <div>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <div className="text-2xl font-black">
            <a href="#" className="text-black">
              Web3Quant
            </a>
          </div>
          <div className="flex flex-row justify-center items-center gap-3">
            <a href="" className="text-sm font-medium text-black px-2">
              SIGN IN
            </a>
            <SubscribeButton flag={1} />
          </div>
        </div>
        <div className="flex flex-row min-[900px]:border-t-[1px] min-[900px]:border-b-[1px] border-gray py-4 w-full justify-center max-[900px]:gap-3 min-[900px]:gap-10">
          {navBarItems.map((item) => {
            return (
              <>
                <Link
                  to={item.link}
                  className="text-black font-medium text-xs px-2"
                >
                  {item.title}
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
