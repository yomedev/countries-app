import React, { ReactComponentElement, ReactElement } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { To, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

interface navButtonPropsType  {
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
    <>
      <Button onClick={handleClick}>{icon} {title}</Button>
    </>


  )
}

export default NavButton

const Button = styled.button`
width: 95px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 14px;
padding: 4px 18px;
  border: none;
  background-color: hsl(0, 0%, 100%);
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`