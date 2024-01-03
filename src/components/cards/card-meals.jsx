export default function CardMeals() {
  return (
    <div className="h-[350px] w-[300px] md:w-[378px] rounded-[10px] relative"
      style={{
        backgroundImage: 'url("/images/temp/meal1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        boxShadow: '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
      }}
    >
      <div
        className="h-[30px] w-[187px] bg-[#7E5CEB] rounded-tr-[5px] rounded-br-[5px] flex justify-center items-center text-white text-[16px] font-[600] transform translate-y-[26px]"
      >Lunch & Dinner Pack</div>
      <div className="absolute bottom-[12px] left-[12px] w-[90%] md:w-[354px] md:h-[101px] bg-white rounded-[8px] flex flex-col p-[20px]">
        <span className="text-[16px] leading-[125%] tracking-[-0.24px] text-[#2E266F]">20 Meals (35 days validity)</span>
        <span className="text-[12px] leading-[20px] text-[#AEAEAE]">Lilly’s kitchen, Belfast</span>
        <div className="flex w-full justify-between flex-col md:flex-row">
          <div className="flex gap-2">
            <span className="text-[16px] text-[#7E5CEB] font-[600]">£250.00</span>
            <span className="text-[14px] text-[#AEAEAE] line-through">£300.00</span>
            <span className="text-[16px] text-[#FF922C] font-[600]">17% OFF</span>
          </div>
          <button className="bg-[#2E266F] px-[8px] rounded-[4px] text-white">View Menu</button>
        </div>
      </div>
    </div>
  )
}