import Post from "./Post";
function Posts() {
  const Postdata = [
    {
      id: "123",
      username: "sunny340",
      userimage: "/profilepic.avif",
      image: "/Hrk.webp",
      Caption: "How's My intsa fam is Doing................",
    },
    {
      id: "456",
      username: "Kendall_fans",
      userimage: "/Kendall.jpg",
      image: "./kendall2.jpg",
      Caption:
        "m YO MY NIGGAS IS DOING lifes good im doping lets sing some shit togetger",
    },
    {
      id: "789",
      username: "Kendall",
      userimage: "/Kendall.jpg",
      image: "./kendallVogue.jpg",
      Caption:
        "m YO MY NIGGAS IS DOING lifes good im doping lets sing some shit togetger",
    },
  ];
  return (
    <div>
      {Postdata.map((post, id) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userimage={post.userimage}
            image={post.image}
            caption={post.Caption}
          />
        );
      })}
    </div>
  );
}

export default Posts;
