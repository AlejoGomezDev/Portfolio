import './App.css'
import { Sidebar } from './components/sidebar/sidebar'
import { SidebarProvider } from './context/SidebarContext'
import { Main } from './components/main/main'
function App() {

  return (
     <SidebarProvider>
       <div className="container min-w-full max-h-screen min-h-screen h-screen text-white p-2 flex">

        <Sidebar/>
       
        <Main/>
           
      </div>
   
     </SidebarProvider>
  )
}

export default App
