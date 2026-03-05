import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "../../utils/smoothScroll";
export function Navbar({
  sections,
  hidden,
  navbarClassName = "bg-[#13111e] h-[4em] w-full absolute top-0",
  selectedClassName = "bg-purple-600/10 text-white",
  selectedSection,
  hoverClassName = "hover:bg-purple-400/10",
  textClassName = "text-gray-300",
  underlineClassName = "bg-purple-600",
  logo,
  rightButton,
  handleClick: externalHandleClick = null,
  onMouseLeave = ()=>{},
}) {

const defaultHandleClick  = (e, id) => {
  e.preventDefault();
  
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  
};

 const handleClick = externalHandleClick || defaultHandleClick;

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
      className={`  ${navbarClassName} z-9999`}

      onMouseLeave={onMouseLeave}
    >
      <div className="flex h-full w-[90%] m-auto gap-30 " >
        {logo && (
          <div className="flex h-10  items-center my-auto justify-center ml-0">
            {logo}
          </div>
        )}

        <ul className="flex flex-1 max-w-[50%] m-auto h-full  justify-around relative">
          {sections.map((item) => (
            <li
              className={`h-full flex w-full relative cursor-pointer ${
                selectedSection === item.id ? selectedClassName : textClassName
              } ${hoverClassName} transition-all duration-300 ease-in-out`}
              key={item.id}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="h-full w-full flex items-center justify-center"
              >
                {item.label}
              </a>

              {selectedSection === item.id && (
                <motion.span
                  layoutId="underline"
                  className={`absolute bottom-0 left-0 h-0.5 w-full ${underlineClassName}`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {rightButton && (
          <div className=" mr-0 flex items-center ">{rightButton}</div>
        )}
      </div>
    </motion.nav>
  );
}
