import React from 'react'

const MainHeader:React.FC<any> = ({children}) => {
  return (
    <header className='d-flex justify-content-between container '>{children}</header>
  )
}

export default MainHeader