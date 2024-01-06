import CardChef from "@/components/cards/card-chef";
import ChefSwiper from "@/components/swiper/chef-swiper";

export default function ChefNear({ chefs }) {
  return (
    <div>
      {/* <ChefSwiper chefs={chefs}/> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[40px]">
        {chefs?.slice(0, 4).map((data, id) => {
          return (
            <CardChef chef={data} key={id}/>
          )
        })}
      </div>
    </div>
  )
}