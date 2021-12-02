import React from 'react'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import Link from 'next/link'

const PostDetail = ({ post }) => {
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>);
            }

            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
            }

            if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
            }
        }

        switch (type) {
            case 'heading-three':
                return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
                return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
                return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <div className="lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden  mb-6 ">
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
            <div className=" text-base text-gray-700 font-normal lg: mb-8">
                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                    return getContentFragment(index, children, typeObj, typeObj.type);
                })}
                </div>
            </div>
        </div>
    )
}

export default PostDetail
