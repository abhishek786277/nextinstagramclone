import React from "react";
import { faker } from "@faker-js/faker";

const suggestions = [...Array(5)].map((_, i) => ({
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
  id: i,
}));
function Suggestions() {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm">
        <h2 className="text-sm font-bold text-gray-400  [word-spacing:3px]">Suggestions for you</h2>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <div className="flex flex-col">
        {suggestions.map((profile) => {
          return (
            <div
              className="flex justify-between items-center mt-3"
              key={profile.id}
            >
              <div className="flex items-center space-x-2 w-1/2">
                <img
                  src={profile?.avatar}
                  alt=""
                  className="h-10 w-10 rounded-full border p-[2px]"
                />
                <h2 className=" text-sm font-semibold text-gray-600 indent-1 cursor-pointer truncate">
                  {profile.username}
                </h2>
              </div>
              <button className="text-sm text-blue-400 font-bold">Follow</button>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}

export default Suggestions;
