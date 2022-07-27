import React from 'react'
import { Card, Container, Navbar as NavbarBs } from 'react-bootstrap'
import { BsMoon } from 'react-icons/bs'
import styled from 'styled-components'

function Navbar() {
  return (
    <NavbarBs
      style={{ backgroundColor: 'hsl(0, 0%, 100%)' }}
      className="shadow-sm mb-4">
      <Container>
        <NavbarBs.Brand style={{ fontWeight: 800, fontSize: 18 }}>Where in the world?</NavbarBs.Brand>
        <Button> <BsMoon size={14} /><span>Dark Mode</span></Button>
      </Container>
    </NavbarBs>
  )
}

export default Navbar

const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  word-spacing: 1px;
  gap: 5px;
  padding: 10px;
  border-radius: 8px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 15px;
  }
`;






