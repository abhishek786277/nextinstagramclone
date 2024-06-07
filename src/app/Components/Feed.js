import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

const Feed = () => {
  const { data: session } = useSession();
   return( session && <main className=" grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-flow-col xl:max-w-6xl  mx-auto  ">
      <section className="">
        <Stories />
        <Posts />
      </section>
      <section className="hidden  md:inline-grid ">
        <div className="fixed  top-20">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
   )
};

export default Feed;
