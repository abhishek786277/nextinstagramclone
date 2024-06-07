// "use client";
// import React from "react";
// import { CameraIcon } from "@heroicons/react/24/outline";
// import { useRef, useState } from "react";

// function Ch() {
//   const capture = useRef(null);
//   const [image, setimage] = useState("")
//   const handleclick = (e) => {
//     setimage(null)
//     capture.current.click();
//   };
//   const handlechange = (e) => {
//     setimage(null)
//     const file = e.target.files[0];
//     const uploadedimg = URL.createObjectURL(file)
//     setimage(uploadedimg)
//   };
//   return (
//     <div className="flex justify-center items-center flex-col h-screen bg-blue-400 ">
//       <div className="shadow-lg bg-transparent h-fit w-fit">
//         <img src={image} alt="" className="h-64  object-contain" />
//       </div>
//       <div onClick={handleclick} className="h-28 w-28 opacity-20 bg-white  flex items-center justify-center">
//         <CameraIcon className="h-14 w-14 bg-tranparent" />
//         <input type="file" className="hidden" ref={capture} accept="image/*" onChange={handlechange}/>
//       </div>
//     </div>
//   );
// }

// export default Ch;
