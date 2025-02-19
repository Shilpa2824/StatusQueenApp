import React from 'react'
import{Twitter , Facebook , MessageCircleHeart} from 'lucide-react' 
const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-md py-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-10">
      {/* Left Side - Links */}
      <div className="flex space-x-8 text-gray-600 text-sm ">
        <a href="#" className="hover:text-gray-900">PRIVACY POLICY</a>
        <a href="#" className="hover:text-gray-900">SITE MAP</a>
        <a href="#" className="hover:text-gray-900">CONTACT US</a>
      </div>

      {/* Right Side - Social Icons */}
      <div className="flex space-x-4 mt-4 md:mt-0 ">
        <Twitter className="text-pink-500 w-5 h-5 cursor-pointer hover:text-pink-700" />
        <Facebook className="text-pink-500 w-5 h-5 cursor-pointer hover:text-pink-700" />
        < MessageCircleHeart className="text-pink-500 w-5 h-5 cursor-pointer hover:text-pink-700" />
      </div>
    </div>
  </footer>
  )
}

export default Footer
