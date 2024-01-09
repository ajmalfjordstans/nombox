import Image from "next/image";

export default function Location() {
  return (
    <div className="p-[19px] bg-white rounded-[8px] shadow-custom flex flex-col">
      <span className="text-[#2E266F] text-[18px] font-[600] leading-[22px]">Location</span>
      <div className="mt-[20px] grid grid-cols-1 gap-[20px] md:flex relative">
        <Image
          className="object-cover"
          width={917}
          height={287}
          src='/images/temp/map.png'
          alt="map"
        />
        <div className="rounded-[10px] md:max-w-[278px] h-[220px] shadow-custom flex flex-col justify-between p-[30px] md:absolute bg-white md:top-4 right-4">
          <span className="text-[11px] font-[600] leading-[22px] uppercase text-[#838383]">Location</span>
          <span className="text-[#7D5EE9] text-[14px] font-[600] leading-[22px]">Based in Caerau Cardiff</span>
          <span className="text-[#2E266F] text-[12px] font-[400] leading-[22px]">(The exact location for pickup will be shared post purchase.)</span>
          <span className="text-[11px] font-[600] leading-[22px] uppercase text-[#838383]">GENERAL PICKUP TIME</span>
          <span className="text-[#2E266F] text-[14px] font-[600]">5:30 PM - 7:00 PM</span>
        </div>
      </div>
    </div>
  )
}