import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="transition duration-200 cursor-pointer font-bold text-5xl text-gray-900 hover:text-pink-600">bea</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <a href="https://whathebea.github.io/" target={"_blank"}>
            <span className="md:float-right align-middle transition duration-200 bg-transparent 
                                hover:bg-pink-600 text-pink-600 font-bold 
                                hover:text-white py-2 px-6 border border-pink-600 
                                hover:border-transparent rounded cursor-pointer text-pink-600 ml-14 
                                cursor-pointer
                                text-xl">portfolio</span>
          </a>
          <a href="https://codepen.io/whathebea" target={"_blank"}><span className="md:float-right mt-2 align-middle transition duration-200 text-xl 
                                        text-gray-900 ml-14 font-bold cursor-pointer hover:border-b-2 hover:border-pink-600">codepen</span></a>
          <a href="https://github.com/whathebea" target={"_blank"}><span className="md:float-right mt-2 align-middle transition duration-200 text-xl 
                                        text-gray-900 ml-14 font-bold cursor-pointer hover:border-b-2 hover:border-pink-600">github</span></a>
          <a href="https://www.aedin.com/in/beatriz-gracia-dos-santos-2762bb21b/" target={"_blank"}><span className="md:float-right mt-2 align-middle transition duration-200 text-xl 
                                        text-gray-900 ml-14 font-bold cursor-pointer hover:border-b-2 hover:border-pink-600">linkedin</span></a>

        </div>
      </div>
    </div>
  );
};


export default Header
