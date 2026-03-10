import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { ProjectCard } from "./project-card";

export function CarouselProjects({ projects }) {

  const [current, setCurrent] = useState(1);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getIndex = (offset) => {
    return (current + offset + projects.length) % projects.length;
  };

  const handleSideClick = (offset) => {

    setDirection(offset);
    setCurrent(getIndex(offset));

    setTimeout(() => {
      const el = document.getElementById("center-card");
      el?.click();
    }, 350);
  };

  return (
    <div className="relative w-full flex items-center justify-center">

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        className="absolute left-10 z-20 hover:scale-110 transition"
      >
        <CircleArrowLeft size={42} className="text-blue-600" />
      </button>

      <div className="flex items-center justify-center gap-12 w-full overflow-hidden">

        {/* izquierda */}
        <motion.div
          onClick={() => handleSideClick(-1)}
          className="cursor-pointer scale-90 opacity-60 blur-[0.5px]"
          animate={{ x: direction === -1 ? -40 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <ProjectCard project={projects[getIndex(-1)]} />
        </motion.div>

        {/* centro */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            id="center-card"
            initial={{ x: direction * 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -120, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="scale-100"
          >
            <ProjectCard project={projects[current]} />
          </motion.div>
        </AnimatePresence>

        {/* derecha */}
        <motion.div
          onClick={() => handleSideClick(1)}
          className="cursor-pointer scale-90 opacity-60 blur-[0.5px]"
          animate={{ x: direction === 1 ? 40 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <ProjectCard project={projects[getIndex(1)]} />
        </motion.div>

      </div>

      {/* Flecha derecha */}
      <button
        onClick={next}
        className="absolute right-10 z-20 hover:scale-110 transition"
      >
        <CircleArrowRight size={42} className="text-blue-600" />
      </button>

    </div>
  );
}