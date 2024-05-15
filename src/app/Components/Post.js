"use client";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
FaceSmileIcon} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
const Post = ({ id, username, userimage, image, caption }) => {
  const Heartfly = () => {};
  return (
    <div className="cursor-pointer bg-white my-7 border rounded-sm">
      <div className=" gap-3  flex cursor-pointer items-center">
        <img
          src={userimage}
          className="h-12 w-12 rounded-full object-contain  p-1  border"
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="btn" />
      </div>
      <img
        src={image}
        onDoubleClick={Heartfly}
        className="object-cover w-full mb-3"
      />
      {/* buttons */}
      <div className="flex justify-between px-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftEllipsisIcon className="btn" />
          <PaperAirplaneIcon className="btn -rotate-12" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
    {/* // Comments section */}
    <form className="flex items-center px-4">
    <FaceSmileIcon className="h-7"/>
    <input type="text" placeholder="start typing your comment..." className="border-none focus:ring-0 flex-1"/>
    <button className="font-bold text-blue-500">Post</button>
    </form>
    </div>

  );
};

export default Post;
