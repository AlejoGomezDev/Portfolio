// hooks/useScrollDirection.js
import { useState, useEffect, useRef } from 'react'

export function useScrollDirection(scrollContainerRef) {
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return
    


    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = container.scrollTop
          
    
          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setIsHidden(true)
          } 

          else if (currentScrollY < lastScrollY.current) {
            setIsHidden(false)
          }
          
          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        
        ticking.current = true
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    
    
    return () => {
      console.log("Limpiando event listener")
      container.removeEventListener('scroll', handleScroll)
    }
  }, [scrollContainerRef])

  return isHidden
}