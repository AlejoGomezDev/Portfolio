import { useSidebar } from "../../context/SidebarContext"

export function Main () {

    const { selectedSection } = useSidebar();

    return (
        <div className='bg-gray-950 flex-1 max-w-[75%] mx-auto absolute left-16 right-0  p-6 shadow-lg h-[98%]'>
          
            <h1 className="text-3xl font-bold mb-4">Sección: {selectedSection.id}</h1>

            <selectedSection.componentToRender />
        </div>
    )
}