import Article from "./UI/Staff_Picks/Article";
import Who_to_follow from "./UI/Staff_Picks/Who to follow";

export default function RightSidebar() {
  return (
    <aside className="w-[368px] p-6 border-l border-gray-200">
      
      {/* Staff Picks */}
      <section className="mb-8">
        <h2 className="font-semibold text-base mb-4">Staff Picks</h2>
        <div className="space-y-3">
          <Article
            author="Agustin Sanchez"
            title="The Tools Will Change. Your Craft Doesn't Have To."
            date="5d ago"
          />
          <Article
            author="Julie Zhuo"
            title="Our Souls Need Proof of Work"
            date="Mar 10"
          />
          <Article
            author="Jonathan Hofer"
            title='What Do "Left" and "Right" Actually Mean?'
            date="Feb 28"
          />
        </div>
        <button className="mt-4 text-sm text-gray-600 hover:text-gray-900">
          See the full list
        </button>
      </section>

      {/* Recommended Topics */}
      <section className="mb-8">
        <h2 className="font-semibold text-base mb-4">
          Recommended topics
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Data Science",
            "Self Improvement", 
            "Technology",
            "Writing",
            "Relationships",
            "Politics",
            "Cryptocurrency",
          ].map((topic) => (
            <span
              key={topic}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 cursor-pointer"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>
       <Who_to_follow/>
        <hr className="my-8 border-gray-200" />
    </aside>
  );
}

