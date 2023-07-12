'use client';
import { useAppDispatch } from '@Hooks/useRedux';
import { DoctorsApi, useGetAllMyPatientsQuery } from '@Redux/APIs/DoctorApi';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { ImSpinner3 } from 'react-icons/im';
import InfiniteScroll from 'react-infinite-scroll-component';

interface PatientProps {

}

const Patient: FC<PatientProps> = ({ }) => {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { data, isFetching, error, isError } = useGetAllMyPatientsQuery({ page: 1, limit: 10 });
    const { allPatients, results } = data || {};
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (page > 1) {
            dispatch(
                DoctorsApi.endpoints.GetMoreMyPatients.initiate({
                    page,
                    limit: 10
                })
            );
        }
    }, [page, dispatch]);

    useEffect(() => {
        if (results === 0) {
            setHasMore(false);
        }
    }, [results, page]);


    if (!Patient || allPatients?.length === 0) {
        return null
    }
    return (
        <>
            {isFetching ?
                <div>

                </div>
                : isError ? <p></p> : allPatients &&
                    <InfiniteScroll
                        dataLength={allPatients.length} //This is important field to render the next data
                        next={() => setPage((prevPage) => prevPage + 1)}
                        hasMore={hasMore}
                        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-5 p-1 !m-0'
                        loader={
                            <div className='flex justify-center items-center my-5 animate-spin'>
                                <ImSpinner3 size={25} />
                            </div>
                        }
                        endMessage={
                            <div className='flex justify-center my-5 text-lg font-semibold'>
                                <p>You see it all</p>
                            </div>}
                        style={{ marginBottom: '3rem', overflow: 'hidden' }}
                    >
                        {allPatients?.map((user) => (
                            <div
                                className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-96 shadow-gray-100 rounded-lg overflow-hidden p-4'
                                key={user._id}
                            >
                                <div className='flex justify-between items-start'>
                                    {user.profilePicture &&
                                        <Image
                                            height={100}
                                            width={100}
                                            className='w-24 h-24 object-cover rounded-full'
                                            src={user.profilePicture}
                                            alt={user.name as string}
                                        />
                                    }
                                    <button
                                        aria-label='view patient'
                                        className="bg-sky-100 active:bg-sky-200 active:shadow-blue-300 text-sky-400 
                                        rounded-full h-10 w-10 flex justify-center items-center shadow-blue-200 shadow-md border border-blue-200">
                                        <BsThreeDots size={15} />
                                    </button>
                                </div>
                                <div className='py-5'>
                                    <p className='font-bold'>{user.name}</p>
                                    <div className='pt-5'>
                                        <span className='flex gap-3 font-light capitalize'>
                                            <p className='text-gray-400'>Gender: </p>
                                            <p>{user.gender}</p>
                                        </span>
                                        <span className='flex gap-3 font-light capitalize'>
                                            <p className='text-gray-400'>Age: </p>
                                            <p>{user.age}</p>
                                        </span>
                                        <span className='flex gap-3 font-light capitalize'>
                                            <p className='text-gray-400'>Country: </p>
                                            <p>{user.gender}</p>
                                        </span>
                                        <span className='flex gap-3 font-light capitalize'>
                                            <p className='text-gray-400'>Diagnosis: </p>
                                            <p>{user.gender}</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </InfiniteScroll>
            }
        </>
    )
}

export default Patient