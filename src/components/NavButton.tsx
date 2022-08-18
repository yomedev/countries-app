import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

interface navButtonPropsType {
  url: any,
  icon?: ReactElement,
  title: string
}

function NavButton({ url, title, icon }: navButtonPropsType) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url)
  }

  return (
    <button type='button' className='btn-nav' onClick={handleClick}>{icon} {title}</button>
  )
}

export default NavButton