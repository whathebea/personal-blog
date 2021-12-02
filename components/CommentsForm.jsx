import { comment } from 'postcss';
import React, { useRef, useState, useEffect } from 'react'
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name')
        emailEl.current.value = window.localStorage.getItem('email')
    }, [])
    
    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current
        const { value: name } = nameEl.current
        const { value: email } = emailEl.current
        const { value: storeData } = storeDataEl.current
        if (!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = { name, email, comment, slug };

        if (storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
          } else {
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('email');
          }
      submitComment(commentObj)
          .then((res) => {
              setShowSuccessMessage(true);
              setTimeout(() => {
                  setShowSuccessMessage(false);
              }, 3000);
          })
    }
    return (
        <div className="border bg-white bg-opacity-20 rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-pink-600
         text-xl font-bold uppercase pb-4">Deixe um comentário</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea ref={commentEl}
                    className="p-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-300 bg-white bg-opacity-50 text-gray-700"
                    placeholder="comment"
                    name="comment"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input type="text"
                    ref={nameEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-300 bg-white bg-opacity-50 text-gray-700"
                    placeholder="name"
                    name="name"
                />
                <input type="text"
                    ref={emailEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-300 bg-white bg-opacity-50 text-gray-700"
                    placeholder="email"
                    name="email"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input ref={storeDataEl}
                        type="checkbox"
                        id="storeData"
                        name="storeData"
                        value="true"
                        className="cursor-pointer w-4 h-4" />
                        <label className="text-gray-500 cursor-pointer ml-2 mb-2" htmlFor="storeData">Guardar meu email e nome para a próxima vez que eu comentar</label>
                </div>
            </div>
            {error && <p className="text-xs text-red-500">Todos os campos precisam ser preenchidos</p>}
            <div className="mt-8">
                <button type="button" onClick={handleCommentSubmission}
                    className="transition duration-200 bg-transparent 
                    hover:bg-pink-600 text-pink-600 font-bold 
                    hover:text-white py-2 px-6 border border-pink-600 
                    hover:border-transparent rounded cursor-pointer text-pink-600 
                    cursor-pointer
                    text-lg">
                    Comentar
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Seu comentário será revisado antes de ser publicado</span>}
            </div>
        </div>
    )
}

export default CommentsForm
