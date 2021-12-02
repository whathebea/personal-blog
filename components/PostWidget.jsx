import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if (slug) {
            getSimilarPosts(categories, slug)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

    return (
        <div className=" p-8 mb-8">
            <h3 className="mb-12 cursor-pointer text-pink-600
         text-xl font-bold uppercase">
                {slug ? "Posts Relacionados" : "Posts Recentes"}
            </h3>
            {relatedPosts.map((post) => (
                <div key={post.title} className="flex items-center w-full mb-4">
                    <div className="w-16 flex-none">
                        <img alt={post.title}
                            height="120px"
                            width="60px"
                            className="align-middle rounded-full"
                            src={post.featuredImage.url} />
                    </div>
                    <div className="flex-grow ml-4">
                        <p className="text-gray-700 font-medium text-xs">{moment(post.createdAt).format('DD / MM / YY')}</p>
                        <Link href={`/post/${post.slug}`} key={post.title}>
                            <span className="text-sm font-semibold">{post.title}</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget
