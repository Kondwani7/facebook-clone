import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineCaretDown ,AiFillHome } from "react-icons/ai";
import {BsCollectionPlay, BsShop, BsFillBellFill, BsMessenger} from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import NavIcon from './NavIcon';
import { CgMenuGridO } from "react-icons/cg";
import Image from 'next/image';
const users =  {
  user1: {
    firstName: "Kondwa",
    lastName: "Ngulube",
    age: 22,
    email: ["kn1@gmail.com", "kn2@gmail.com"],
    profilePicture : "/img/userprofile.jpeg"
  }
}

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/*left*/}
      <div className='flex items-center'>
        <FaFacebook className='shadow-inner' color="#478ac9" size={42}/>
        <div className='flex ml-2 items-center bg-gray-100 rounded-full  p-2'>
          <AiOutlineSearch className="h-6 text-gray-600"/>
          <input
            className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none
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
      <div className='flex items-center sm:space-x-4 justify-end'>
        {/*proifle pic*/}
        <div className="flex overflow-hidden">
          <Image 
            className='inline-block h-12 w-12 rounded-full ring-2 ring-white' 
            src={users.user1.profilePicture}
            height="50%"
            width="50%" 
            alt="profile picture"/>
        </div>
        <p className='whitespace-nowrap font-semibold pr-3'>
          {users.user1.firstName}
        </p>
        <CgMenuGridO className="icon" size={16}/>
        <BsMessenger className='icon' size={16}/>
        <BsFillBellFill className='icon' size={16}/>
        <AiOutlineCaretDown className='icon' size={16}/>


      </div>
    </div>
  )
}

export default Navbar