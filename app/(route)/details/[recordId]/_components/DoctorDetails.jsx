import Image from "next/image";
import React from "react";
import {
  GraduationCap,
  MapPin,
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BookAppointmnet from "./BookAppointmnet";

const DoctorDetails = ({ doctor }) => {
  return (
      <div
        className="col-span-3 grid grid-cols-1 sm:grid-cols-2 "
        id="Doctor Detail"
      >
        <div className="col-span-3 grid grid-cols-3 gap-4 border-black border-[1px] p-5 rounded-lg">
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src={doctor?.attributes?.Image?.data?.attributes?.url}
              width={500}	
              height={500}	
              alt="doctor-image"
              className="bg-sky-200 rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="py-4 flex flex-col gap-1 sm:px-4">
            <h2 className="font-bold text-md sm:text-xl md:text-2xl">
              {doctor?.attributes?.Name}
            </h2>
            <h2 className="flex gap-2 items-cente text-sm text-gray-500">
              <GraduationCap />
              {doctor?.attributes?.Years_of_experience} Years
            </h2>
            <h2 className="flex gap-2 text-sm text-gray-500">
              <MapPin />
              {doctor?.attributes?.Address}
            </h2>
            <div className="text-center  items-center w-full my-2 flex">
              <h2 className="text-sm  bg-blue-200 text-primary p-2 rounded-full">
                {
                  doctor?.attributes?.categories?.data[0]?.attributes
                    ?.Category_name
                }
              </h2>
            </div>

            <div className="flex gap-2 ">
              <div className="p-2 rounded-full bg-red-500">
                <Youtube className="bg-red-500 text-white" />
              </div>
              <div className="p-2 rounded-full bg-blue-900">
                <Facebook className="bg-blue-900 text-white" />
              </div>
              <div className="p-2 rounded-full bg-sky-400">
                <Twitter className="bg-sky-400 text-white" />
              </div>
              <div className="p-2 rounded-full bg-blue-600">
                <Linkedin className="bg-blue-600 text-white" />
              </div>
            </div>
            <BookAppointmnet />
          </div>
        </div>
        <div className="col-span-3 mt-4 border-black border-[1px] p-5 rounded-lg">
          <h2 className="font-bold text-[20px]">About Me:</h2>
          <p className="text-gray-500 tracking-wide mt-2">
            {doctor?.attributes?.About}
          </p>
        </div>
      </div>
  );
};

export default DoctorDetails;
