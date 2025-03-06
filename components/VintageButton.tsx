import type React from "react"
import Link from "next/link"

const VintageButton: React.FC = () => {
  return (
    <Link href="/" passHref>
      <button
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-black text-white font-bold text-xl 
                   border-4 border-white shadow-lg hover:bg-red-500 
                   hover:border-black  focus:outline-none focus:ring-4 focus:ring-black 
                   transition duration-200 ease-in-out z-10 font-['Press_Start_2P'] uppercase tracking-wider"
        style={{
          textShadow: "2px 2px 0 #000",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.3), inset 0 0 5px rgba(255, 255, 255, 0.5)",
          imageRendering: "pixelated",
        }}
      >
        Press 2 Start
      </button>
    </Link>
  )
}

export default VintageButton

