"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SearchCategory = () => {
  // بيانات وهمية مع روابط أيقونات من الإنترنت
  const categoryList = [
    {
      id: 1,
      name: "Dentist",
      icon: "https://img.icons8.com/color/100/dentist.png",
    },
    {
      id: 2,
      name: "Cardiologist",
      icon: "https://img.icons8.com/color/100/heart-with-pulse.png",
    },
    {
      id: 3,
      name: "Orthopedic",
      icon: "https://img.icons8.com/color/100/broken-bone.png",
    },
    {
      id: 4,
      name: "Neurologist",
      icon: "https://img.icons8.com/color/100/brain.png",
    },
    {
      id: 5,
      name: "Otology",
      icon: "https://img.icons8.com/color/100/ear.png",
    },
    {
      id: 6,
      name: "General",
      icon: "https://img.icons8.com/color/100/doctor-male.png",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12 p-5">
        <h2 className="text-4xl font-bold mb-4">
          Search <span className="text-primary">Doctors</span>
        </h2>
        <p className="font-light text-gray-500">
          Search For Doctors Now And Make Appointment Now
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-center">
        {/* Search Bar */}
        <div className="flex w-full max-w-lg items-center space-x-2 mb-14">
          <Input type="text" placeholder="Search..." />
          <Button type="submit">
            <Search className="w-4 h-4 me-2" /> Search
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categoryList.map((item) => {
            return (
              <Link href={`/search/` + item.name} key={item.id}>
                <div className="flex flex-col gap-3 items-center bg-blue-50 p-4 rounded-xl text-center hover:scale-110 transition-all cursor-pointer h-full shadow-sm hover:shadow-md">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <p className="text-primary font-medium text-sm">{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;