import { useState } from "react";

export function  SkillCard  ({ skill, lightColor }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="w-20 h-20 rounded-lg flex items-center justify-center p-4 transition-all duration-300 cursor-pointer bg-gray-950/70"
      style={{
        boxShadow: isHovered 
          ? `0 0 20px ${lightColor}, 0 0 20px ${lightColor}` 
          : ``,
        filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={skill.icon} 
        alt={skill.alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
};