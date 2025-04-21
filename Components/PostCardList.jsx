"use client";

import { useState, useEffect } from "react";
import NavigationBar from "./UI/postList/NavigationBar";
import PostCard from "./UI/postList/PostCard";

export default function PostCardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((res) => {
        if (!res.ok) throw new Error("فشل تحميل البيانات");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <NavigationBar />
      <div className="flex flex-col divide-y divide-gray-200">
        {posts.map((post) => (
          <div className="py-4 sm:py-6 first:pt-0 last:pb-0" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
