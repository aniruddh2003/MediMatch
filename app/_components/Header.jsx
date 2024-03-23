"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact-us",
    },
  ]

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user)
  },[user])

  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <div className="flex sm:text-3xl text-xl justify-center items-center font-extrabold">
          <Image src="/logo.svg" alt="logo" width={90} height={60} className="h-[3vh] sm:h-auto"/>
          <h1 className="text-primary"> MediMatch</h1>
        </div>
        <ul className="lg:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <li className="hover:text-primary font-[500] cursor-pointer hover:scale-105">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {user === null ? <RegisterLink>
        <Button>Get Started</Button>
      </RegisterLink> : 
      <Popover>
  <PopoverTrigger><Image src={user?.picture} alt="profile-image" width={50} height ={50} className="rounded-full"/>
  </PopoverTrigger>
  <PopoverContent className="w-44">
    <ul className='flex flex-col cursor-pointer gap-2'>
      <li className='cursor:pointer p-2 hover:bg-slate-100 rounded-md'>Profile</li>
      <li className='cursor:pointer p-2 hover:bg-slate-100 rounded-md'>My Booking</li>
      <li className='cursor:pointer p-2 hover:bg-slate-100 rounded-md'><LogoutLink>Logout</LogoutLink></li>
    </ul>
  </PopoverContent>
</Popover>

      }
    </div>
  );
};

export default Header;
