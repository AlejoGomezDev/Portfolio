import { createContext, useContext, useState } from "react";
import { Home } from "../components/home/home";
const SidebarContext = createContext();


export const SidebarProvider = ({ children }) => {
    const [selectedSection, setSelectedSection] = useState({
      id: "home",
      componentToRender: Home
    });

    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <SidebarContext.Provider value={{ 
            selectedSection, 
            setSelectedSection,
            isExpanded,
            setIsExpanded 
        }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar debe usarse dentro de SidebarProvider');
  }
  return context;
};