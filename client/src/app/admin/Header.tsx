"use client";
import { BsSearch, BsList, BsJustifyLeft } from "react-icons/bs";
import { useState } from "react";

import { FeatureAction } from "../../Redux/Slices/FeaturesSlice";
import Link from "next/link";
import Image from "next/image";
import Themetoggle from "@Components/Layouts/Themetoggle";
import { useAppDispatch, useAppSelector } from "@Hooks/useRedux";
import { selectCurrentUser } from "@Redux/Slices/UserSlice";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";
interface HeaderProps {
  sideMargin?: string;
  setIsSideMargin: React.Dispatch<React.SetStateAction<string>>;
  setIsSideWidth: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ setIsSideMargin, setIsSideWidth, sideMargin }: HeaderProps) {
  const [isHeader, setIsHeader] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectCurrentUser)
  const { data: session } = useSession();

  return (
    <>
      {isHeader && (
        <div
          onClick={() => setIsHeader(false)}
          className="fixed inset-0 z-10">
        </div>
      )}
      <div className="h-20">
        <header
          className='top-0 z-10 flex flex-wrap container max-w-full duration-300 inset-x-0  bg-white dark:bg-slate-900 shadow fixed'
          style={{ paddingLeft: `${sideMargin}` }}
        >
          <div className='w-full border-b lg:border-none flex justify-between items-center p-3 whitespace-nowrap'>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <button
                  aria-label='side bar'
                  onClick={() => dispatch(FeatureAction.setDocSide())}
                  className="text-gray-500 dark:text-white lg:hidden text-lg lg:text-3xl"
                >
                  <BsJustifyLeft />
                </button>
                <button
                  onClick={() => {
                    setIsSideMargin((sideMargin !== '300px') ? '300px' : '0px');
                    setIsSideWidth((sideMargin !== '300px') ? '300px' : '0px')
                  }}
                  className='rounded-full h-10 w-10 flex justify-center items-center
                 active:scale-90 duration-200 bg-blue-500 text-white'>
                  <IoReorderThreeOutline size={25} />
                </button>
                <input
                  type='search'
                  className="w-96 rounded-full outline-none border focus:border-black py-3 px-5 hidden md:block duration-300
                   dark:bg-slate-900 dark:outline-none dark:border-slate-600 dark:focus:border-slate-200"
                  placeholder="search ..."
                />
              </div>

            </div>
            <div className="flex gap-2 md:gap-4 items-center">
              <Themetoggle />
              <Link aria-label='profile' href={`/profile/doctor/${userInfo.username}`}>
                {userInfo.profilePicture &&
                  <Image
                    height={200}
                    width={200}
                    className="h-10 w-10 rounded-full shadow-blue-600 shadow-md drop-shadow-xl"
                    src={userInfo?.profilePicture}
                    alt="admin profile"
                  />
                }
              </Link>
              <button
                aria-label='show more'
                className="lg:hidden"
                onClick={() => setIsHeader(!isHeader)}
              >
                <BsList size={24} />
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
