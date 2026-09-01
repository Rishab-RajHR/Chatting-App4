import React from 'react'
import OtherUser from './OtherUser'
import UseGetOtherUsers from '../hooks/UseGetOtherUsers'
import { useSelector } from 'react-redux';

const OtherUsers = () => {
  // My Custom Hooks
  UseGetOtherUsers();

  const {otherUsers} = useSelector(store=>store.user);
  if (!otherUsers) return;  // early return in react

  return (
    <div className='overflow-auto flex-1'>
      {
          otherUsers.map((user)=> {
              return (
                     <OtherUser key={user._id} user={user}/>
              )
          })
      }
    </div>
  )
}

export default OtherUsers