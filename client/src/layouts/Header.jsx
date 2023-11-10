import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-extrabold text-3xl text-center'>Auth App</h1>
            <ul className='flex gap-7 items-center'>
                <Link to={"/"}>
                <li >Home</li>
                </Link>
                <Link to={"/about"}>
                <li >About</li>
                </Link>
                <Link to={"/profile"}>
                  {
                    currentUser ? (
                      <img src={currentUser.profilePicture} alt="profile" className='h-10 w-[100%] rounded-full object-cover ' />
                    ) : (
                      <li >Sign In</li>
                    )  
                  }
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header