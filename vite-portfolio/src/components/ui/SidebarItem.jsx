import { useSidebar } from "../../context/SidebarContext";

export function SidebarItem({ item, isSelected, onClick }) {
  const { isExpanded } = useSidebar();

  const { label, href, icon: Icon } = item;

  return (
    <button
      onClick={onClick}
      className={`
            cursor-pointer group
            flex items-center w-full p-3 rounded-full
            transition-all duration-200
            ${
              isSelected
                ? "bg-selected text-white"
                : "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
            }
        `}
    >
      <Icon className="w-5 h-5 min-w-6 flex " />

      <span
        className={`
        ml-3 whitespace-nowrap overflow-hidden
        transition-all duration-300
        ${
          isExpanded
            ? "opacity-100 w-auto"
            : "opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto"
        }
      `}
      >
        {label}
      </span>
    </button>
  );
}
