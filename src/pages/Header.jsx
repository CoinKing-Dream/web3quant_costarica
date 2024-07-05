import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Header = () => {
  const navBarItems = [
    {
        title: "HOME",
        link: "/"
    }, {
        title: "ABOUT",
        link: "/about"
    }, {
        title: "INDICATOR",
        link: "/indicator"
    }, {
        title: "PERFORMANCE",
        link: "/performance"
    }, {
        title: "GUIDE",
        link: "/guide"
    }, {
        title: "TWITTER",
        link: "/twitter"
    }];

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen">
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
          <div >
            <a href="" className="text-sm font-medium text-black px-2">SIGN IN</a>
            <Button variant="outlined" startIcon={<EmailOutlinedIcon/>} className="text-white bg-amber-500 text-sm font-bold rounded-full py-1 px-2">SUBSCRIBE</Button>
          </div>
        </div>
        <div className="flex flex-row border-t-[1px] border-b-[1px] border-gray py-4 w-full justify-center">
            {
                navBarItems.map(item => {
                    return (
                        <>
                            <Link to={item.link} className="text-black font-medium text-xs px-2">{item.title}</Link>
                        </>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default Header;