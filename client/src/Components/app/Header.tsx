"use client";
import { BsSearch, BsGear, BsList, BsJustifyLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Themetoggle from "../Layouts/Themetoggle";
import { useAppSelector } from "@Hooks/useRedux";
import { selectCurrentUser } from "@Redux/Slices/UserSlice";
interface HeaderProps {
  sideMargin?: string;
  setIsSideMargin?: () => void;
  setIsSideWidth?: () => void;
}

export default function Header({ setIsSideMargin, setIsSideWidth, sideMargin }: HeaderProps) {
  const [isHeader, setIsHeader] = useState<Boolean>(false);
  const userInfo = useAppSelector(selectCurrentUser)
  const key = usePathname() as string;
  const dash = key.includes("patient");
  const drDash = key.includes("doctor");
  const [pos, setPos] = useState<string>("top");

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

  return (
    <>
      <header
        className={`top-0 z-10 container max-w-full duration-300 inset-x-0 select-none bg-transparent absolute
        ${(pos === "top")
            ? "absolute "
            : "!fixed shadow-b-2xl bg-white dark:!bg-slate-900"
          }}
           ${isHeader && 'bg-white'}`
        }>
        <div
          className={`container flex justify-between items-center p-3 whitespace-nowrap
                ${dash || drDash
              ? "max-w-full"
              : " max-w-[28rem] sm:max-w-[35rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem]"
            }`}
        >
          <div className="flex items-center gap-10">
            <div className="flex gap-3">
              <Link href="/" aria-label='logo' className="flex gap-3">
                <Image
                  height={200}
                  width={200}
                  className="w-10 h-10 rounded-xl"
                  src="/Images/logo-icon.png"
                  alt=""
                />
                <p className={`text-2xl font-bold dark:text-slate-100 ${(dash || drDash) && "text-black dark:text-slate-100"}`}>Doctris</p>
              </Link>
            </div>
            <div className="list-none gap-5 text-lg text-gray-800 dark:text-slate-400 font-medium uppercase hidden lg:flex">
              <Link aria-label='home' href="/" className="hover:text-blue-600">Home</Link>
              <Link aria-label='doctor' href="/doctor/doctor-dashboard">Doctor</Link>
              <Link aria-label='patients' href="/patient/patient-dashboard">Patients</Link>
              <Link aria-label='pharmacy' href='/'>Pharmacy</Link>
              <Link aria-label='admin' href="/admin/admin-dashboard">Admin</Link>
              <Link aria-label='contact us' href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <Themetoggle />
            <button aria-label='settings' className="bg-blue-600 text-white rounded-full p-3">
              <BsGear size={15} />
            </button>
            <button aria-label='search' className="bg-blue-600 text-white rounded-full p-3">
              <BsSearch size={15} />
            </button>
            <Link aria-label='profile' href={`/profile/${userInfo.username}`}>
              <Image
                height={200}
                width={200}
                className="h-10 w-10 rounded-full shadow-blue-600 shadow-md drop-shadow-xl"
                src="/Images/doctors/01.jpg"
                alt=""
              />
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
        {isHeader && (
          <div className="space-y-5 px-8 py-3 text-base text-gray-600 dark:text-slate-400 font-medium uppercase z-20">
            <Link aria-label='home' href="/" className="block hover:text-blue-600">Home</Link>
            <Link aria-label='doctor' href="/doctor/doctor-dashboard" className="block">Doctor</Link>
            <Link aria-label='patients' href="/patient/dashboard" className="block">Patients</Link>
            <Link aria-label='pharmacy' href='/' className="block">Pharmacy</Link>
            <Link aria-label='pages' href='/' className="block">Pages</Link>
          </div>
        )}
      </header>
    </>
  );
}
