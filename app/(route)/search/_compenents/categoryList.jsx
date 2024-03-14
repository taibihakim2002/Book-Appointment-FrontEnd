"use client";
import { useEffect, useState } from "react";
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
import GlobalApi from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const path = usePathname();
  let category = path.split("/")[2].replace("%20", " ");
  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    getCategoriesList();
  }, []);

  const getCategoriesList = () => {
    GlobalApi.getCategories()
      .then((res) => {
        setCategoryList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Command className="h-fit max-h-screen">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="h-fit max-h-screen ">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Categories">
          {categoryList &&
            categoryList.map((item) => {
              return (
                <CommandItem className="cursor-pointer" key={item.id}>
                  <Link
                    className={`p-3 flex gap-4 items-center w-full py-4 rounded-md ${
                      category === item.attributes?.Name && "bg-blue-100"
                    }`}
                    href={`/search/` + item.attributes?.Name}
                  >
                    <Image
                      src={item.attributes?.Icon?.data?.attributes?.url}
                      width={25}
                      height={25}
                      alt="category Image"
                    />
                    <p className="text-primary">{item.attributes?.Name}</p>
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
