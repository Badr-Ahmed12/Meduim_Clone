export default function RightSidebar() {
    return (
      <aside className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] p-3 sm:p-4 md:p-5 space-y-6 sm:space-y-8 text-sm text-gray-800">
        
        {/* Staff Picks */}
        <section>
          <h2 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Staff Picks</h2>
          <div className="space-y-4 sm:space-y-5">
            <Article
              author="Agustin Sanchez"
              title="The Tools Will Change. Your Craft Doesn’t Have To."
              date="5d ago"
            />
            <Article
              author="Julie Zhuo"
              title="Our Souls Need Proof of Work"
              date="Mar 10"
            />
            <Article
              author="Jonathan Hofer"
              title='What Do “Left” and “Right” Actually Mean?'
              date="Feb 28"
            />
          </div>
          <button className="mt-3 text-green-600 font-medium hover:underline text-sm sm:text-base">
            See the full list
          </button>
        </section>
  
        {/* Recommended Topics */}
        <section>
          <h2 className="font-bold text-lg sm:text-xl mb-3">
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
                className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 cursor-pointer transition whitespace-nowrap"
              >
                {topic}
              </span>
            ))}
          </div>
          <button className="mt-3 text-green-600 font-medium hover:underline text-sm sm:text-base">
            See more topics
          </button>
        </section>
  
        {/* Who to follow */}
        <section>
          <h2 className="font-bold text-lg sm:text-xl mb-4">Who to follow</h2>
          <div className="space-y-4">
            <FollowCard
              name="Karsten Biedermann"
              description="I really love building stuff. ❤️"
            />
            <FollowCard
              name="Realworld AI Use Cases"
              description="I wanted to have a publication"
            />
          </div>
        </section>
        <hr className="border-gray-200 my-4 border-r" />
      </aside>
    );
  }
  
  function Article({ author, title, date }) {
    return (
      <div className="hover:bg-gray-50 p-2 rounded transition cursor-pointer">
        <p className="text-xs sm:text-sm text-gray-500 mb-1">{author}</p>
        <h3 className="font-semibold text-sm sm:text-base leading-snug text-gray-900">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">{date}</p>
      </div>
    );
  }
  
  function FollowCard({ name, description }) {
    return (
      <div className="flex justify-between items-start hover:bg-gray-50 p-2 rounded transition">
        <div>
          <p className="font-medium text-sm sm:text-base text-gray-900">{name}</p>
          <p className="text-xs sm:text-sm text-gray-500">{description}</p>
        </div>
        <button className="text-sm sm:text-base text-green-600 font-medium hover:underline shrink-0 ml-2">
          Follow
        </button>
      </div>
    );
  }