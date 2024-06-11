"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function MiniProfile() {
  const { data: session } = useSession();
  const Sign = () => {
    if (session) {
      signOut();
    } else {
      signIn();
    }
  };
  return (
    <div className="flex  items-center justify-between mt-14 ml-10 ">
      <div className="h-14 w-14 relative">
        <Image
          src="/profilepic.avif"
          className="rounded-full p-[2px] border"
          fill
          alt=""
        />
      </div>
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.name}</h2>
        <h2 className="text-sm text-gray-400">Welcome To Instagram</h2>
      </div>
      <button className="text-sm text-blue-400  font-semibold" onClick={Sign}>
        {session ? "SignOut" : "SignIn"}
      </button>
    </div>
  );
}

export default MiniProfile;
