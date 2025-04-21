// Home_Page 

import Navbar from "@/Components/Navbar";
import PostCardList from "@/Components/PostCardList";
import RightSidebar from "@/Components/Staff_Picks";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-between md:flex-row flex-col gap-2">
        <div className="w-full md:w-[70%] flex flex-col md:h-[90vh] md:overflow-y-auto">
          <PostCardList />
        </div>
        <div className="hidden md:block md:w-[28%] md:sticky md:top-2 md:h-[90vh] md:overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
