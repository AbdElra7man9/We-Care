"use client";
import { BsSearch, BsGear, BsList, BsJustifyLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Themetoggle from "../Layouts/Themetoggle";
import { useAppDispatch, useAppSelector } from "@Hooks/useRedux";
import { selectCurrentUser } from "@Redux/Slices/UserSlice";
import { FeatureAction } from "@Redux/Slices/FeaturesSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SearchPanel from "./SearchPanel";
import { AnimatePresence } from "framer-motion";


export default function Header({ isFull, drDash }: { isFull: Boolean; drDash?: Boolean }) {
  const [isHeader, setIsHeader] = useState<Boolean>(false);
  const userInfo = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [pos, setPos] = useState<string>("top");
  const [isSearchPanel, setIsSearchPanel] = useState<boolean>(false);
  // Check the top position of the navigation in the window
  useEffect(() => {
    const handleScrollTop = () => {
      const scrolled = document.scrollingElement?.scrollTop;
      if ((scrolled as number) >= 5) {
        setPos("moved");
      } else {
        setPos("top");
      }
    };
    document.addEventListener("scroll", handleScrollTop);
    return () => document.removeEventListener("scroll", handleScrollTop);
  }, []);
  const [keyword, setKeyword] = useState<string>('');
  const router = useRouter();
  const handlesearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?keyword=${keyword}`);
  }

  const FormSearch = ({ className }: { className?: string }) => {
    return (
      <form onSubmit={handlesearch} className={`${className} justify-center select-none`}>

        <div className="relative w-full flex gap-5">
          <input
            type="search"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            className="py-2 px-8 w-full text-sm rounded-lg text-gray-900 bg-gray-50 border outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for product "
          />
          <span className='absolute inset-y-0 left-0 px-2 text-gray-600 flex items-center justify-center'>
            <BsSearch size={18} />
          </span>
        </div>

      </form >
    )
  }

  const { data: session } = useSession();
  const doctor = session?.role === 'Doctor';
  const patient = session?.role === 'Patient';
  const admin = session?.role === 'Coodinator';
  const NavLinks = () => {
    return (
      <>
        <Link aria-label='home' href="/" className="hover:text-blue-600">Home</Link>
        {doctor ?
          <Link aria-label='doctor' href="/doctor/doctor-dashboard">Doctor</Link>
          : patient ?
            <Link aria-label='patients' href="/patient/dashboard/overflow">Patients</Link>
            : admin &&
            <Link aria-label='admin' href="/admin/admin-dashboard">Admin</Link>

        }
        {/* <Link aria-label='pharmacy' href='/'>Pharmacy</Link> */}
        <Link aria-label='Blogs' href="/blogs">Blog</Link>
        <Link aria-label='Privacy' href="/privacy">Privacy & Security</Link>
        <Link aria-label='Terms' href="/terms">Terms & Condition</Link>
        <Link aria-label='Contact us' href="/contact">Contact Us</Link>
      </>
    )
  }
  return (
    <>
      <AnimatePresence>
        {isSearchPanel &&
          <SearchPanel onClose={() => { setIsSearchPanel(false) }} />
        }
      </AnimatePresence>
      <header
        className={`top-0 z-10 container max-w-full duration-300 inset-x-0 select-none bg-transparent absolute
        ${(pos === "top")
            ? "absolute"
            : "!fixed shadow-b-2xl dark:!bg-slate-900 bg-white "
          }
           ${isHeader && 'bg-white dark:bg-slate-900'}`
        }>
        <div
          className={`container flex justify-between items-center p-3 whitespace-nowrap
                ${isFull
              ? "max-w-full"
              : " max-w-[28rem] sm:max-w-[35rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem]"
            }`}
        >
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              {
                drDash && <button
                  onClick={() => dispatch(FeatureAction.setDocSide())}
                  className='text-gray-500 md:hidden text-lg lg:text-3xl'><BsJustifyLeft />
                </button>
              }
              <Link href="/" aria-label='logo' className="flex items-center gap-3">
                <Image
                  height={200}
                  width={200}
                  className="w-10 h-10 rounded-xl"
                  src="/Images/logo-icon.png"
                  alt=""
                />
                <p className={`text-2xl font-bold ${(pos !== "top" || isFull) && "dark:!text-slate-100 !text-black"}`}>Doctris</p>
              </Link>
            </div>
            <div className="list-none gap-5 text-gray-800 text-sm dark:text-slate-400 font-medium uppercase hidden lg:flex">
              <NavLinks />
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <Themetoggle />
            <button aria-label='settings' className="bg-blue-600 text-white rounded-full p-3">
              <BsGear size={15} />
            </button>
            <button
              aria-label='search'
              className="bg-blue-600 text-white rounded-full p-3"
              onClick={() => { setIsSearchPanel(true) }}>
              <BsSearch size={15} />
            </button>
            {!session ?
              <Link
                aria-label='signin'
                href='/auth/signin'
                draggable={false}
                className="bg-blue-600 text-white rounded-md font-medium active:scale-95 duration-300 p-2 px-4">
                Sign In
              </Link>
              :
              <Link aria-label='profile' href={`${doctor ? `/profile/doctor/${userInfo.username}` : patient && `/profile/patient/${userInfo.username}`}`}>
                <Image
                  height={200}
                  width={200}
                  className="h-10 w-10 rounded-full shadow-blue-600 shadow-md drop-shadow-xl"
                  src="/Images/Doctors/01.jpg"
                  alt=""
                />
              </Link>
            }
            <button
              aria-label='show more'
              className="lg:hidden"
              onClick={() => setIsHeader(!isHeader)}
            >
              <BsList size={24} />
            </button>
          </div>
        </div>
        {isHeader && (
          <div className="flex lg:hidden flex-col gap-y-5 px-8 py-3 text-sm
           text-gray-600 dark:text-slate-400 dark:bg-slate-900
            font-medium uppercase z-20">
            <FormSearch />
            <NavLinks />
          </div>
        )}
      </header>
    </>
  );
}
