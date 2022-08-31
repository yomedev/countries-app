import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

interface INavButtonProps {
  url: any,
  icon?: ReactElement,
  title: string
}

function NavButton({ url, title, icon }: INavButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url)
  }

  return (
    <button type='button' className='shadow-sm rounded btn-nav scaled' onClick={handleClick}>{icon} {title}</button>
  )
}

export default NavButton