import { motion } from "framer-motion"

export function Anchor({
  className = "",
  onClick = () => { console.log("Click") },
  text = "",
  animation = false,
  href = "#",
  target = ""
}) {
  return (
    <a
      href={href}
      className={`bg-gray-600 text-white rounded-full p-2 w-30 
      transition-all duration-300 ease-in-out hover:-translate-y-1  
      overflow-hidden relative cursor-pointer inline-block text-center ${className}`}
      onClick={onClick}
      target={target}
    >
      
      {animation && (
        <motion.span
          className="
            pointer-events-none
            absolute
            top-[-50%]
            left-[-20%]
            h-[200%]
            w-[20%]
            bg-linear-to-r
            from-transparent
            via-white/70
            to-transparent
            blur-sm
          "
          animate={{ x: ["0%", "600%"] }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 4 
          }}
        />
      )}

      <span className="relative z-10">{text}</span>
    </a>
  )
}