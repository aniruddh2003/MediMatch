"use client"
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';

const CategorySearch = () => {
  const [categoryList,setCategoryList] = useState([]);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      setCategoryList(res.data.data);
    })
  }
  useEffect(() => {
    getCategoryList();
  },[])
  return (
    <div className="mt-3 mb-10 flex flex-col gap-2 items-center">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="t ext-xl px-5 text-gray-500">
        Search Your Doctor and Book Appointment In One Click
      </h2>
      <div className="flex px-5 w-full max-w-sm items-center gap-3">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      {/* Display List of Categories */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5">
        {categoryList.length > 0 ? (
          categoryList.map(
            (item, index) =>
              index < 6 && (
                <Link
                  href={`/search/${item.attributes.Category_name.split(
                    " "
                  ).join("_")}`}
                  className="flex flex-col cursor-pointer items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-in-out"
                  key={index}
                >
                  <Image
                    src={item.attributes?.Category_image?.data.attributes?.url}
                    alt={"icon"}
                    width={40}
                    height={40}
                  />
                  <label className="text-blue-600 text-sm">
                    {item.attributes?.Category_name}
                  </label>
                </Link>
              )
          )
        ) : (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategorySearch
