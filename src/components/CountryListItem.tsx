import React from 'react'
import { Card } from 'react-bootstrap'

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
      <Card.Img height={150} style={{objectFit: 'cover'}} variant="top" src={props.flagUrl} />
      <Card.Body>
        <Card.Title style={{ fontSize: 14, fontWeight: 800 }}>{props.name}</Card.Title>
        <Card.Text>Population: {props.population}</Card.Text>
        <Card.Text>Region: {props.region}</Card.Text>
        <Card.Text>Capital: {props.capital}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CountryListItem

