import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CountriesProvider } from './contexts/CountriesContext';
import { ThemeProvider } from './contexts/ThemeContext';
import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';
import './styles/App.scss'


function App() {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<CountriesPage />} />
            <Route path='country/:countryId' element={<CountryPage />} />
          </Routes>
        </>
      </CountriesProvider>
    </ThemeProvider>
  )
}

export default App
