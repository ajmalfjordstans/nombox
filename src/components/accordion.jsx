'use client'

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    id === open ?
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <rect x="20.0977" y="9.16211" width="2" height="20" transform="rotate(90 20.0977 9.16211)" fill="#7E5CEB" />
      </svg> :
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <rect x="9.09717" y="0.162109" width="2" height="20" fill="#7E5CEB" />
        <rect x="20.0977" y="9.16211" width="2" height="20" transform="rotate(90 20.0977 9.16211)" fill="#7E5CEB" />
      </svg>
  );
}

export function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-[18px] rounded-lg bg-white">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="h-[90px] px-[38px] py-[25px] text-[14px] md:text-[18px] leading-[30px] font-[600] rounded-[10px] text-primary"
          style={{ boxShadow: ' 0px 6px 20px 0px rgba(13, 51, 32, 0.10)' }}
        >
          Prepared by Home Chefs
        </AccordionHeader>
        <AccordionBody className="px-[38px] py-[25px] text-[16px] text-[#707070] leading-[30px]">
          We serve something that no others can - Authentic food that celebrates culture & ethnicity in its true form! We can do this because the food is prepared with love by passionate & approved HomeCooks in Your Neighborhood.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="mb-[18px] rounded-lg bg-white">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="h-[90px] px-[38px] py-[25px] text-[14px] md:text-[18px] leading-[30px] font-[600] rounded-[10px] text-primary"
          style={{ boxShadow: ' 0px 6px 20px 0px rgba(13, 51, 32, 0.10)' }}
        >
          Hygiene certificate Level 2
        </AccordionHeader>
        <AccordionBody className="px-[38px] py-[25px] text-[16px] text-[#707070] leading-[30px]">
          We serve something that no others can - Authentic food that celebrates culture & ethnicity in its true form! We can do this because the food is prepared with love by passionate & approved HomeCooks in Your Neighborhood.
        </AccordionBody>
      </Accordion>

    </>
  );
}