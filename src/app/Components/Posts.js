"use client";
import { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
function Posts() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts")),
      orderBy("timestamp", "desc"),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <div>
      {Posts?.map((post, id) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            name={post.data().name}
            username={post.data().username}
            userimage={post.data().userimage}
            image={post.data().image}
            caption={post.data().caption}
          />
        );
      })}
    </div>
  );
}

export default Posts;
