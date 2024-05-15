import Post from "./Post";
const Postdata = [
  {
    id: "123",
    username: "sunny340",
    userimage: "/profilepic.avif",
    image: "/profilepic.avif",
    Caption: "m YO MY NIGGAS IS DOING",
  },
  {
    id: "456",
    username: "sunny340",
    userimage: "/profilepic.avif",
    image: "/profilepic.avif",
    Caption: "m YO MY NIGGAS IS DOING lifes good im doping lets sing some shit togetger",
  },
];
function Posts() {
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
