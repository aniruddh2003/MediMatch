"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const getDoctors = () => {
    GlobalApi.getDoctorList().then((res) => {
      console.log(res);
      setDoctors(res.data.data);
    });
  };
  useEffect(() => {
    if (!doctors) return <p>Loading...</p>;
    getDoctors();
  }, []);
  return (
    <div>
      <h2 className="font-bold mt-4 text-xl">Popular Doctors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-3">
        {doctors.length > 0
          ? doctors.map((item, index) => (
              <div className="border-[2px] pb-3 m-2 cursor-pointer hover:border-primary shadow-sm transition-all ease-in-out">
                <div className=" bg-sky-100 m-4 rounded-lg" key={index}>
                  <Image
                    src={item.attributes?.Image?.data?.attributes?.url}
                    alt="doctor"
                    width={200}
                    height={400}
                    className=" w-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-center  items-center w-full mb-3 flex">
                  <h2 className="text-sm  bg-blue-200 text-primary p-2 mx-3 rounded-full">
                    {
                      item.attributes?.categories?.data[0]?.attributes
                        ?.Category_name
                    }
                  </h2>
                </div>
                <h2 className="mx-3 font-bold py-1">{item.attributes.Name}</h2>
                <h2 className="mx-3 text-primary text-sm pb-1">
                  {item.attributes.Years_of_experience} Years
                </h2>
                <h2 className="mx-3 text-gray-500 text-sm pb-1">
                  {item.attributes.Address}
                </h2>
                <Link href={"/details/" + item?.id} className="w-full">
                  <h2 className="mx-3 p-2 border-[1px] border-primary text-primary rounded-full w-[90%] text-center text-[11px] cursor-pointer hover:bg-primary hover:text-white">
                    Book Now
                  </h2>
                </Link>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6].map((item) => (
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-3 rounded-lg animate-pulse bg-slate-200 h-[220px]"
                key={item}
              ></div>
            ))}
      </div>
    </div>
  );
};

export default DoctorList;
