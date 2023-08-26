export default function Tooltip({ message, children }) {
    return (
        <div className="group relative flex">
            {children}
            <span className="absolute left-1/2 top-10 ml-auto mr-auto lg:min-w-max -translate-x-1/2 scale-0 transform rounded-lg bg-gray-900 p-2 px-3 py-2 text-xs font-medium text-white shadow-sm transition-all duration-500 group-hover:scale-100">
                {message}
            </span>
        </div>
    );
}
