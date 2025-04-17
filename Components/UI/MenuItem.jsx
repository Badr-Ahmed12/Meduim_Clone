export default function MenuItem({ href, icon: Icon, label }) {
  return (
    <Link href={href} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-800">
      <Icon />
      <span>{label}</span>
    </Link>
  );
}

