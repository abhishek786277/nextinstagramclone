"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import homephone from "../../../public/homephone.png"
import screenshot1  from "../../../public/screenshot1.png"
import screenshot2  from "../../../public/screenshot1.png"
import screenshot3  from "../../../public/screenshot1.png"
import screenshot4  from "../../../public/screenshot1.png"
import googleimg  from "../../../public/googleimg.png"
import Instagram_logo_black  from "../../../public/Instagram_logo_black.webp"
import googleplay  from "../../../public/googleplay.png"
import microsoft  from "../../../public/microsoft.png"
function Sign() {
  const [count, setcount] = useState(0);
  const imgpath = [
    screenshot1,
    screenshot3,
    screenshot2,
    screenshot4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 3) {
        setcount(count + 1);
      } else {
        setcount(0);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="flex  items-center justify-center  gap-20 p-4 mt-7">
      <div className="relative hidden xl:inline-block">
        <Image src={homephone} alt="Phoneimage" priority={true} />
        <div className="absolute top-1/2  translate-x-1/3 -translate-y-[51%] h-auto w-full">
          <Image src={imgpath[count]} alt="Phoneimage" />;
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border border-gray-300 p-8 flex flex-col items-center justify-center">
          <Image src={Instagram_logo_black} className="w-40 mb-10" alt="" />
          <form className="flex flex-col items-center gap-4">
            <input
              type="email"
              name="email"
              id="email"
              className=" w-80 border-gray-300 px-2 rounded-md"
              placeholder="Phone number , username or email"
            />
            <input
              type="password"
              name="password"
              id="password"
              className="w-80 border-gray-300 px-2 rounded-md"
              placeholder="Password"
              autoComplete="on"
            />
            <button className="w-80 bg-blue-500 px-2 rounded-lg text-white font-semibold h-10 ">
              Log in
            </button>
            <div className="flex items-center">
              <span className="h-[1px] w-32 bg-gray-400"></span>
              <p className="text-gray-500 text-line mx-4">OR</p>
              <span className="h-[1px] w-32 bg-gray-400"></span>
            </div>

            <button className="font-semibold text-blue-500 hover:underline cursor-pointer" onClick={()=>signIn()}>
                <Image src={googleimg} alt="" className="w-6 inline-block mx-2"/>  Log in with Google</button>
            <button className="font-semibold text-blue-500 cursor-pointer hover:underline"  onClick={()=>signIn()}> <img src="github.png" className="w-6 inline-block mx-3"/>Log in with Github</button>
            <p className="text-xs">Forgot Password? </p>
          </form>
        </div>
        {/*  */}
        <div className="h-14 p-2 border rounded-md border-gray-300 w-full mt-4 flex justify-center items-center">
          Don't have an account ?{" "}
          <span className="font-semibold text-blue-500 mx-2 cursor-pointer hover:underline">Sign up</span>
        </div>
        {/*  */}
        {/*  */}
        <div className="text-center mt-2">
          Get the app.
          <div className="flex w-72 gap-2 mt-2">
            <Image src={googleplay} className="w-1/2" alt="" />
            <Image src={microsoft} className="w-1/2" alt="" />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Sign;
