"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import GlobalApi from "../../_utils/GlobalApi";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "./Loading";
import Link from "next/link";

const SearchCategory = () => {
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
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12 p-5">
        <h2 className="text-4xl font-bold mb-4">
          Search <span className="text-primary">Doctors</span>
        </h2>
        <p className="font-light text-gray-500">
          Search For Doctors Now And Make Apointente Now
        </p>
      </div>

      <div className="container mx-auto flex flex-col items-center">
        <div className="flex w-full max-w-lg items-center space-x-2 mb-14">
          <Input type="text" placeholder="Search..." />
          <Button type="submit">
            <Search className="w-4 h-4 me-2" /> Search
          </Button>
          
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categoryList ? (
            categoryList.map((item) => {
              return (
                <Link href={`/search/` + item?.attributes?.Name}>
                  <div
                    className="flex flex-col gap-3 items-center bg-blue-50 p-4 rounded-xl text-center hover:scale-110 transition-all cursor-pointer"
                    key={item?.id}
                  >
                    <Image
                      src={item.attributes?.Icon?.data?.attributes?.url}
                      alt="category"
                      width={50}
                      height={50}
                    />
                    <p className=" text-primary">{item?.attributes?.Name}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
