import { useState } from "react";

export default function NavigationBar() {
  const navItems = [
    { name: "For you", href: "#" },
    { name: "Following", href: "#" },
    { name: "Featured", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "React", href: "#" },
    { name: "JavaScript", href: "#" }
  ];
  const [activeItem, setActiveItem] = useState("For you");

  return (
    <div className="w-full border-b border-gray-200 mb-6">
      <div className="flex items-center overflow-x-auto py-2 no-scrollbar">
        <button className="p-2 mr-2 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>

        <div className="flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`px-3 py-1 whitespace-nowrap text-sm rounded-full transition-colors ${
                activeItem === item.name
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
