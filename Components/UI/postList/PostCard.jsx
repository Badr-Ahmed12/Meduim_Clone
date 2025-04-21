"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Minus, Bookmark, MoreHorizontal } from "lucide-react";

export default function PostCard({ post }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article className="max-w-[680px] mx-auto py-6 px-4">
      {/* Meta Info */}
      <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
        <span className="hover:text-black cursor-pointer">Classy Endeavors</span>
        <span>·</span>
        <span className="hover:text-black cursor-pointer">Piyush</span>
      </div>

      {/* Body */}
      <div className="flex gap-6">
        {/* Content */}
        <div className="flex-1">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2 hover:text-gray-700 cursor-pointer">
            {post.title}
          </h2>
          <p className="text-lg text-gray-600 leading-7 line-clamp-2 mb-4">
            {post.content}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <time className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <span className="text-gray-300">·</span>
              <span className="text-sm text-gray-500">6 min read</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Hide post"
              >
                <Minus className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Bookmark post"
              >
                <Bookmark
                  className={`w-5 h-5 transition-colors ${
                    isBookmarked
                      ? "text-green-600 fill-green-600"
                      : "text-gray-600"
                  }`}
                />
              </button>
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="More options"
              >
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden sm:block w-32 h-32">
          <Image
            src={post.image}
            alt="Post thumbnail"
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-md hover:opacity-90 transition-opacity"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-8 border-gray-200" />
    </article>
  );
}
