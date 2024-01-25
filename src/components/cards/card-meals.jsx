export default function CardMeals({data}) {
  return (
    <div className="h-[350px] w-[full] md:max-w-[95%] rounded-[10px] relative"
      style={{
        backgroundImage: `url("${data?.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        boxShadow: '0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
      }}
    >
      <div
        className="h-[30px] w-[187px] bg-[#7E5CEB] rounded-tr-[5px] rounded-br-[5px] flex justify-center items-center text-white text-[16px] font-[600] transform translate-y-[26px]"
      >{data?.type}</div>
      <div className="absolute bottom-[12px] left-[12px] w-[92%] md:min-h-[101px] bg-white rounded-[8px] flex flex-col p-[20px]">
        <span className="text-[16px] leading-[125%] tracking-[-0.24px] text-primary">{data?.validity}</span>
        <span className="text-[12px] leading-[20px] text-[#AEAEAE]">{data?.kitchen}</span>
        <div className="flex w-full justify-between flex-col md:flex-row flex-wrap">
          <div className="flex gap-2">
            <span className="text-[16px] text-[#7E5CEB] font-[600]">£{data?.offPrice.toFixed(2)}</span>
            <span className="text-[14px] text-[#AEAEAE] line-through">£{data?.price.toFixed(2)}</span>
            <span className="text-[16px] text-[#FF922C] font-[600]">{data?.off}% OFF</span>
          </div>
          <button className="bg-[#2E266F] px-[8px] rounded-[4px] text-white">View Menu</button>
        </div>
      </div>
    </div>
  )
}