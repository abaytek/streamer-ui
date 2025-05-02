import Image from "next/image";
import React from "react";

const categories = [
  {
    id: 1,
    name: "Stream Destpek",
    icon: "/assets/1.png",
  },
  {
    id: 2,
    name: "TV Channels",
    icon: "/assets/2.png",
  },
  {
    id: 3,
    name: "Live Streams",
    icon: "/assets/3.png",
  },
];

const Categories = () => {
  return (
    <div className="pt-10 flex min-w-[250px] flex-col gap-6 items-start">
      {categories.map((category) => (
        <div className="relative cursor-pointer" key={category.id}>
          <div className=" object-contain" key={category.id}>
            <Image
              height={140}
              className="object-contain flex justify-center"
              width={250}
              src={category.icon}
              alt={category.name}
            />
            <p className="text-[26px] font-semibold -mt-10 text-center">{category.name}</p>
          </div>
          <Image height={100} width={300} className="absolute -top-1 left-2 right-8 -z-10" src="/assets/bg.png" alt="bg" />
          <Image  height={100} width={300} className="absolute -top-3 left-2 right-8 -z-10" src="/assets/bg.png" alt="bg" />
        </div>

      ))}
    </div>
  );
};

export default Categories;
