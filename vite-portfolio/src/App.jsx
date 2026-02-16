import './App.css'
import { Sidebar } from './components/sidebar/sidebar'
import { SidebarProvider } from './context/SidebarContext'
import { Main } from './components/main/main'
import { Navbar } from './components/navbar/navbar'
import { SECTIONS } from './data/sections'
function App() {

  return (
       <div className=" min-w-full h-dvh text-white flex flex-col">

        <Navbar
          sections={SECTIONS}
          className={"min-h-[5em] shrink-0"}
        />
      
        <div className='flex-1 bg-red-300'>
          <p>loremipsum</p>
          <p>loremipsum</p>
          <p>loremipsum</p>
          <p>loremipsum</p>
          <p>loremipsum</p>
          <p>loremipsum</p>
          <p>loremipsum</p>
          <p>loremipsum</p>
          <p>loremipsum</p>
          <p>loremipsum</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, culpa aliquid! Quo earum nostrum molestiae, ad ratione natus quibusdam odit fugiat deleniti porro itaque, molestias nihil eligendi aliquid, quas suscipit!
        </div>
       
           
      </div>
   
  )
}

export default App
