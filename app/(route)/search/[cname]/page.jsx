"use client";
import DoctorCard from "@/app/_components/Doctor/DoctorCard";

import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Page = ({ params }) => {
  const [doctors, setDoctors] = useState();

  useEffect(() => {
    getDoctors();
  }, []);
  const getDoctors = () => {
    GlobalApi.getDoctorsByCategory(params.cname)
      .then((res) => {
        setDoctors(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="ms-6">
        <h1 className="font-bold text-lg">Doctor List</h1>
      </div>
      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {doctors ? (
          doctors.map((doctor) => {
            return <DoctorCard key={doctor.id} doctor={doctor} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Page;
