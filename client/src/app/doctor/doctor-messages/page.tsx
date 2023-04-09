import { BsThreeDotsVertical, BsJustifyLeft } from 'react-icons/bs';
import { FeatureAction } from '@Redux/Slices/FeaturesSlice';
import HandleGridView from './HandleGridView';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch } from '@Hooks/useRedux';

export default function page() {


  // const dispatch = useAppDispatch();

  const Users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  const PatientMessageCard = () => {
    return (
      <div className='h-full overflow-hidden'>
        <div className='p-5 px-2 flex justify-between items-center'>
          <div className='flex gap-1 items-center'>
            <button
              // onClick={() => dispatch(FeatureAction.setDocSide())}
              aria-label='sidebar'
              className='text-gray-500 lg:hidden text-lg lg:text-3xl'><BsJustifyLeft />
            </button>
            <h3 className='text-lg font-medium'>Chat Messages</h3>
          </div>
          <BsThreeDotsVertical />
        </div>
        <hr className='mb-2' />
        <div className='overflow-y-scroll hideScroll h-full'>
          {Users?.map(card => (
            <Link
              href='?chatId=6523&userId=2154651'
              aria-label='chat'
              key={card}
              className='py-3 mx-2 flex justify-between px-3 rounded-xl hover:text-blue-500 hover:bg-blue-100'
            >
              <div className='flex'>
                <div>
                  <span
                    className='w-16 h-16 bg-red-800 rounded-full flex items-center justify-center text-white font-bold'>
                    BG
                  </span>
                </div>
                <div className='w-full px-3'>
                  <p className='font-[500] text-sm'>Derpy MAX3</p>
                  <p className='text-xs text-gray-400 ellipse-2'>
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <p>2h</p>
            </Link>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className='container px-0 md:pt-5 xl:pt-0 md:px-2 max-w-full py-24 mt-16'>
      {/* <HandleGridView /> */}
    </div>
  )
}
