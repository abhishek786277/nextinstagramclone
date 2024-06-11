/* eslint-disable @next/next/no-img-element */
"use client";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Moment from "react-moment";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { setDoc } from "firebase/firestore";

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  onSnapshot,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
//
const Post = ({ id, username, userimage, image, caption }) => {
  const Heartfly = () => {};
  const [comment, setcomment] = useState("");
  const [comments, setcomments] = useState([]);
  const [likes, setlikes] = useState([]);
  const [haslike, sethaslike] = useState(false);
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setcomments(snapshot.docs)
      ),
    [id]
  );
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "likes"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setlikes(snapshot.docs)
      ),
    [id]
  );

 useEffect(() => {
  const like =
  likes.findIndex((like) => like.id === session?.user?.uid) !== -1;
sethaslike(like);
 }, [likes])
 

  const { data: session } = useSession();
  // Delete comment from firestore db
  const Deletecomment = (commentid) => {
    // e.preventDefault()
    const docref = doc(db, "posts", id, "comments", commentid);
    deleteDoc(docref).then(() => console.log("deleted"));
  };

  //Add comment to the database
  const Oncomment = async (e) => {
    e.preventDefault();
    const commenttosend = comment;
    setcomment("");
    const docref = await addDoc(collection(db, "posts", id, "comments"), {
      username: session.user.name,
      userimage: session.user.image,
      comment: commenttosend,
      timestamp: serverTimestamp(),
    });
  };
  //Add likes to the database
  const Onlike = async (e) => {
    // e.preventDefault();
    if (haslike) {
      const docref = doc(db, "posts", id, "likes", session?.user?.uid);
      deleteDoc(docref).then(() => console.log("deleted"));
    } else {
      const docref = await setDoc(
        doc(db, "posts", id, "likes", session.user.uid),
        {
          username: session.user.username,
          timestamp: serverTimestamp(),
        }
      );
    }
  };
  return (
    <div className="cursor-pointer bg-white my-7 border rounded-sm">
      <div className=" gap-3  flex cursor-pointer items-center">
        <img
          src={userimage}
          className="h-12 w-12 rounded-full object-contain  p-1  border"
          alt=""
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="btn" />
      </div>
      <img
        src={image}
        onDoubleClick={Heartfly}
        className="w-fit mx-auto object-cover mb-3"
        alt=""
      />
      {/* buttons */}
      <div className="flex justify-between px-4">
        <div className="flex space-x-4">
          {!haslike ? (
            <HeartIcon className="btn" onClick={Onlike} />
          ) : (
            <HeartIconSolid className="btn text-red-600" onClick={Onlike} />
          )}
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
      {/* Comment data */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {comments.map((comment) => {
            return (
              <div className="flex space-x-2 p-2 items-center" key={comment.id}>
                <img
                  className="h-7  rounded-full inline-block"
                  src={comment.data().userimage}
                  alt=""
                />

                <span className="flex-1 overflow-x-hidden">
                  <h2 className="inline-block font-semibold mx-2">
                    {comment.data().username}
                  </h2>
                  {comment.data().comment}
                  <Moment fromNow className="text-xs block ml-2">
                    {comment.data().timestamp?.toDate()}
                  </Moment>
                </span>

                <TrashIcon
                  className="h-4 text-red-500"
                  onClick={() =>(Deletecomment(comment.id))}
                />
              </div>
            );
          })}
        </div>
      )}
      {/* // Comments section */}
      <form className="flex items-center px-4">
        <FaceSmileIcon className="h-7" />
        <input
          type="text"
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
          placeholder="start typing your comment..."
          className="border-none focus:ring-0 flex-1"
        />
        <button
          className="font-bold text-blue-500 disabled:cursor-not-allowed disabled:text-blue-400"
          onClick={Oncomment}
          disabled={!comment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
