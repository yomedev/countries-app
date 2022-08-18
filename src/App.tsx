import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import CountryPage from './pages/CountryPage';
import './styles/App.scss'


function App() {
  return (
    <ThemeProvider>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<CountriesList />} />
          <Route path='country/:countryId' element={<CountryPage />} />
        </Routes>
      </>
    </ThemeProvider>
  )
}

export default App
