import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Profile(){
  const {user} = useContext(UserContext)

  if(!user) 
    return (
      <div>
        Please Login
      </div>
    )
  else {
    return(
      <div>
        <h2>Welcome! {user.username}</h2>
      </div>
    )
  }
}