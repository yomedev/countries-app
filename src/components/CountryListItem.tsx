import React from 'react'
import { Card } from 'react-bootstrap'
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
  return (
    <Card className='shadow-sm border-0 mb-4' >
      <Card.Img style={{ height: 150, width: 260, objectFit: 'cover' }} variant="top" src={props.flagUrl} />
      <Card.Body className='mx-2'>
        <Card.Title className='my-3' style={{ fontSize: 16, fontWeight: 800 }}>{props.name}</Card.Title>
        <Card.Text className='d-flex flex-column mb-4 gap-1' style={{ fontSize: 14 }} >
          <div><Span>Population: </Span>{props.population.toLocaleString()}</div>
          <div><Span>Region: </Span>{props.region}</div>
          <div><Card.Text><Span>Capital: </Span>{props.capital}</Card.Text></div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CountryListItem

const Span = styled.span`
  font-weight: 600;
`