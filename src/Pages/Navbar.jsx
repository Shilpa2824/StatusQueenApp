import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { X, Menu, Home, ChevronDown, Leaf, Wallpaper, Image, Feather, Smartphone, Monitor, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isWallpaperOpen, setIsWallpaperOpen] = useState(false);


  const toggleSidebar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsStatusOpen(false);
    setIsWallpaperOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsStatusOpen(false);
        setIsWallpaperOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top Navbar */}
      <nav className="p-4 shadow-md bg-white w-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto ml-4" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/home" className="flex items-center space-x-1 hover:text-teal-700">
            <Home size={20} />
            <span>Home</span>
          </Link>

          {/* Status Dropdown */}
          <div className="relative z-50 dropdown">
            <button onClick={() => setIsStatusOpen(!isStatusOpen)} className="flex items-center space-x-1 hover:text-teal-700">
              <Leaf size={20} />
              <span>Status</span>
              <ChevronDown size={20} />
            </button>
            {isStatusOpen && (
              <div className="absolute bg-white p-3 mt-2 rounded shadow w-48 text-sm">
                <Link to="/dp-images" className='  p-2 text-black hover:text-white hover:bg-red-500  flex items-center transition-all duration-300' > <Image size={18} className="mr-2" /> DP IMAGES </Link>
                <Link to="/image-status" className='  p-2 text-black hover:text-white hover:bg-red-500  flex items-center transition-all duration-300'> <Image size={18} className="mr-2" /> IMAGE STATUS </Link>
                <Link to="/english-status" className=' p-2 text-black hover:text-white hover:bg-red-500  flex items-center transition-all duration-300'> <Feather size={18} className='mr-2' /> ENGLISH STATUS </Link>
                <Link to="/hindi-status" className=' p-2 text-black hover:text-white hover:bg-red-500  flex items-center transition-all duration-300'> <Feather size={18} className='mr-2' />HINDI STATUS </Link>
                <Link to="/punjabi-status" className=' p-2 text-black hover:text-white hover:bg-red-500 flex items-center transition-all duration-300'> <Feather size={18} className='mr-2' />PUNJABI STATUS </Link>
              </div>
            )}
          </div>

          {/* Wallpapers Dropdown */}
          <div className="relative z-50 dropdown">
            <button onClick={() => setIsWallpaperOpen(!isWallpaperOpen)} className="flex items-center space-x-1 hover:text-teal-700">
              <Wallpaper size={20} />
              <span>Wallpapers</span>
              <ChevronDown size={20} />
            </button>
            {isWallpaperOpen && (
              <div className="absolute bg-white p-3 mt-2 rounded shadow w-48 text-sm">
                <Link to="/mobileWallpaper" className="block p-2 hover:bg-red-500 hover:text-white">
                  <Smartphone size={18} className="mr-2 inline-block" /> Mobile
                </Link>
                <Link to="/desktopWallpaper" className="block p-2 hover:bg-red-500 hover:text-white">
                  <Monitor size={18} className="mr-2 inline-block" /> Desktop
                </Link>
              </div>
            )}
          </div>

          <Link to="/birthday-wishes" className="flex items-center space-x-1 hover:text-teal-700">
            <Gift size={20} />
            <span>Birthday Wishes</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden mr-4" onClick={toggleSidebar}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5" onClick={toggleSidebar}>
          <X size={28} />
        </button>

        {/* Sidebar Links */}
        <div className="mt-16 p-6 space-y-4 text-gray-700">
          <Link to="/home" className="flex items-center space-x-2 hover:text-teal-700" onClick={toggleSidebar}>
            <Home size={20} />
            <span>Home</span>
          </Link>

          {/* Status Dropdown */}
          <div className="relative dropdown">
            <button onClick={() => setIsStatusOpen(!isStatusOpen)} className="flex items-center space-x-2 hover:text-teal-700">
              <Leaf size={20} />
              <span>Status</span>
              <ChevronDown size={20} />
            </button>
            {isStatusOpen && (
              <div className="mt-2 ml-6 space-y-2">
                <Link to="/dp-images" className="block hover:text-red-500" onClick={toggleSidebar}>
                  DP Images
                </Link>
                <Link to="/image-status" className="block hover:text-red-500" onClick={toggleSidebar}>
                  Image Status
                </Link>
                <Link to="/english-status" className="block hover:text-red-500" onClick={toggleSidebar}>
                  Image Status
                </Link>
                <Link to="/hindi-status" className="block hover:text-red-500" onClick={toggleSidebar}>
                  Image Status
                </Link>
                <Link to="/punjabi-status" className="block hover:text-red-500" onClick={toggleSidebar}>
                  Image Status
                </Link>
              </div>
            )}
          </div>

          {/* Wallpapers Dropdown */}
          <div className="relative dropdown">
            <button onClick={() => setIsWallpaperOpen(!isWallpaperOpen)} className="flex items-center space-x-2 hover:text-teal-700">
              <Wallpaper size={20} />
              <span>Wallpapers</span>
              <ChevronDown size={20} />
            </button>
            {isWallpaperOpen && (
              <div className="mt-2 ml-6 space-y-2">
                <Link to="/mobileWallpaper" className="block hover:text-red-500" onClick={toggleSidebar}>
                  Mobile
                </Link>
                <Link to="/desktopWallpaper" className="block hover:text-red-500" onClick={toggleSidebar}>
                  Desktop
                </Link>
              </div>
            )}
          </div>

          <Link to="/birthday-wishes" className="flex items-center space-x-2 hover:text-teal-700" onClick={toggleSidebar}>
            <Gift size={20} />
            <span>Birthday Wishes</span>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;

