import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function Hear() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const isSelected = (item) => selectedItems.includes(item);
  return (
    <div className='flex flex-col max-w-[423px] gap-10 px-[5%] pt-[2vh]'>
      <p className="font-[700] text-[24px] md:text-[30px] leading-[36px] md:leading-[45px] text-center text-primary">How did you hear about us?</p>

      <div className="flex flex-wrap justify-center gap-[15px]">
        <div className={`${isSelected('Social media') ? 'bg-[#7E5CEB] text-white' : 'bg-white text-[#7E5CEB] border-[#7E5CEB] border-[2px]'} px-[15px] py-[7.5px] rounded-[25px] flex items-center hover:cursor-pointer `}
          onClick={() => handleItemClick('Social media')}
        >
          <span className="">Social media</span>
        </div>
        <div className={`${isSelected('Friends') ? 'bg-[#7E5CEB] text-white' : 'bg-white text-[#7E5CEB] border-[#7E5CEB] border-[2px]'} px-[15px] py-[7.5px] rounded-[25px] flex items-center  hover:cursor-pointer `}
          onClick={() => handleItemClick('Friends')}
        >
          <span className="">Friends</span>
        </div>
        <div className={`${isSelected('Search') ? 'bg-[#7E5CEB] text-white' : 'bg-white text-[#7E5CEB] border-[#7E5CEB] border-[2px]'} px-[15px] py-[7.5px] rounded-[25px] flex items-center hover:cursor-pointer `}
          onClick={() => handleItemClick('Search')}
        >
          <span className="">Search</span>
        </div>
        <div className={`${isSelected('Event') ? 'bg-[#7E5CEB] text-white' : 'bg-white text-[#7E5CEB] border-[#7E5CEB] border-[2px]'} px-[15px] py-[7.5px] rounded-[25px] flex items-center hover:cursor-pointer `}
          onClick={() => handleItemClick('Event')}
        >
          <span className="">Event</span>
        </div>
        <div className={`${isSelected('Chef') ? 'bg-[#7E5CEB] text-white' : 'bg-white text-[#7E5CEB] border-[#7E5CEB] border-[2px]'} px-[15px] py-[7.5px] rounded-[25px] flex items-center hover:cursor-pointer `}
          onClick={() => handleItemClick('Chef')}
        >
          <span className="">Chef</span>
        </div>
        <div className={`${isSelected('Article') ? 'bg-[#7E5CEB] text-white' : 'bg-white text-[#7E5CEB] border-[#7E5CEB] border-[2px]'} px-[15px] py-[7.5px] rounded-[25px] flex items-center hover:cursor-pointer `}
          onClick={() => handleItemClick('Article')}
        >
          <span className="">Article</span>
        </div>
      </div>
      <Button
        fullWidth
        className="bg-[#7E5CEB] capitalize font-poppins leading-[24px] mt-[10px]"
      >
        Finish
      </Button>

    </div>
  )
}
