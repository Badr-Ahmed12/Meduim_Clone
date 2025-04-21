export default function FollowCard({ name, description }) {
    return (
      <div className="flex items-start justify-between group hover:bg-gray-50 p-2 rounded-md">
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500 line-clamp-1">{description}</p>
        </div>
        <button className="ml-4 text-sm text-gray-600 hover:text-gray-900 font-medium">
          Follow
        </button>
      </div>
    );
  }
  