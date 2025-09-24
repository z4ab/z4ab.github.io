export default function Tile({
  backgroundColor = "bg-(--xbox-green)",
  height = "h-32",
  width = "w-48",
  scale = "hover:scale-110",
  children,
  label,
  icon,
  className = "",
  onClick
}) {
  return (
    <div
      className={`${backgroundColor} shadow-md ${height} ${width} transition-transform duration-300 ${scale} cursor-pointer ${className} relative overflow-hidden hover:z-10`}
      onClick={onClick}
    >
      <div className="h-full flex flex-col">
        {icon && (
          <div className="text-white text-4xl mb-2 p-6">
            {icon}
          </div>
        )}
        {children}
      </div>
      {label && (
        <div
          className="absolute bottom-0 left-0 right-0 text-white text-lg font-medium px-3 py-2"
          style={children && { backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          {label}
        </div>
      )}
    </div>
  );
}