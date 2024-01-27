'use client'

import React from "react";
import {
  Drawer,
  Button,
} from "@material-tailwind/react";
import SideMenu from "./side-menu";
import Image from "next/image";

export default function ChefSideDrawer({ open, setOpen, progress, showSection, setShowSection }) {
  // const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <React.Fragment>
      <Drawer open={open} onClose={closeDrawer} placement="right" size={344} className="">
        <div className="w-full flex justify-end">
          <Image
            src="/logo/close.svg"
            height={12}
            width={12}
            alt="close"
            onClick={closeDrawer}
            className="m-4 hover:cursor-pointer"
          />
        </div>
        <SideMenu closeDrawer={closeDrawer} setShowSection={setShowSection} showSection={showSection} progress={progress}/>
      </Drawer>
    </React.Fragment>
  )
}
