import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import ChatWrapper from "./ChatWrapper";

export const metadata = {
  title: "Messages",
};
export default function Layout({
  children, params,
}: {
  children: React.ReactNode; params: {
    foo: string;
  };
}) {

  params.foo = "bar";
  return (
    <>
      <div className='flex justify-between items-center'>
        <p className='text-lg font-semibold py-5'>Messages</p>
        <div className='flex gap-3 items-center justify-center text-sm font-medium px-5'>
          <Link
            href='/'
            aria-label='home'
            className='uppercase hover:text-blue-500 hover:underline'>
            Doctris
          </Link>
          <BiChevronRight />
          <Link
            href='/doctor/doctor-messages'
            aria-label='Patient Messgaes'
            className='uppercase font-medium text-blue-400 hover:text-blue-500 hover:underline'
          >
            Chat
          </Link>
        </div>
      </div>
      <ChatWrapper>
        {children}
      </ChatWrapper>
    </>
  );
}
