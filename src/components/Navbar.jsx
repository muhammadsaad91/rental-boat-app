import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
    <h1 className="w-3/12">
       <NavLink to="/">
            <img src="https://png.pngtree.com/template/20200113/ourmid/pngtree-ship-logo-design-image_346082.jpg" alt="logo" border="0" className="h-23" />
        </NavLink>
    </h1>

    <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer active">
              <a href="">About</a>
            </li>
            <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer">
            <a href="">Products</a>
            </li>
            <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer">
            <a href="">Collections</a>
            </li>
            <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 hover:text-gray-500 duration-200 cursor-pointer">
              <a href="">Contact</a>
            </li>
        </ul>
    </nav>

    <div className="w-3/12 flex justify-end">
        <a href="">
            <img src="https://cdn-icons-png.flaticon.com/512/483/483356.png" alt="search" className="h-8" />

        </a>
        <a href="">
            <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart" className="h-8 ml-4" />
        </a>
    </div>
</header>
  )
}

export default Navbar
