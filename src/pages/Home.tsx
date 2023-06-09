import React from 'react'
import styles from '../Style'
import { Link } from 'react-router-dom'
import chatter1 from '../assets/chatter1.png'
import chatter2 from '../assets/chatter2.png'
import chatterwhy1 from '../assets/chatterwhy1.png'
import chatterwhy2 from '../assets/chatterwhy2.png'
import chatterwhy3 from '../assets/chatterwhy3.png'
import join from '../assets/joinchatter.png'
import starter1 from '../assets/started1.png'
import starter2 from '../assets/started2.png'
import starter3 from '../assets/started3.png'
import { Navbar } from '../component/Navbar'


export const Home = () => {
  return (
    <div className={` ${styles.innerWidth}`}>
      <Navbar />
      <div className='relative'>
        <img src={chatter1} className='object-cover opacity-90 lg:h-full md:h-full h-[50vh]'/>

        <div className='w-full absolute lg:top-[30%] top-[30%] text-white mx-auto p-5'>
          <div className='mx-auto max-w-[740px]'>
            <h2 className={`${styles.h2Style}`}>
              Welcome to Chatter: A Haven for Text-Based Content
            </h2>
            <p className={`${styles.pStyle} lg:my-7 my-4`}>
              Welcome to Chatter: A Haven for Text-Based Content
            </p>

            <div className={` ${styles.flexCenter} rounded-2xl cursor-pointer px-2 py-4 w-[157px] border-none bg-[#543EE0] text-white`}>
              <Link to="signin">Get Started</Link>
            </div>

          </div>
        </div>
      </div>

      {/* About */}
      <div className={`${styles.paddings} flex flex-col lg:flex-row lg:items-start items-center lg:justify-between gap-5`}>
        <div className='w-full max-w-[686px]'>
          <h2 className={`${styles.h2Style}`}>About Chatter</h2>
          <p>
            Chatter is a multi-functional platform where authors and readers can have access to their own content.
            It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content.
            Our vision is to foster an inclusive and vibrant community where diversity is celebrated. 
            We encourage open-mindedness and respect for all individuals,
            regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive 
          </p>
        </div>

        <div>
          <img src={chatter2} alt='about-chatter' className='' />
        </div>

      </div>

      {/* WHy */}
      <div className={`${styles.interWidth} mx-auto w-full max-w-[1040px] px-5 lg:px-0`}>
        <div className=''>
          <h2 className={`${styles.h2Style} text-center`}>Why you should Chatter</h2>
          <p className='text-justify'>
            Our goal is to make writers and readers see our platform as their next heaven for blogging,
            ensuring ease in interactions, connecting with like-minded peers,
            have access to favorite content based on interests and able to communicate your great ideas with people
          </p>
        </div>

        <div className='my-14 flex flex-col lg:flex-row lg:justify-between gap-4 items-center'>
          <div className='w-full max-w-[306px] h-[324px] border p-4'>
            <img src={chatterwhy1} alt='chatterwhy' className='' />

            <h5 className='my-5'>Analytics</h5>
            <p>
              Analytics to track the number of views,
              likes and comment and also analyze the performance of your articles over a period of time
            </p>
          </div>

          <div className='w-full max-w-[306px] h-[324px] border p-4'>
            <img src={chatterwhy2} alt='chatterwhy' className='' />

            <h5 className='my-5'>Analytics</h5>
            <p>
              Analytics to track the number of views,
              likes and comment and also analyze the performance of your articles over a period of time
            </p>
          </div>

          <div className='w-full max-w-[306px] h-[324px] border p-4'>
            <img src={chatterwhy3} alt='chatterwhy' className='' />

            <h5 className='my-5'>Analytics</h5>
            <p>
              Write nice and appealing with our in-built markdown, a rich text editor
            </p>
          </div>
        </div>
      </div>

      {/* join */}
      {/* <div className={`${styles.innerWidth} mx-auto w-full max-w-[1240px] px-5 lg:px-0`}> */}
      <div className={`${styles.paddings} flex flex-col lg:flex-row lg:items-start items-center lg:justify-between gap-5 bg-[#FFEDCC]`}>
        <div className='flex lg:flex-row flex-col gap-10'>
          <div className='flex items-center justify-center'>
            <img src={join} alt='joinChatter' className='rounded-full' />
          </div>
          <div className=''>
            <p>
              "Chatter has become an integral part of my online experience. As a user of this incredible blogging platform, I have discovered a
              vibrant community of individuals who are passionate about sharing their ideas and engaging in thoughtful discussions.”
            </p>
            <h5 className='my-8'>Adebobola Muhydeen, <span className='font-light'>Software developer at Apple </span></h5>
            <div className={` ${styles.flexCenter} rounded-2xl cursor-pointer px-2 py-4 w-[157px] border-none bg-[#543EE0] text-white`}>
              <Link to="signin">Get Started</Link>
            </div>
          </div>
        </div>
      </div>

      {/* get started */}
      <div className={`${styles.paddings} mx-auto`}>
        <div className='flex lg:flex-row flex-col justify-between items-center gap-5'>
          <div className='flex items-center gap-10'>
            <div className='flex flex-col gap-8'>
              <img src={starter1} alt='getstarted' />
              <img src={starter2} alt='getstarted' className='rounded-full' />
            </div>
            <div>
              <img src={starter3} alt='getstarted3' className='rounded-full'/>
            </div>
          </div>
          
          <div className='max-w-[655px]'>
            <h2 className={`${styles.h2Style}`}>Write, read and connect with great minds on chatter</h2>
            <h5 className={`${styles.pStyle} my-7`}>Share people your great ideas,
              and also read write-ups based on your interests. connect with people of same interests and goals  
            </h5>

            <div className={` ${styles.flexCenter} rounded-2xl cursor-pointer px-2 py-4 w-[157px] border-none bg-[#543EE0] text-white`}>
              <Link to="signin">Get Started</Link>
            </div>
          </div>
        </div>  
      </div>

      {/* footer */}
      <div className={` `}>
        <div className={`${styles.paddings} flex flex-col lg:flex-row items-start lg:justify-between gap-5 bg-[#FFEDCC]`}>
          <div>
            <h2 className={` ${styles.h2Style} text-blue-600`}>CHATTER</h2>
          </div>
          <div>
            <h5 className={`${styles.h5Style}`}>Explore</h5>

            <p className={`${styles.pStyle2}`}>community</p>
            <p className={`${styles.pStyle2}`}>Trending Blogs</p>
            <p className={`${styles.pStyle2}`}>Chatter for teams</p>
          </div>

          <div>
            <h5 className={`${styles.h5Style}`}>Support</h5>

            <p className={`${styles.pStyle2}`}>community</p>
            <p className={`${styles.pStyle2}`}>Trending Blogs</p>
            <p className={`${styles.pStyle2}`}>Chatter for teams</p>
          </div>

          <div>
            <h5 className={`${styles.h5Style}`}>Official Blog</h5>

            <p className={`${styles.pStyle2}`}>Engineering Blog</p>
            <p className={`${styles.pStyle2}`}>Social Blogs</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

  )
}
