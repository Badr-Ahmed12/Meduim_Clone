export default function Article({ author, title, date }) {
    return (
      <div className="group cursor-pointer">
        <p className="text-sm text-gray-500 mb-1">{author}</p>
        <h3 className="text-base font-medium text-gray-900 group-hover:text-gray-700 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{date}</p>
      </div>
    );
  }
