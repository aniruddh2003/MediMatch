"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Suggestion = ({doctor, id}) => {
  let cat = doctor?.attributes?.categories?.data[0]?.attributes?.Category_name
  let category = cat ? (cat).split("_").join(" ") : "Cardiologist";
  let [categoryList, setCategoryList] = useState([]);
  let getCategoryList = (category) => {
    GlobalApi.getDoctorByCategory(category).then((res) => {
      console.log(res);
      setCategoryList(res.data.data);
    });
  };
  useEffect(() => {
    getCategoryList(category);
  }, [cat,id]);
  return (
    <div className="p-4 xl:flex xl:flex-col border-[1px] hidden border-black  ml-4 rounded-lg ">
      <h2 className="font-bold text-xl">Suggestions</h2>
      <div className="flex flex-col gap-2">
        {categoryList.length > 0
          ? categoryList.map((item, index) => item?.id !== doctor?.id  && (
              <Link href={"/details/" + item?.id}>
                <div
                  className="pb-3 m-2 cursor-pointer hover:border-primary shadow-sm transition-all ease-in-out border-black border-[1px] flex p-3 gap-2 rounded-lg"
                  key={index}
                >
                  <div className="rounded">
                    <Image
                      src={item.attributes?.Image?.data?.attributes?.url}
                      alt="doctor"
                      width={100}
                      height={150}
                      className="object-fit rounded-lg bg-sky-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-center  items-center w-full my-2 flex">
                      <h2 className="text-sm  bg-blue-200 text-primary p-2 rounded-full">
                        {
                          item?.attributes?.categories?.data[0]?.attributes
                            ?.Category_name
                        }
                      </h2>
                    </div>
                    <h2 className="font-bold">{item.attributes.Name}</h2>
                    <h2 className=" text-primary font-bold text-sm">
                      {item.attributes.Years_of_experience} Years
                    </h2>
                  </div>
                </div>
              </Link>
            ))
          : [1, 2, 3].map((item) => (
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-3 rounded-lg animate-pulse bg-slate-200 h-[220px]"
                key={item}
              ></div>
            ))}
      </div>
    </div>
  );
}

export default Suggestion
