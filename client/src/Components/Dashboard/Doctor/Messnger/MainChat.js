import { Link, useSearchParams } from 'react-router-dom'
import { ChatBox, useBreakpoint } from '../../../Exports'

const Messages = () => {
    const { breakpoint, MobileView } = useBreakpoint();
    const [SearchQuery] = useSearchParams();
    const chatId = SearchQuery.get('chatId')
    const xl = (breakpoint === 'xl')
    const mobile = MobileView || xl
    const Users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const PatientMessageCard = () => {
        return (
            <div className='h-full overflow-hidden'>
                <div className='p-5'>
                    <h3 className='text-lg font-medium'>Chat Messages</h3>
                </div>
                <hr className='' />
                <div className='overflow-y-scroll hideScroll h-full'>
                    {Users?.map(card => (
                        <Link to='?chatId=6523&userId=2154651' className='py-3 mx-2 flex justify-between px-3 rounded-xl duration-500 hover:text-blue-500 hover:bg-blue-100'>
                            <div className='flex'>
                                <div className='w-16 h-16 bg-red-800 rounded-full flex items-center justify-center text-white font-bold'>B G</div>
                                <div className='w-full px-3'>
                                    <p className='font-medium'>Derpy MAX3</p>
                                    <p className='text-sm text-gray-400 ellipse-2'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <p>2h</p>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
    console.log(MobileView)
    return (
        <div className='container px-0 max-w-full'>
            <div className='grid grid-cols-4 gap-5 h-[85vh]'>
                {(!chatId || !mobile) &&
                    <div className='xl:border rounded-xl col-span-4 lg:col-span-4 xxl:col-span-1 h-[90vh]'>
                        <PatientMessageCard />
                    </div>}
                {(chatId || !mobile) &&
                    <div className='col-span-4 md:col-span-4 lg:col-span-4 xxl:col-span-3 xl:border rounded-xl relative w-full h-[90vh]'>
                        <ChatBox />
                    </div>}
            </div>
        </div>
    )
}

export default Messages
