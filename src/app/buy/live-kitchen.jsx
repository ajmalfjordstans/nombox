import CardDish from "@/components/cards/card-dishes";
import DishesSwiper from "@/components/swiper/dishes-swiper";

export default function LiveKitchen({ data }) {
  return (
    <div>
      <div className="mb-[60px]">
        <span className="text-primary font-[600] leading-[22px] text-[18px] mt-[30px]">Local Favorites</span>
        {/* <DishesSwiper data={data} /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[20px]">
          {data?.slice(0, 4).map((data, id) => {
            return (
              <CardDish dish={data} key={id}/>
            )
          })}
        </div>
      </div>
      <div className="mb-[60px]">
        <span className="text-primary font-[600] leading-[22px] text-[18px]">Local Indian Shefs</span>
        {/* <DishesSwiper data={data.slice(0, 2)} /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[20px]">
          {data?.slice(0, 2).map((data, id) => {
            return (
              <CardDish dish={data} key={id}/>
            )
          })}
        </div>
      </div>
      <div className="mb-[60px]">
        <span className="text-primary font-[600] leading-[22px] text-[18px]">Local Chinese Shefs</span>
        {/* <DishesSwiper data={data.slice(0, 2)} /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[20px]">
          {data?.slice(0, 6).map((data, id) => {
            return (
              <CardDish dish={data} key={id}/>
            )
          })}
        </div>
      </div>
      <div className="mb-[60px]">
        <span className="text-primary font-[600] leading-[22px] text-[18px]">Local Pakistani Shefs</span>
        {/* <DishesSwiper data={data.slice(0, 2)} /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[20px]">
          {data?.slice(0, 4).map((data, id) => {
            return (
              <CardDish dish={data} key={id}/>
            )
          })}
        </div>
      </div>
      <div className="mb-[60px]">
        <span className="text-primary font-[600] leading-[22px] text-[18px]">Local Middle Eastern Shefs</span>
        {/* <DishesSwiper data={data.slice(0, 2)} /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[20px]">
          {data?.slice(0, 4).map((data, id) => {
            return (
              <CardDish dish={data} key={id}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}