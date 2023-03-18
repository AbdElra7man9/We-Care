import { Link } from "react-router-dom"

const AdminSidebar = ({ sideWidth }) => {

    return (
        <div
            className='fixed top-0 left-0 z-10 border-r overflow-hidden duration-300 h-full'
            style={{ width: `${sideWidth}` }}>
            <div className="p-5">
                <Link to='/' className='flex gap-3'>
                    <img className='w-10 h-10 rounded-xl'
                        src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                    <p className={`text-2xl font-bold text-black`}>Doctris</p>
                </Link>
            </div>
            <hr />
        </div>

    )
}

export default AdminSidebar
