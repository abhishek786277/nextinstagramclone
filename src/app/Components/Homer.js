"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import Sign from './Sign';
import Header from './Header';
import Feed from './Feed';
import Modal from './Modal';
function Homer() {
  const { data: session } = useSession();
  // console.log(session)
  return (
    session?
    (<div>
      <Header/>
      <Feed/>
      <Modal/>
    </div>)
    :
    (<Sign/>)
  )
}

export default Homer