import {  NavLink } from "react-router-dom";
import Cart from "../features/cart/cart";
import About from "./About";
import Collections from "./Collections";
import Contact from "./Contact";
import MenProducts from "./MenProducts";
import WomenProducts from "./WomenProducts";
import { useState } from "react";
import CartIcon from "../features/cart/CartIcon";
import Profile from "./Profile";


function Header() {

    return (
        <header className="px-4 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mx-auto w-full max-w-7xl">
               <NavLink to="/">
                <h1 className="font-kumbh font-bold text-4xl">sneakers</h1>
               </NavLink>

               
                <div className="flex space-x-12 font-bold text-gray-400">
                    <NavLink to="/collections" className={({isActive})=> isActive? "text-orange-500":"text-gray-400"}>Collections</NavLink>
                    <NavLink to="/men" className={({isActive})=> isActive? "text-orange-500":"text-gray-400"}>Men</NavLink>
                    <NavLink to="/women" className={({isActive})=> isActive? "text-orange-500":"text-gray-400"}>Women</NavLink>
                    <NavLink to="/about" className={({isActive})=> isActive? "text-orange-500":"text-gray-400"}>About</NavLink>
                    <NavLink to="/contact" className={({isActive})=> isActive? "text-orange-500":"text-gray-400"}>Contact</NavLink>
                </div>

        
                
                   <div className="flex items-baseline space-x-6">
                   <CartIcon/>
                   <NavLink to="/profile">
                      <img 
                          src="/image-avatar.png" 
                          alt="avatar" 
                          className="w-15 h-10 rounded-full border-2 cursor-pointer border-transparent transition-all duration-300 hover:border-orange-500" />
                </NavLink>
                   </div>
                   
            
        </div>
        </header>
        )}

export default Header;
