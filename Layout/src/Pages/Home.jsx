import React, { useState } from 'react'
import { Image, Pencil, Cake, Quote, Wallpaper, Sparkles } from 'lucide-react';
import bg from '../assets/background.jpg';
import { Link } from 'react-router-dom';
import img1 from '../assets/love1.jpg';
import img2 from '../assets/love2.jpg';
import img3 from '../assets/shivji2.jpg'; 
import img4 from '../assets/boy1.jpg'; 
import img5 from '../assets/boy2.jpg'; 
import img6 from '../assets/cute1.jpg'; 
import img7 from '../assets/cute2.jpg'; 
import img8 from '../assets/cute3.jpg'; 
import img9 from '../assets/keishna2.jpg'; 
import img10 from '../assets/krishna1.jpg'; 
import img11 from '../assets/krishna3.jpg'; 
import img12 from '../assets/shivji1.jpg'; 
import Footer from '../HomeComponents/Footer';
const boxes = [
  { name: "DP IMAGES", icon: <Image size={40} />, link: "/dp-images", color: "bg-gradient-to-r from-pink-400 to-red-300" },
  { name: "IMAGE STATUS", icon: <Image size={40} />, link: "/image-status", color: "bg-gradient-to-r from-green-400 to-lime-300" },
  { name: "TEXT STATUS", icon: <Pencil size={40} />, link: "/text-status", color: "bg-gradient-to-r from-teal-400 to-blue-300" },
  { name: "BIRTHDAY WISHES", icon: <Cake size={40} />, link: "/birthday-wishes", color: "bg-gradient-to-r from-pink-400 to-orange-300" },
  { name: "QUOTES", icon: <Quote size={40} />, link: "/quotes", color: "bg-gradient-to-r from-cyan-400 to-blue-300" },
  { name: "MOBILE WALLPAPER", icon: <Wallpaper size={40} />, link: "/mobile-wallpaper", color: "bg-gradient-to-r from-purple-400 to-blue-300" },
  { name: "DESKTOP WALLPAPER", icon: <Wallpaper size={40} />, link: "/desktop-wallpaper", color: "bg-gradient-to-r from-blue-400 to-indigo-300" },
  { name: "FESTIVAL WISHES", icon: <Sparkles size={40} />, link: "/festival-wishes", color: "bg-gradient-to-r from-yellow-400 to-orange-300" },
]
const quotes = [
  { text: "Choose peopke who choose you .", likes: "12k" },
  { text: "Just a year ago things were so different. ", likes: "2k" },
  { text: "It's about who stays , not who promised", likes: "87" },
  { text: "Don’t waste your words on people who deserve your silence. ", likes: "7k" },
  { text: "I might be okay but I’m not fine at all. ", likes: "8k3k" },
  { text: "Alone doesn’t mean lonely. ", likes: "12k" },
  { text: "People come into our lives and you never know for how long. ", likes: "4k" },
  { text: "Tell me how it feels to be loved back. ", likes: "10k" },
  { text: "✌सहारे ढूंढ़ने की Adat नहीं हमारी🚫 😎हम Akele पूरी महफिल के बराबर हैं👑 ", likes: "824" },
  { text: "ਮੰਜਿਲ ਤੇ ਇਕ ਨਾਂ ਇਕ ਦਿਨ ਮਿਲ ਹੀ ਜਾੳਗੀ ਪਰ ਸਾਥ ਕਿਸ ਕਿਸ ਨੇ ਦਿੱਤਾ, ਯਾਦ ਜ਼ਰੂਰ ਰਹੁਗਾ । 💯 ", likes: "999" },
  { text: " ਫੁੱਲਾ🥀 ਵਰਗਾ ਸੁਭਾਅ ਏ ਫੱਕਰਾ ਦਾ, ਕੁਰਬਾਨ ਹੋ ਜਾਨੇ ਆ ਕਿਸੇ ਨੂੰ ਮਹਿਕਾਓੁਣ ਲਈ😊❣️", likes: "14" },
  { text: "ਚਿਹਰੇ ਉੱਤੇ ਰੱਖਕੇ ਹਾਸੇ ਜ਼ਿੰਦਗੀ ਜਿਉਣਾਂ ਸਿੱਖਗੇ ਆਂ ❤️‍🩹🖤 ", likes: "9k" },
  { text: "ਸਾਫ ਜਿਹੀ ਜ਼ਿੰਦਗੀ ਜੀਉਨੇ ਆ.. ਨਾ ਚਾਲ ਤੇ ਨਾਲ ਕੋਈ ਲਾਰਾ ਏ 😊😊 ", likes: "123" },
  { text: " ਸਾਡੀ ਔਕਾਤ ਨਹੀਂ ਕਿਸੇ ਦਾ ❤️ ਦਿਲ ਜਿੱਤਣ ਦੀ, ਲੋਕ ਖੁਦ ਵਿਕ ਜਾਂਦੇ ਆ ਸਾਡਾ ਕਿਰਦਾਰ ਦੇਖ ਕੇ!", likes: "89k" },
  { text: "ਅਸੂਲਾਂ ਦੀ ਜਿੰਦਗੀ 👍ਜਿਉਣੇ ਆਂ ਮਿੱਤਰਾ ਤਗੜਾ ਜਾਂ ਮਾੜਾ ਦੇਖ ਕਦੇ 💪 ਬਦਲੇ ਨੀ. ", likes: "3k" },
  { text: " ਨਾਲ ਸਭਨਾਂ ਤੁਰੇ ਅਸੀਂ ਕੱਲੇ ਨੀ ਬਣੇ ਧੰਨਵਾਦ ਮਾਲਕਾਂ ਅਸੀਂ ਦੱਲੇ ਨੀ ਬਣੇ 🦅", likes: "66" },
]
const images = [ img1, img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
const categories = [
  ["Latest Whatsapp Status", "Hindi Status for Whatsapp", "Punjabi Status for Whatsapp", "English Status for Whatsapp"],
  ["Love Status in Hindi", "Sad Status in Hindi", "Attitude Status in Hindi", "Motivational Status in Hindi"],
  ["Love Dp Pictures", "Sad Dp Pictures", "Alone Dp Pictures", "Religious Dp Pictures"],
  ["Best Whatsapp Dp", "Latest Best Ringtone", "HD 4k Mobile Wallpaper", "UHD Desktop Wallpaper"],
];

const Home = () => {
  const [copy , setCopy] = useState(null);
  const handleCopy = (index,text)=>{
    navigator.clipboard.writeText(text).then(()=>{
      setCopy(index);
      setTimeout(()=> setCopy(null),2000)
    });
  };
  return (
    <>
      <div className='min-h-screen  bg-center flex items-center justify-center p-6 '
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-0 '>
          {boxes.map((item, index) => (
            <Link key={index} to={item.link} className={`${item.color} p-12  md:p-10 rounded-l shadow-lg flex flex-col items-center justify-center transition transform hover:scale-105`}>
              <div className='text-white'> {item.icon}</div>
              <p className='mt-2 text-white font-semibold text-lg'>{item.name}</p>
            </Link>
          ))}

        </div>
      </div>
      <div className='relative'>
        {/* quotes section */}
        <div className="w-full max-w-[76rem] px-4 mx-auto  -mt-8 p-6 shadow-2xl  bg-white-300 bg-white border border-gray-200 rounded-xl">
          {/* Section Header with Lines */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-t border-gray-300" />
            <h2 className="text-center text-lg font-semibold text-gray-600 mx-4 uppercase">
              Latest WhatsApp Status
            </h2>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* quotes Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {quotes.map((quote, index) => (
              <div key={index} className='bg-white p-3  gap-2 rounded-lg  shadow-lg border border-gray-200'>
                <p className='text-gray-700 mb-4'> {quote.text}</p>
                {/* Buttons */}
                <div className='flex justify-between items-baseline'>
                  <button
                  className='px-3 py-1 ml-2 text-white font-semibold text-sm rounded-full bg-gradient-to-r from-pink-500 to-red-400'
                  onClick={() => handleCopy(index, quote.text)}
                >
                  {copy === index ? "COPIED" : "COPY"}
                </button>
                  <span className="text-gray-500 text-sm flex items-center">
                    ❤️ {quote.likes}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className="w-full max-w-[76rem] px-4 mx-auto  mt-5 p-6 shadow-2xl  bg-white-300 bg-white border border-gray-200 rounded-l">
              {/* Section Header with Lines */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-t border-gray-300" />
            <h2 className="text-center text-lg font-semibold text-gray-600 mx-4 uppercase">
              LATEST DP IMAGES
            </h2>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
              {/* Images Grid */}
              <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} className="w-full h-auto  shadow-lg" />
        ))}
      </div>
    </div>
          </div>
         <div className='w-full max-w-[76rem] px-4 mx-auto  mt-5 p-6 shadow-2xl  bg-white-300 bg-white border border-gray-200 rounded-l'>
         <div className="w-full max-w-[76rem] px-4 mx-auto  mt-1 p-6 shadow-3xl  bg-white-300 bg-grey border border-gray-200 rounded-l">
{/* Links Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center -mt-1">
          {categories.map((column, index) => (
            <div key={index}>
              {column.map((item, idx) => (
                <a key={idx} href="#" className="block text-gray-600 hover:text-pink-300 transition">
                  {item}
                </a>
              ))}
            </div>
          ))}
        
        </div>
       </div>
         </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
