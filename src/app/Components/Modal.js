/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { db, storage } from "../../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Modal() {
  const capture = useRef(null);
  const caption = useRef(null);
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
  const { data: session } = useSession();

  const uploadpost = async () => {
    if (loading) return;
    setloading(true);
    const docref = await addDoc(collection(db, "posts"), {
      name: session?.user?.name,
      username: session?.user?.username,
      timestamp: serverTimestamp(),
      userimage: session?.user?.image,
      image: image,
      caption: caption?.current?.value,
    });
    const imgref = ref(storage, `posts/${docref.id}/image`);
    await uploadString(imgref, image, "data_url").then(async (snapshot) => {
      const downloadurl = await getDownloadURL(imgref);
      await updateDoc(doc(db, "posts", docref.id), {
        image: downloadurl,
      });
    });
    setloading(false);
    setopen(false);
    setimage("");
  };
  const handleclick = () => {
    //handle input file image upload
    capture.current.click();
  };
  const handlechange = (e) => {
    //upload image from storage or pc
    setopen(true);
    setimage(null);
    // const file = e.target.files[0];
    // const uploadedimg = URL.createObjectURL(file);
    // setimage(uploadedimg);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerevent) => {
      setimage(readerevent.target.result);
    };
  };

  const handledialog = () => {
    //close modal and delete the selected image
    setopen(false);
    setimage("");
    setloading(false);
  };
  const [open, setopen] = useRecoilState(modalState);
  return (
    open && (
      <dialog className=" shadow-md  top-0 flex justify-center items-center flex-col h-screen w-screen bg-white  bg-opacity-60 fixed ">
        <div className=" relative bg-white h-1/2 w-1/4 flex items-center justify-center border shadow-md flex-col">
          <span
            className="absolute cursor-pointer top-0 right-0 m-4"
            onClick={handledialog}
          >
            X
          </span>
          <div
            onClick={handleclick}
            className="h-fit w-fit  gap-6   flex flex-col items-center justify-center"
          >
            {!image ? (
              <>
                <CameraIcon className="h-14 w-14 bg-tranparent  cursor-pointer animate-pulse" />
                <p className="text-sm text-red-500">
                  Press Camera Icon to upload image
                </p>
              </>
            ) : (
              <picture>
                <img src={image} className="h-52" alt="" />
              </picture>
            )}

            <input
              type="file"
              className="hidden"
              ref={capture}
              accept="image/*"
              onChange={handlechange}
            />
          </div>
          <div className="flex flex-col mt-4">
            <input
              type="text"
              className="border-none mb-2"
              placeholder="Please enter a caption......."
              ref={caption}
            />
            {!loading ? (
              <button
                disabled={!image}
                className="bg-blue-500 p-2 rounded-md disabled:cursor-not-allowed disabled:bg-gray-500"
                onClick={uploadpost}
              >
                Upload a Photo
              </button>
            ) : (
              <button
                disabled={loading}
                className="bg-blue-500 p-2 rounded-md disabled:cursor-not-allowed disabled:bg-blue-300"
                onClick={uploadpost}
              >
                Uploading....
              </button>
            )}
          </div>
        </div>
      </dialog>
    )
  );
}
