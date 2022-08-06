import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

type CountryListItemProps = {
  id: string
  flagUrl: string
  name: string
  population: number
  region: string,
  capital: string
}

function CountryListItem(props: CountryListItemProps) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${props.id}`)
  }

  return (
    <Card onClick={handleClick} className='shadow-sm border-0 mb-4' >
      <Card.Img style={{ height: 150, width: 260, objectFit: 'cover' }} variant="top" src={props.flagUrl} />
      <Card.Body className='mx-2'>
        <Card.Title className='my-3' style={{ fontSize: 16, fontWeight: 800 }}>{props.name}</Card.Title>
        <ul className='d-flex flex-column gap-1 mb-4 p-0' style={{ fontSize: 14, listStyle: 'none' }}>
          <li><Span>Population: </Span>{props.population.toLocaleString()}</li>
          <li><Span>Region: </Span>{props.region}</li>
          <li>
            <Span>Capital: </Span>{props.capital}
          </li>
        </ul>


      </Card.Body>
    </Card>
  )
}

export default CountryListItem

const Span = styled.span`
  font-weight: 600;
`