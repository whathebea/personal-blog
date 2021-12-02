import React, { useState, useEffect} from 'react'
import moment from "moment"
import parse from "html-react-parser"
import { getComments } from '../services'
import { comment } from 'postcss'
const Comments = ({ slug }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(slug).then((result) => {
          setComments(result);
        });
      }, []);

    return (
        <>
            {comment.length > 0 && (
                <div className="border bg-white bg-opacity-20 rounded-lg p-8 pb-12 mb-8">
                    <h3 className="text-pink-600
         text-xl font-bold uppercase mb-8 pb-4">
                        {comments.length} {' '} Comentários
                        </h3>
                        {comments.map((comment) => 
                        <div key={Comment.createdAt} className="bg-white bg-opacity-50 p-4 mb-4 pb-4 rounded-lg">
                            <p className="mb-4">
                                <span className="font-semibold text-pink-600">{comment.name}</span>
                                {' '} em {' '} {moment(comment.createdAt).format('DD / MM / YY')}
                            </p>
                            <p className="whitespace-pre-line text-gray-600 w-full">
                            {parse(comment.comment)}
                            </p>
                        </div>
                        
                        )}
                </div>
            )}
        </>
    )
}

export default Comments
