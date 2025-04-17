"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Minus, Bookmark, MoreHorizontal } from "lucide-react";

export default function PostCard({ post }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="flex flex-col gap-2 p-6 border border-gray-200 hover:shadow-md bg-white transition-shadow rounded-xl">
      {/* Header */}
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        <p>
          Because you follow{" "}
          <span className="text-blue-600 font-medium hover:underline cursor-pointer">
            React
          </span>
        </p>
      </div>

      {/* Meta Info */}
      <p className="text-xs text-gray-500 ml-5">
        In{" "}
        <span className="hover:text-black font-medium cursor-pointer">
          Classy Endeavors
        </span>{" "}
        by{" "}
        <span className="hover:text-black font-medium cursor-pointer">
          Piyush
        </span>
      </p>

      {/* Body */}
      <div className="flex gap-4 mt-2">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:underline cursor-pointer">
            {post.title}
          </h3>
          <p className="text-sm text-gray-700 mb-3 leading-relaxed line-clamp-3">
            {post.content}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
            <div className="flex items-center gap-1.5 bg-amber-50 px-2 py-1 rounded-full cursor-default">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-medium text-amber-700">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                aria-label="Hide post"
              >
                <Minus className="w-4 h-4 text-gray-500" />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                aria-label="Bookmark post"
              >
                <Bookmark
                  className={`w-4 h-4 transition-colors duration-300 ${
                    isBookmarked
                      ? "text-blue-500 fill-blue-500"
                      : "text-gray-500"
                  }`}
                />
              </button>
              <button
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                aria-label="More options"
              >
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <Image
            src={post.image}
            alt="Post image"
            width={96}
            height={96}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
