import React, { useState } from 'react'
import MessagesList from './messages-list'
import MessagesChat from './messages-chat'

export default function Messages() {
  const [list, showList] = useState(true)
  return (
    <>
      <div className='flex md:hidden'>
        {list ?
          <MessagesList showList={showList}/> : <MessagesChat showList={showList}/>
        }
      </div>
      <div className='hidden md:flex '>
        <MessagesList />
        <MessagesChat />
      </div>
    </>
  )
}
