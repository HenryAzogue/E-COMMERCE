import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Purchases from './pages/Purchases';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import LoadingScreen from './components/LoadingScreen';
import { useSelector } from 'react-redux';

function App() {

  const isLoading = useSelector(state =>state.isLoading);

  return (
    <HashRouter>
      <NavBar />
      { isLoading && <LoadingScreen /> }
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/purchases" element={<Purchases />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
