'use client'

import React from "react";
import {
  Drawer,
  Button,
} from "@material-tailwind/react";
import DrawerContent from "./drawer";
import Image from "next/image";

export default function UserSideDrawer({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <React.Fragment>
      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer open={open} onClose={closeDrawer} placement="right" size={370} className="p-4">
        <div className="w-full flex justify-end">
          <Image
            src="/logo/close.svg"
            height={12}
            width={12}
            alt="close"
            onClick={closeDrawer}
            className="hover:cursor-pointer"
          />
        </div>
        <DrawerContent closeDrawer={closeDrawer} />
      </Drawer>
    </React.Fragment>
  )
}
