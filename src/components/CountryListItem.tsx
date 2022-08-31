import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ICountryCard } from '../types/countryTypes';

const CountryListItem = (props: ICountryCard) => {

  return (
    <Link to={`/country/${props.id}`} className="card shadow-sm border-0 scaled">
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
    </Link>
  )
};

export default CountryListItem
