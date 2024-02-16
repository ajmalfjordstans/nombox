'use client'

import Image from "next/image"
import { useState } from "react";
import CategoryMenu from "./category-menu";
import MealSubscription from "./meal-subscription";
import LiveKitchen from "./live-kitchen";
import ChefNear from "./chef-near";
import Events from "./events";
import { ChefsNear, DailyDishes, SubscriptionMeals } from "@/Context/constants";
import { StickyNavbar } from "@/components/header";
import Footer from "@/components/footer";


export default function BuyPage() {
  const [inputFood, setInputFood] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [category, setCategory] = useState('meals')

  const handleInputFood = (e) => {
    setInputFood(e.target.value);
  };
  const handleInputLocation = (e) => {
    setInputLocation(e.target.value);
  };

  const renderCategoryComponent = () => {
    if (category === "meals") {
      return <MealSubscription meals={SubscriptionMeals} />;
    } else if (category === "live") {
      return <LiveKitchen data={DailyDishes} />;
    } else if (category == 'chef') {
      return <ChefNear chefs={ChefsNear} />;
    } else if (category == 'event') {
      return <Events />;
    }
  };

  return (
    <>
      <StickyNavbar />
      <div className="container mx-auto pt-[15px] md:pt-0 pb-[80px] px-[5%] xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[15px]">
          <div className="w-full flex gap-[15px]">
            <button className="h-[40px] w-[40px] rounded-[5px] border-[1px] border-[#EBEFF2] flex justify-center items-center">
              <Image
                src={'/logo/filter.svg'}
                width={18}
                height={18}
                alt="filter"
              />
            </button>
            <div className="relative rounded-[5px] border-[1px] border-[#EBEFF2] flex w-[100%]">
              <Image
                src={'/logo/Search.svg'}
                width={18}
                height={18}
                className="m-[11px]"
                alt="search"
              />
              <input
                type="text"
                value={inputFood}
                onChange={handleInputFood}
                placeholder="Search food, chef, etc"
                size="lg"
                className="border-none focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="relative rounded-[5px] border-[1px] border-[#EBEFF2] flex w-full col-span-2 mt-[15px] md:mt-0">
            <Image
              src={'/logo/LocationOutline.svg'}
              width={18}
              height={18}
              className="m-[11px]"
              alt="location"
            />
            <input
              type="text"
              value={inputLocation}
              onChange={handleInputLocation}
              placeholder="Unit 686, Moat House, 54 Bloomfield Avenue, Belfast, BT5 5 AD"
              size="lg"
              className="border-none focus:outline-none"
            />
          </div>
        </div>
        <CategoryMenu category={category} setCategory={setCategory} />
        {renderCategoryComponent()}
      </div>
      <Footer />
    </>
  )
}