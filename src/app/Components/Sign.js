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
      clearInterval(interval)
    }
  }, [count])
  

  return (
    <div className="flex  items-center justify-center border border-red-700">
      {/* <div className="relative border border-yellow"> */}
      <img src="home-phones.png" alt="Phoneimage" className="relative" />
      <div className="absolute top-1/2 left-1/2  -translate-x-[31%] -translate-y-[50%]">
        <img src={imgpath[count]} alt="Phoneimage" />;{/* </div> */}
      </div>
     
    </div>
  );
}

export default Sign;
