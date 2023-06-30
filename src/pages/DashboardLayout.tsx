import React, {ReactNode} from 'react'
import styles from '../Style'
import { Link } from 'react-router-dom'
import {MdDynamicFeed} from 'react-icons/md'
import {BsBookmarks} from 'react-icons/bs'
import {SlPeople} from 'react-icons/sl'
import {MdOutlineDrafts, MdOutlineAnalytics} from 'react-icons/md'
import {IoMdNotificationsOutline} from 'react-icons/io'
import Feed from '../FeedComponent/Feed'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

interface Props {
    children: ReactNode
}

const FeedScreen : React.FC<Props> = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()

    function pathMatch(route: string) :boolean{
        if(route === location.pathname){
            return true
        }
        return false
    }

  return (
    <div className={`${styles.innerWidth}`}>
        <div className='w-[100%] flex'>
            {/* navbar feed */}
            <div className='w-[30%] border h-[100vh] '>
                <div className='w-full px-20'>
                    <h2 className={` ${styles.h5Style} text-blue-600`}>CHATTER</h2>
                    <div className='mt-5 w-full'>
                        <h2 className={` ${styles.pStyle} text-black`}>Overview</h2>
                        <ul className='mx-5 text-justify'>
                            <li className={`flex gap-2 items-center my-2 hover:text-blue-500 ${pathMatch('/feedscreen') && 'text-blue-600'}`}>
                                <MdDynamicFeed />
                                <Link to='/feedscreen' >Feeds</Link>
                            </li>
                            <li className={`flex gap-2 items-center my-2 hover:text-blue-500 ${pathMatch('/bookmark') && 'text-blue-600'}`}>
                                <BsBookmarks />
                                <Link to='/bookmark' >Bookmarks</Link>
                            </li>
                            <li className={`flex gap-2 items-center my-2 hover:text-blue-500 ${pathMatch('/teamblog') && 'text-blue-600'}`}>
                                <SlPeople />
                                <Link to='/teamblog' >Team Blog</Link>
                            </li>
                            <li className={`flex gap-2 items-center my-2 hover:text-blue-500 ${pathMatch('/drafts') && 'text-blue-600'}`}>
                                <MdOutlineDrafts />
                                <Link to='/drafts' >Drafts</Link>
                            </li>
                            <li className={`flex gap-2 items-center my-2 hover:text-blue-500 ${pathMatch('/analytics') && 'text-blue-600'}`}>
                                <MdOutlineAnalytics />
                                <Link to='/analytics' >Analytics</Link>
                            </li>
                            
                        </ul>
                    </div>

                    <div className='mt-5 w-full'>
                        <h2 className={` ${styles.pStyle} text-black`}>Trending</h2>
                        <ul className='mx-5 text-justify'>
                            <li className='flex gap-2 items-center my-2'>
                                <Link to='' className={`${styles.pStyle2} hover:text-blue-500`}>Programming</Link>
                            </li>
                            <li className='flex gap-2 items-center my-2'>
                                <Link to='' className={`${styles.pStyle2} hover:text-blue-500`}>Technology</Link>
                            </li>
                            <li className='flex gap-2 items-center my-2'>
                                <Link to='' className={`${styles.pStyle2} hover:text-blue-500`}>Data Science</Link>
                            </li>
                            <li className='flex gap-2 items-center my-2'>
                                <Link to='' className={`${styles.pStyle2} hover:text-blue-500`}>Machine Learning</Link>
                            </li>
                            <li className='flex gap-2 items-center my-2'>
                                <Link to='' className={`${styles.pStyle2} hover:text-blue-500`} >Politics</Link>
                            </li>
                            <li className='flex gap-2 items-center my-2'>
                                <Link to='' className={`${styles.pStyle} text-blue-500`}>See All</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='mt-5 w-full'>
                        <h2 className={` ${styles.pStyle} text-black`}>Personal</h2>
                        <ul className='mx-5 text-justify'>
                            <li className={`flex gap-2 items-center my-2 hover:text-blue-500 ${pathMatch('/profile') && 'text-blue-600'}`}>
                                <SlPeople />
                                <Link to='/profile' >Account</Link>
                            </li>
                            <li className='flex gap-2 items-center my-2 hover:text-blue-500'>
                                <IoMdNotificationsOutline />
                                <Link to='' >Notificaton</Link>
                            </li>

                            <li className='flex gap-2 items-center my-2'>
                                <Link to='' className={`${styles.pStyle} text-red-500`}>See All</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* feed screen */}
            <div className='w-[70%] border'>
                <div className='w-full flex px-10 py-3 items-center justify-center border'>
                    <div className='flex-1 items-center justify-center'>
                        <input 
                            placeholder='search'
                            className='w-[300px] h-12 border mx-auto'
                        />
                    </div>
                    <div className=''> 
                        <IoMdNotificationsOutline />
                    </div>

                </div>

                <div>
                    {/* <Feed /> */}
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeedScreen