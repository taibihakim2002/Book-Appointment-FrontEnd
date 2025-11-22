"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const path = usePathname();
  // استخراج اسم التصنيف من الرابط (decodeURIComponent يعالج المسافات مثل %20)
  const category = decodeURIComponent(path.split("/")[2]);

  // بيانات وهمية متطابقة مع الصفحة الرئيسية
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
    <Command className="h-fit max-h-screen bg-white rounded-lg border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="h-fit max-h-screen ">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Categories">
          {categoryList.map((item) => {
            return (
              <CommandItem className="cursor-pointer" key={item.id}>
                <Link
                  className={`p-3 flex gap-4 items-center w-full py-4 rounded-md ${
                    // مقارنة الاسم الحالي بالاسم في الرابط لتغيير الخلفية
                    category === item.name ? "bg-blue-100" : "hover:bg-gray-100"
                  }`}
                  href={`/search/` + item.name}
                >
                  <Image
                    src={item.icon}
                    width={25}
                    height={25}
                    alt="category Image"
                    className="object-contain"
                  />
                  <p className="text-primary font-medium">{item.name}</p>
                </Link>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default CategoryList;