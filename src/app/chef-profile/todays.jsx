import { DailyDishes } from "@/Context/constants"
import CardDish from "@/components/cards/card-dishes"


export default function Todays() {
  return (
    <div className="p-[19px] bg-white rounded-[8px] shadow-custom flex flex-col">
      <span>Calendar here</span>
      <span className="text-primary text-[18px] font-[600] leading-[22px]">Today’s Menu</span>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[15px] mt-[20px]">
        {DailyDishes?.slice(0, 2).map((data, id) => {
            return (
              <CardDish dish={data} key={id}/>
            )
          })}
      </div>
    </div>
  )
}