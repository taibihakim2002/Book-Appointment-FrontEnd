"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  GraduationCap,
  Instagram,
  MapPin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading1 from "./Loading1";
import Book from "./Book";

const Details = ({ params, userEmail }) => {
  const [doctor, setDoctor] = useState();
  const [doctors, setDoctors] = useState();

  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = () => {
    GlobalApi.getDoctorById(params.id)
      .then((res) => {
        setDoctor(res.data.data);
        getDoctorsByCategory(
          res.data.data.attributes.category.data.attributes.Name
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDoctorsByCategory = (c) => {
    GlobalApi.getDoctorsByCategory(c)
      .then((res) => {
        setDoctors(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto p-5 grid grid-cols-1 lg:grid-cols-6 gap-5">
      {doctor ? (
        <>
          <div className="border-[1px] rounded-xl p-3 col-span-6 lg:col-span-4 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Image
                className="rounded-lg w-full h-[300px] object-cover"
                src={doctor.attributes.Image.data.attributes.url}
                width={400}
                height={250}
                alt="Doctor Image"
              />
              <div className="flex flex-col gap-3 p-3">
                <h2 className="font-bold text-xl">{doctor.attributes.Name}</h2>
                <p className="font-light text-gray-500 flex gap-2">
                  <GraduationCap />
                  <span>
                    {doctor.attributes.Year_of_experience} Of Experience
                  </span>
                </p>
                <p className="font-light text-gray-500 flex gap-2">
                  <MapPin />
                  <span>{doctor.attributes.Address} Of Experience</span>
                </p>
                <p className="text-[11px] bg-blue-50 p-2 px-3 w-fit rounded-full text-primary">
                  {doctor.attributes.category.data.attributes.Name}
                </p>
                <div className="flex gap-3">
                  <Facebook />
                  <Twitter />
                  <Instagram />
                </div>
                <Book userEmail={userEmail} doctor={doctor.id} />
              </div>
            </div>
            <div className="border-[1px] rounded-xl p-5 col-span-4 mt-3">
              <h2 className="text-xl font-bold mb-5">About</h2>
              <p className="text-gray-500 font-[300] leading-[1.9]">
                {doctor.attributes.About[0].children[0].text}
              </p>
            </div>
          </div>
        </>
      ) : (
        <Loading1 />
      )}
      <div className="col-span-6 lg:col-span-2 p-4 border-[1px] rounded-xl flex flex-col gap-4">
        <h2 className="font-bold">Related Doctors</h2>
        {doctors
          ? doctors
              .filter((e) => e.id != params.id)
              .map((item) => {
                return (
                  <Link
                    href={"/details/" + item.id}
                    className="group relative grid grid-cols-3 border-[1px] rounded-lg p-2 gap-5 w-full"
                    key={item.id}
                  >
                    <p className="hidden opacity-50 group-hover:flex absolute w-full h-full bg-gray-500 justify-center items-center"></p>
                    <p className="hidden group-hover:flex absolute w-full h-full justify-center items-center">
                      <Button>Book Now</Button>
                    </p>
                    <Image
                      className="col-span-1 h-[100px] object-cover rounded-full"
                      src={item.attributes.Image.data.attributes.url}
                      width={100}
                      height={100}
                      alt="doctor image"
                    />
                    <div className="col-span-2">
                      <h2 className="font-bold mb-1">{item.attributes.Name}</h2>
                      <p className="text-[11px] bg-blue-50 p-2 px-3 w-fit rounded-full text-primary mb-1">
                        {item?.attributes?.category?.data?.attributes?.Name}
                      </p>
                      <p className="font-light text-gray-500 flex gap-2 text-[14px]">
                        <GraduationCap />
                        <span>
                          {doctor.attributes.Year_of_experience} Of Experience
                        </span>
                      </p>
                    </div>
                  </Link>
                );
              })
          : ""}
      </div>
    </div>
  );
};

export default Details;
