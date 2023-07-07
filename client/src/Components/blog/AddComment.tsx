"use client";
import { useCreateCommentMutation } from "@Redux/APIs/CommentsApi";
import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";


export default function AddComment({ blogId }: { blogId: string }): JSX.Element {

    const [content, setContent] = useState<string>('');
    const [createComment, { isLoading }] = useCreateCommentMutation();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createComment({ blogId, content }).unwrap()
            .then(() => {
                toast.success('Comment added successfully')
            })
            .catch(error => {
                toast.error(error.data.message)
            })
    };

    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="text-sm text-gray-500 font-medium text-start my-1">
                    Message
                </label>
                <textarea
                    placeholder="content..."
                    cols={60}
                    rows={5}
                    onChange={(e) => setContent(e.target.value)}
                    className="border p-3 outline-none inputfield rounded-lg g-24"
                />

                <button
                    aria-label='submit'
                    type='submit'
                    className='btn-primary mt-4 h-12'
                    disabled={isLoading}
                >
                    {isLoading ? <span className='flex items-center justify-center text-2xl animate-spin'>
                        <ImSpinner9 />
                    </span> : 'Add Comment'}
                </button>
            </form>
        </>
    );
}
