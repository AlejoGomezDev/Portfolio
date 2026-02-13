import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar({ sections }) {
  const [selectedSection, setSelectedSection] = useState(sections[0].id);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleClick = (item) =>{
    console.log("HANDLE CLIK", item)
    setSelectedSection(item.id)
  }

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="w-full bg-red-500 sticky top-0 min-h-15"
    >
      <div className="flex h-full bg-green-500 w-[80%] m-auto gap-30">
        <div className="flex rounded-full h-10 w-15 bg-blue-200 items-center my-auto justify-center">
          LOGO
        </div>
        <ul className="flex flex-1 max-w-[50%] bg-orange-200 h-full justify-around gap-1">
          {sections.map((item) => (
            <li className={`h-full flex bg-orange-500 w-full ${selectedSection === item.id ? "bg-red-500" : ""}`} key={item.id}>
              <a
                href={item.href}
                className="cursor-pointer h-full w-full flex items-center justify-center"
                onClick={() => handleClick(item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
