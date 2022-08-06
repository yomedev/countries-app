import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryPage from './pages/CountryPage';
import './styles/App.css'


function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='country/:countryId' element={<CountryPage />} />
        
      </Routes>
    </div>
  )
}

export default App
