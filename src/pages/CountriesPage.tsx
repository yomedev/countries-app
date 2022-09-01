import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountriesList from '../components/CountriesList'
import Filterbar from '../components/Filterbar'
import Searchbar from '../components/Searchbar'
import { CountriesContext } from '../contexts/CountriesContext'
import Loader from '../components/Loader'

function CountriesPage() {

  const { isCountriesLoading } = useContext(CountriesContext);

  return (
    <Container>
      <Row xs={1} md={2} className="justify-content-between">
        <Col ><Searchbar /></Col>
        <Col className='w-auto'><Filterbar /></Col>
      </Row>

      <Row xs={1} sm={2} lg={3} xl={4} className="row-custom">
        <CountriesList />
      </Row>

      {/* <div style={{height: 50, background: 'grey'}} ref={lastElement} /> */}

      {
        isCountriesLoading
        &&
        <Loader />
      }
    </Container>
  )
}

export default CountriesPage