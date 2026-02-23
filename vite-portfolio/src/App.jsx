import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { SECTIONS } from "./data/sections";
import { useEffect, useRef, useState } from "react";
import { EllipsisIcon } from "lucide-react";
function App() {
  const [selectedSection, setSelectedSection] = useState(SECTIONS[0].id);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [canShowNavbar, setCanShowNavbar] = useState(true);

  const handleNavbarMouseLeave = () => {
    if (selectedSection !== SECTIONS[0].id) {
      setTimeout(() => {
        setIsNavbarHidden(true);
      }, 100);
    }else{
      setIsNavbarHidden(false)
    }
  };

  const handleNavbarClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedSection(id);
    setIsNavbarHidden(true);
    setCanShowNavbar(false);
    window.history.pushState({}, "", `#${id}`);
  };

  const Logo = () => {
    return (
      <div>
        <h1 className="text-sm font-semibold inline tracking-[.2em] ">
          ALEJO GOMEZ <span className="text-violet-400"> | DEV</span>
        </h1>
      </div>
    );
  };

  const RightNavbarButton = () => {
    return (
      <button className="cursor-pointer rounded-md p-1 w-30 bg-transparent border border-gray-300 hover:scale-105 transition-all duration-300 ease-in-out">
        ¡Hablemos!
      </button>
    );
  };

  useEffect(() => {
    console.log("escondida", isNavbarHidden);
  }, [isNavbarHidden]);

  return (
    <div className="min-w-full h-screen text-gray-200 flex flex-col overflow-hidden font-inter scroll-smooth">
      {/* Header con el navbar */}
      <header>
        <Navbar
          sections={SECTIONS}
          navbarClassName={`w-[80%] absolute top-2 left-0 right-0 m-auto bg-gray-700/20 rounded-full shrink-0 backdrop-blur-xl border border-gray-800 h-[5em] font-normal transition-all duration-300 transform ${
            isNavbarHidden
              ? "-translate-y-[120%] opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
          selectedClassName="text-violet-400"
          selectedSection={selectedSection}
          hoverClassName="hover:text-violet-400"
          underlineClassName=""
          hidden={isNavbarHidden}
          textClassName="text-gray-200"
          logo={Logo()}
          rightButton={RightNavbarButton()}
          handleClick={handleNavbarClick}
          onMouseLeave={handleNavbarMouseLeave}
        />

        <div
          className={`absolute top-0 h-[3em] w-[15%]  m-auto left-0 right-0 transition-all duration-300  ${
            isNavbarHidden
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full pointer-events-none"
          }`}
          onMouseEnter={() => {
            if(canShowNavbar && isNavbarHidden){
              setIsNavbarHidden(false);
            }
          }}

          onMouseLeave={()=>{
            setCanShowNavbar(true)
          }}
        >
          <div className="flex items-center text-center h-[2em] cursor-default justify-center rounded-full border bg-gray-700/20 border-gray-800 shrink-0 backdrop-blur-xl mt-4">
            <EllipsisIcon className="h-5" />
          </div>
        </div>
      </header>
      <main className="h-screen flex-1 overflow-y-auto">
        {SECTIONS.map((section) => {
          const Component = section.componentToRender;
          return (
            <section
              key={section.id}
              id={section.id}
              className={`min-h-screen ${section.bgColor}`}
            >
              <h2 className="sr-only">{section.label}</h2>
              <Component />
            </section>
          );
        })}
      </main>

      {/* Opcional: Footer */}
      <footer className="sr-only">
        <p>© 2024 Alejo Gomez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
