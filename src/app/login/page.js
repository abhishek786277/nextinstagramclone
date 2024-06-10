"use client";
import React, { useEffect } from "react";
import { useState } from "react";
function Sign() {
  const [count, setcount] = useState(0);
  const imgpath = [
    "screenshot1.png",
    "screenshot3.png",
    "screenshot2.png",
    "screenshot4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 3) {
        setcount(count + 1);
      } else {
        setcount(0);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div className="flex  items-center justify-center  gap-20 p-4 mt-7">
      <div className="relative">
        <img src="home-phones.png" alt="Phoneimage" />
        <div className="absolute top-1/2  translate-x-1/3 -translate-y-[51%] h-auto w-full">
          <img src={imgpath[count]} alt="Phoneimage" />;
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border border-gray-300 p-8 flex flex-col items-center justify-center">
          <img src="Instagram_logo_black.webp" className="w-40 mb-10" />
          <form action="" className="flex flex-col items-center gap-4">
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

            <p className="font-semibold text-blue-500 hover:underline cursor-pointer">
                <img src="googleimg.png" className="w-6 inline-block mx-2"/>  Log in with Google</p>
            <p className="font-semibold text-blue-500 cursor-pointer hover:underline"> <img src="github.png" className="w-6 inline-block mx-3"/>Log in with Github</p>
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
            <img src="googleplay.png" className="w-1/2" />
            <img src="microsoft.png" className="w-1/2" />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Sign;
