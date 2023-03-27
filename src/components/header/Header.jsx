import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
 
    const clichedhamburger = () => {
        const top = document.querySelector(".top");
        const middle = document.querySelector(".middle");
        const bottom = document.querySelector(".bottom");
        var nav = document.querySelector(".Ad");

     
        top.classList.toggle("top-rotate");
        middle.classList.toggle("opacity-0");
        bottom.classList.toggle("bottom-rotate");

        if (nav.style.display === "block") {
            nav.style.display = "none";
        }
        else {
            nav.style.display = "block";
        }



        
    };
     

    return (
        <>
         

         <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <a href="" className="flex items-center">
      <img src="data:image/png;base64,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" className="logo" alt=" Logo" />
  </a>
  <div className="flex md:order-2">
        
  <dic className="leftmost">
  <img src="https://cdn-icons-png.flaticon.com/512/483/483356.png" alt="search" className="h-6" />
  <NavLink to="/cart" >
  <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="cart" className="h-6 ml-4" />
  </NavLink>
  </dic>

      <button onClick={clichedhamburger} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden " >
        <div class="hamburger-menu">
<div class="bar top"></div>
<div class="bar middle"></div>
<div class="bar bottom"></div>
</div>


    </button>
  </div>
  <div className="items-center Ad justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 borderrounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-black" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <NavLink to="/products" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Products</NavLink>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black-700 md:p-0 md:dark:hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>



        </>
    );
}


export default Navbar;