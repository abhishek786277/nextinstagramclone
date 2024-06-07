"use client";
import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { modalState } from "../atoms/modalAtom";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";

export default function Header() {
  const { data: session } = useSession();
  const [open,setopen] = useRecoilState(modalState)
  return (
    <div className="border-b shadow-sm z-[200] sticky top-0 bg-white">
      <div className=" flex justify-between items-center max-w-6xl mx-auto ">
        {/* Left */}
        <div className="">
          <div className="cursor-pointer h-10 w-24 relative hidden lg:inline-grid ">
            <Image
              src="/Instagram_logo_black.webp"
              fill
              className="object-contain"
            />
          </div>
          <div className="cursor-pointer h-12 w-20 relative  lg:hidden">
            <Image src="/instalogo.jpg" fill className="object-contain" />
          </div>
        </div>

        {/* Middle */}
        <div className="relative rounded-md  max-w-sm">
          <div className="absolute   h-7 pl-2 flex items-center ">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 pointer-events-none" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-8 block max-w-60 border-gray-300  focus:ring-gray-900 focus:border-gray-900 rounded-md h-7"
          />
        </div>

        {/* Right */}

        <div className="flex space-x-4 items-center justify-center">
          <Bars3Icon className="h-7 md:hidden" />
          <HomeIcon className="navBtn " />
          <HeartIcon className="navBtn" />
          <PlusCircleIcon className="navBtn" onClick={()=>setopen(!open)} />
          <UserGroupIcon className="navBtn" />
          <div className="relative">
            <PaperAirplaneIcon className="navBtn -rotate-45" />
            <div className=" cursor-pointer absolute -top-1 right-1 bg-red-500 rounded-full animate-bounce w-4  justify-center text-sm hidden md:flex">
              3
            </div>
          </div>
         
          <button onClick={() => session? signOut() : signIn()}>
            {session? <img
            src="./profilepic.avif"
            alt="profile pic"
            className="h-7 rounded-full cursor-pointer hover:scale-125"
          />:"SignIn"}</button>
        </div>
      </div>
    </div>
  );
}
