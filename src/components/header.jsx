"use client"

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Link from "next/link";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-10 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 !shadow-none !bg-transparent !backdrop-blur-0 border-0">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img
            className="h-[58px] object-cover object-center"
            src="/logo/nombox.svg"
            alt="nombox logo"
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">
            <div className="flex gap-[21px]">
              <Link href="/cook">
                <div className="w-[178px] h-[48px] rounded-[69px] bg-[#FF922C] flex justify-center items-center hover:cursor-pointer text-[13px]">Register As A Cook</div>
              </Link>
              <Link href="/user">
                <div className="w-[178px] h-[48px] rounded-[69px] bg-[#7E5CEB] flex justify-center items-center hover:cursor-pointer text-[13px]" >Login / Register</div>
              </Link>
            </div>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 bg-[#7E5CEB]"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // <svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   className="h-6 w-6 bg-black"
              //   fill="none"
              //   stroke="currentColor"
              //   strokeWidth={2}
              // >
              //   <path
              //     strokeLinecap="round"
              //     strokeLinejoin="round"
              //     d="M4 6h16M4 12h16M4 18h16"
              //   />
              // </svg>
              <img src="/logo/hamburger.svg" alt="menu" className="h-6 w-20" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <Link href="/cook">
          <div className="w-[178px] h-[48px] rounded-[69px] bg-[#FF922C] flex justify-center items-center hover:cursor-pointer text-[13px] mt-5">Register As A Cook</div>
        </Link>
        <Link href="/user">
          <div className="w-[178px] h-[48px] rounded-[69px] bg-[#7E5CEB] flex justify-center items-center hover:cursor-pointer text-[13px] mt-5" >Login / Register</div>
        </Link>
      </Collapse>
    </Navbar>

  );
}