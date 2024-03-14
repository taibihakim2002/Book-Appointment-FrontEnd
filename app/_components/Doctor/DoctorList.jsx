"use client";
import { useEffect, useState } from "react";
import GlobalApi from "../../_utils/GlobalApi";
import Loading from "./Loading";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState();
  useEffect(() => {
    getDoctorList();
  }, []);
  const getDoctorList = () => {
    GlobalApi.getDoctors()
      .then((res) => setDoctorList(res.data.data))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-16">
      <div className="text-center mb-12 p-5">
        <h2 className="text-4xl font-bold mb-4">
          Popular <span className="text-primary">Doctors</span>
        </h2>
        <p className="font-light text-gray-500">
          Popular Doctors In Our Website
        </p>
      </div>
      <div className="container mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {doctorList ? (
          doctorList.map((doctor) => {
            return <DoctorCard doctor={doctor} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default DoctorList;
