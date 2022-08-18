import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

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
      <Card.Img variant="top" src={props.flagUrl} />
      <Card.Body className='mx-2'>
        <Card.Title className='my-3'>
          {props.name.length > 18
            ? props.name.slice(0, 18).concat('...')
            : props.name}
        </Card.Title>
        <ul className='d-flex flex-column gap-1 mb-4 p-0'>
          <li><span>Population: </span>{props.population.toLocaleString()}</li>
          <li><span>Region: </span>{props.region}</li>
          <li><span>Capital: </span>{props.capital}</li>
        </ul>
      </Card.Body>
    </Card>
  )
}

export default CountryListItem
