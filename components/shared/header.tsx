import React from 'react'
import Sidebar from '../sidebar'
import ResultSide from '../result-side'

const Header = () => {
  return (
    <header className='flex w-full header-height'>
        <Sidebar />
        <ResultSide />
    </header>
  )
}

export default Header