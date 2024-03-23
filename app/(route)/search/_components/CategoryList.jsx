"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, {useState, useEffect} from 'react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);
    const params = usePathname();
    const category = params.split('/')[2];
    const getCategoryList = () => {
      GlobalApi.getCategory().then((res) => {
        setCategoryList(res.data.data);
      });
    };
    useEffect(() => {
      getCategoryList();
    }, []);
    
  return (
    <div className="h-screen mt-5 flex flex-col">
      <Command className="rounded-lg">
        <CommandInput className="hidden sm:flex" placeholder="Search Category" />
        <CommandList className="overflow-visible text-black">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {categoryList.map((item, index) => (
              <CommandItem key={index}>
                <Link
                  href={`/search/${item.attributes.Category_name.split(
                    " "
                  ).join("_")}`}
                  className={`p-2 flex cursor-pointer gap-2 text-primary rounded-md w-full hover:bg-neutral-100 items-center ${
                    category ===
                    item.attributes.Category_name.split(" ").join("_")
                    && 'bg-blue-100'
                  }`}
                >
                  <Image
                    src={item.attributes?.Category_image?.data.attributes?.url}
                    alt={"icon"}
                    width={25}
                    height={25}
                  />
                  <label className='hidden sm:flex'>{item.attributes.Category_name}</label>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}

export default CategoryList