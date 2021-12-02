import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => {
                setCategories(newCategories);
            });
    }, []);
    return (
        <div className=" p-8 mb-8">
          <h3 className="mb-12 cursor-pointer text-pink-600
         text-xl font-bold uppercase">Categorias</h3>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="cursor-pointer block font-semibold text-sm uppercase hover:text-gray-600">{category.name}</span>
            </Link>
          ))}
        </div>
      );
    };
    
    export default Categories;