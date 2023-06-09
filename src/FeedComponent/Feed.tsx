import React,{useState} from 'react'
import styles from '../Style'
import { Link } from 'react-router-dom'
import ForYou from './ForYou'
import Featured from './Featured'
import Recent from './Recent'
import FeedScreen from '../pages/DashboardLayout'

const Feed = () => {
    const option = ["For You", "FEATURED", "RECENT"]
  const [feed, setfeed] = useState<string>("For You")

  const onClicks = (item:string) => {
    setfeed(item)
  }
    

  return (
    <FeedScreen>
    <div className={`${styles.innerWidth} ${styles.xPaddings} py-4`}>
        <div>
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <h2 className={`${styles.h5Style}`}>FEED</h2>
                    <p className={`${styles.pStyle2} pt-3`}>Explore different content you’d love </p>
                </div>
                <div className={` ${styles.flexCenter} rounded-2xl cursor-pointer px-2 py-4 w-[157px] border-none bg-[#543EE0] text-white`}>
                    <Link to="signin">Post a Content</Link>
                </div>
            </div>
            <div className='flex justify-between items-center border py-4 px-3'>
                {option.map((item, id) => {
                    return (
                        <div className={`cursor-pointer ${feed === item ? " border-b-2 border-blue-400" : ""}`} onClick={() => onClicks(item)}>
                            {item}
                        </div>
                    )
                })}
            </div>

            {feed === "For You" ? 
                <div>
                    <ForYou />
                </div> :
                feed === "FEATURED" ?
                <div>
                    <Featured /> 
                </div> : 
                <div>
                    <Recent />
                </div>
            }
        </div>
    </div>
    </FeedScreen>
  )
}

export default Feed