import { SECTIONS } from "../../data/sections"
import { SidebarItem } from "../ui/SidebarItem"
import { useSidebar } from "../../context/SidebarContext";

export function Sidebar () {
     
    const { selectedSection, setSelectedSection, isExpanded, setIsExpanded } = useSidebar();

    return (

        <nav
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)} 
        className={` bg-sidebar flex flex-col h-full justify-start  rounded-lg transition-all duration-300 ${isExpanded ? "w-62" : "w-16"} p-2 gap-2`}>
            {
                SECTIONS.map( (item) => (
                    <SidebarItem 
                        key={item.id} 
                        item={item} 
                        isSelected={selectedSection.id === item.id} 
                        onClick={() => setSelectedSection( {id:item.id, componentToRender: item.componentToRender} )}
                    />
                ))
            }
        </nav>
    )
}