'use client'

import React from "react";
import {
  Drawer,
  Button,
} from "@material-tailwind/react";
import DrawerContent from "./drawer";

export default function UserSideDrawer({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <React.Fragment>
      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer open={open} onClose={closeDrawer} placement="right" size={370} className="p-4">
        <Button onClick={closeDrawer}>Close Drawer</Button>
        <DrawerContent closeDrawer={closeDrawer} />
      </Drawer>
    </React.Fragment>
  )
}
