import { SECTIONS } from "../../data/sections"
import { SidebarItem } from "../ui/SidebarItem"
import { useSidebar } from "../../context/SidebarContext";
import LogoPurple from "../../assets/logos/personal/LogoPurple.png"
import fluidBackground from "../../assets/logos/personal/fluid-background.png"

export function Sidebar () {
     
    const { selectedSection, setSelectedSection, isExpanded, setIsExpanded } = useSidebar();

    return (

        <nav
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)} 
        className={` bg-sidebar flex flex-col h-full rounded-lg transition-all duration-300 ${isExpanded ? "w-64" : "w-20"} p-2 gap-2`}>
            
            

        <div className="h-40 bg-blue-200 rounded-lg overflow-hidden ">
        <img src={fluidBackground} alt="Background" className="w-full h-full object-cover relative" />
        </div>
                <div className="flex flex-col gap-2">
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
                </div>


        {/* <div className="w-full">
            <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center ml-2">
                <img 
                    src={LogoPurple} 
                    alt="Alejo Gomez Dev" 
                    className="w-8 h-8 object-contain" 
                />
            </div>

        </div> */}
           
        </nav>
    )
}