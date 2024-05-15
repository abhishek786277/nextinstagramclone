import React from "react";

function MiniProfile() {
  return (
    <div className="flex  items-center justify-between mt-14 ml-10">
      <img
        src="profilepic.avif"
        className="h-14 w-14 rounded-full p-[2px] border"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Abhishek786</h2>
        <h2 className="text-sm text-gray-400">Welcome To Instagram</h2>
      </div>
        <button className="text-sm text-blue-400  font-semibold">SignOut</button>
    </div>
  );
}

export default MiniProfile;
