import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png';
import {X ,Menu, Home, ChevronDown,Leaf,Wallpaper,Image,Feather,Smartphone,Monitor,Gift} from 'lucide-react';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);
  const [isStatusOpen , setIsStatusOpen] = useState(false);
  const [isWallpaperOpen , setIsWallpaperOpen] = useState(false);

  const handleStatusClick = () => {
    setIsStatusOpen(!isStatusOpen);
    setIsWallpaperOpen(false);
  }
  const handleWallpaperClick = () => {
    setIsWallpaperOpen(!isWallpaperOpen);
    setIsStatusOpen(false);
  }
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsStatusOpen(false);
        setIsWallpaperOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <nav className='p-9  shadow-md bg-white w-full h-auto md:h-12 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex justify-between items-center w-full  md:w-auto'>
          {/* Logo */}
          <div className='flex items-center'>
            <img src={logo} alt="StatuQueen Logo" className='h-13 w-auto m-12' />
          </div>
          {/* Mobile Menu Toggel Button */}
          <button  className='md:hidden'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {
              isMobileMenuOpen  ? <X size = {28}/> : <Menu size = {28}/>
            }
          </button>
        </div>
        {/* NavBar Links */}
        <div className={`w-full md:w-auto md:flex space-x-6 text-gray-700 ${isMobileMenuOpen ? 'flex flex-col mt-4': 'hidden md:flex'}`}>
          <Link to= "/home" className=' flex items-center space-x-1  hover:text-teal-700' >
          <Home size={20}/>
          <span>Home</span>
            </Link>

            <div className='relative z-50'>
              <button
              onClick={handleStatusClick}
              className='flex items-center space-x-1  hover:text-teal-700'
              >
                <Leaf size={20} />
                <span>STATUS</span>
                <ChevronDown size={20}/>
              </button>
              {isStatusOpen && (
                  <div className='absolute bg-white  p-3 mt-5 rounded  z-50  w-50 text-sm '>
                    <Link to = "/dp-images" className='  p-2 text-black hover:text-white hover:bg-red-500  flex items-center transition-all duration-300' > <Image size={18} className="mr-2"/> DP IMAGES </Link>
                    <Link to = "/image-status" className='  p-2 text-black hover:text-white hover:bg-red-500  flex items-center transition-all duration-300'> <Image size={18} className="mr-2"/> IMAGE STATUS </Link>
                    <Link to = "/english-status" className=' p-2 text-black hover:text-white hover:bg-red-500  flex items-center transition-all duration-300'> <Feather size={18} className='mr-2'/> ENGLISH STATUS </Link>
                    <Link to = "/hindi-status" className=' p-2 text-black hover:text-white hover:bg-red-500  flex items-center transition-all duration-300'> <Feather size={18} className='mr-2'/>HINDI STATUS </Link>
                    <Link to = "/punjabi-status" className=' p-2 text-black hover:text-white hover:bg-red-500 flex items-center transition-all duration-300'> <Feather size={18} className='mr-2'/>PUNJABI STATUS </Link>
                    </div>
                )}
            </div>
                <div className='relative'>
                <button
                  onClick = {handleWallpaperClick}
                 className='flex items-center space-x-1 hover:text-teal-700'>
                 <Wallpaper size={20}/>
                  <span >WALLPAPERS</span>
                  <ChevronDown size={20} />
                </button>
                {isWallpaperOpen && (
                  <div className='absolute bg-white p-3 mt-5 rounded w-50 text-sm'> 
                  <Link to = "#" className='p-2 text-black hover:text-white hover:bg-red-700 flex items-center transition-all duration-300'> <Smartphone size={18} className='mr-2' /> MOBILE </Link>
                  <Link to = "#" className='p-2 text-black hover:text-white hover:bg-red-700 flex items-center transition-all duration-300'> <Monitor size={18} className='mr-2' /> DESKTOP </Link>
                    </div>
                )}
                </div>
                <Link to="/birthday-wishes" className="flex items-center space-x-1 hover:text-teal-700">
          <Gift size={20} />
          <span>BIRTHDAY WISHES</span>
        </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
