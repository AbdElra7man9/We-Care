// import useBreakpoint from "../Hooks/useBreakpoint";
"use client";
import { BsSearch, BsGear, BsList, BsJustifyLeft } from "react-icons/bs";
import { useState, useEffect } from "react";

import { FeatureAction } from "../../Redux/Slices/FeaturesSlice";
import Link from "next/link";
import Image from "next/image";
import useBreakpoint from "../../Hooks/useBreakpoint";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import Themetoggle from "../Layouts/Themetoggle";
interface HeaderProps {
  sideMargin: Boolean;
  setIsSideMargin: () => void;
  setIsSideWidth: () => void;
}
interface FeatureAction {
  setDocSide: Boolean;
}
export default function Header() {
  const [isHeader, setIsHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { MobileView } = useBreakpoint();
  const dispatch = useDispatch();
  const key = usePathname();
  const dash = key.includes("doctor");
  const drDash = key.includes("doctor");
  const admindash = key.includes("admin");
  const pathname = usePathname();
  const isHome = pathname === "/";
  useEffect(() => {
    if (window.scrollY !== 0) {
      setIsScrolled(true);
    }
  }, []);
  return (
    <>
      {isHeader && (
        <div
          onClick={() => setIsHeader(false)}
          className="fixed inset-0 z-10"
        ></div>
      )}
      <header
        className={`fixed z-10 container max-w-full bg-white !dark:bg-slate-900 lg:bg-transparent top-0 duration-300 inset-x-0 select-none
        ${(isScrolled || !isHome) && "!bg-white dark:bg-slate-900 lg:!border-b"
          }`}>
        <div
          className={`container border-b lg:border-none flex justify-between items-center p-3 whitespace-nowrap
                ${dash || drDash || admindash
              ? "max-w-full"
              : " max-w-[28rem] sm:max-w-[35rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem]"
            }`}
        >
          <div className="flex items-center gap-10">
            <div className="flex gap-3">
              {drDash && (
                <button
                  // onClick={() => dispatch(FeatureAction.setDocSide(true))}
                  className="text-gray-500 dark:text-white lg:hidden text-lg lg:text-3xl"
                >
                  <BsJustifyLeft />
                </button>
              )}
              <Link href="/" className="flex gap-3">
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
            {!MobileView && (
              <div className="list-none flex gap-5 text-lg text-gray-800 dark:text-slate-400 font-medium uppercase">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <Link href="/doctor/doctor-dashboard">Doctor</Link>
                <Link href="/patient/dashboard">Patients</Link>
                <Link href='/'>Pharmacy</Link>
                <Link href="/admin/admin-dashboard">Admin</Link>
              </div>
            )}
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <Themetoggle />
            <button className="bg-blue-600 text-white rounded-full p-3">
              <BsGear size={15} />
            </button>
            <button className="bg-blue-600 text-white rounded-full p-3">
              <BsSearch size={15} />
            </button>
            <Link href="/profile?user=profile">
              <Image
                height={200}
                width={200}
                className="h-10 w-10 rounded-full shadow-blue-600 shadow-md drop-shadow-xl"
                src="/Images/doctors/01.jpg"
                alt=""
              />
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setIsHeader(!isHeader)}
            >
              <BsList size={24} />
            </button>
          </div>
        </div>
        {isHeader && (
          <div className="space-y-5 px-8 py-3 text-base text-gray-600 dark:text-slate-400 font-medium uppercase z-20">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/doctor/doctor-dashboard" className="block">Doctor</Link>
            <Link href="/patient/dashboard" className="block">Patients</Link>
            <Link href='/' className="block">Pharmacy</Link>
            <Link href='/' className="block">Pages</Link>
          </div>
        )}
      </header>
      <div
        className="bg-transparent h-16 max-w-full dark:bg-slate-900"
      ></div>
    </>
  );
}
