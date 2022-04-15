import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import {BsCollectionPlay, BsShop} from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import NavIcon from './NavIcon';
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/*left*/}
      <div className='flex items-center'>
        <FaFacebook className='shadow-inner' color="#478ac9" size={42}/>
        <div className='flex ml-2 items-center bg-gray-100 rounded-full  p-2'>
          <AiOutlineSearch className="h-6 text-gray-600"/>
          <input
            className="flex ml-2 items-center bg-transparent outline-none
            placeholder=gray-500 flex-shrink"
            type="text" 
            placeholder='Search Facebook'/>
        </div>
      </div>
      {/*center*/}
      <div className='flex justify-center flex-grow'>
        <div className="flex space-x-6">
          <NavIcon active Icon={AiFillHome}/>
          <NavIcon Icon={BsCollectionPlay}/>
          <NavIcon Icon={BsShop}/>
          <NavIcon Icon={MdGroups}/>
          <NavIcon Icon={SiFacebookgaming}/>
        </div> 
      </div>
      {/*right*/}
    </div>
  )
}

export default Navbar