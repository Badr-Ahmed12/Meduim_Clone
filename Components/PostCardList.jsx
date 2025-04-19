"use client";

import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    title: "Is Aceternity UI worth the hype?",
    content:
      "Explore its features, pros & cons, pricing, templates, and real-world usage. Find out if this modern UI library is the right fit.",
    publishedAt: "2024-03-14",
    image: "https://picsum.photos/seed/aceternity/96/96",
  },
  {
    id: 2,
    title: "Why React dominates the frontend world?",
    content:
      "React is more than a library; it's a mindset. Learn why it's leading and how it compares to others like Vue & Angular.",
    publishedAt: "2024-04-02",
    image: "https://picsum.photos/seed/react/96/96",
  },
  {
    id: 3,
    title: "The future of UI: Components vs Utility-first",
    content:
      "Dive into Tailwind CSS and the debate between reusable components and utility-first styling. Who's winning?",
    publishedAt: "2024-02-27",
    image: "https://picsum.photos/seed/uiux/96/96",
  },
  {
    id: 3,
    title: "The future of UI: Components vs Utility-first",
    content:
      "Dive into Tailwind CSS and the debate between reusable components and utility-first styling. Who's winning?",
    publishedAt: "2024-02-27",
    image: "https://picsum.photos/seed/uiux/96/96",
  },  {
    id: 3,
    title: "The future of UI: Components vs Utility-first",
    content:
      "Dive into Tailwind CSS and the debate between reusable components and utility-first styling. Who's winning?",
    publishedAt: "2024-02-27",
    image: "https://picsum.photos/seed/uiux/96/96",
  },  {
    id: 3,
    title: "The future of UI: Components vs Utility-first",
    content:
      "Dive into Tailwind CSS and the debate between reusable components and utility-first styling. Who's winning?",
    publishedAt: "2024-02-27",
    image: "https://picsum.photos/seed/uiux/96/96",
  },  {
    id: 3,
    title: "The future of UI: Components vs Utility-first",
    content:
      "Dive into Tailwind CSS and the debate between reusable components and utility-first styling. Who's winning?",
    publishedAt: "2024-02-27",
    image: "https://picsum.photos/seed/uiux/96/96",
  },  {
    id: 3,
    title: "The future of UI: Components vs Utility-first",
    content:
      "Dive into Tailwind CSS and the debate between reusable components and utility-first styling. Who's winning?",
    publishedAt: "2024-02-27",
    image: "https://picsum.photos/seed/uiux/96/96",
  },
];

export default function PostCardList() {
  return (
    <div className="flex flex-col gap-1">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
