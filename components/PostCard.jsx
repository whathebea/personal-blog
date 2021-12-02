import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostCard = ({ post }) => {
    console.log(post)
    return (
        <div className="border-b-2 p0 lg: p-8 pb-12 mb-8">
            <h1 className="mb-3 cursor-pointer text-pink-600
         text-2xl font-bold uppercase">
                <Link href="{`/post/${post.slug}`}">
                    {post.title}
                </Link>
            </h1>
            <div className="block lg:flex mb-6 w-full ">
                <div className="font-medium text-gray-700 text-sm">
                    <span>
                       Postado em {moment(post.createdAT).format('DD / MM / YYYY')} por <span className="font-semibold">{post.author.name}</span>
                    </span>
                </div>
            </div>
            <div className="relative overflow-hidden pb-60 mb-6">
                <img src={post.featuredImage.url} alt="" className="object-top absolute h-60 w-full object-cover rounded-t-lg lg:rounded-lg" />
            </div>
            

            
            <p className=" text-base text-gray-700 font-normal lg: mb-8">{post.excerpt}</p>
            <div className="text-left"><Link href={`/post/${post.slug}`}>
                <span className=" transition duration-200 bg-transparent 
                                hover:bg-pink-600 text-pink-600 font-bold 
                                hover:text-white py-2 px-6 border border-pink-600 
                                hover:border-transparent rounded cursor-pointer text-pink-600 
                                cursor-pointer
                                text-lg">
                    Leia mais
                </span>
            </Link></div>
        </div>
    )
}

export default PostCard
