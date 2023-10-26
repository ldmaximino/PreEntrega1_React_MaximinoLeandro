import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { ItemListContainter } from './components/ItemListContainter'
import { NavBar } from './components/NavBar'

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainter greeting="Nuestra lista de productos" />
    </>
  )
}

export default App
