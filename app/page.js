// Home_Page 

import Navbar from "@/Components/Navbar";
import PostCardList from "@/Components/PostCardList";
import RightSidebar from "@/Components/Staff_Picks";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-between md:flex-row flex-col">
        <div className="w-full md:w-3/4 md:pr-4 flex flex-col">
          <PostCardList />
        </div>
        <div className="hidden md:block md:w-1/4 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

