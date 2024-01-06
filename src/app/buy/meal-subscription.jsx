import CardMeals from "@/components/cards/card-meals";
import MealsSwiper from "@/components/swiper/meals-swiper";

export default function MealSubscription({ meals }) {
  return (
    <div>
      {/* <MealsSwiper meals={meals}/> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-[40px]">
        {meals?.map((meal, id) => {
          return (
            <CardMeals data={meal} key={id}/>
          )
        })}
      </div>
    </div>
  )
}