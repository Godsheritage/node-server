import React from 'react'

const MainHeader:React.FC<any> = ({children}) => {
  return (
    <header className='d-flex flex-column bg-success'>{children}</header>
  )
}

export default MainHeader