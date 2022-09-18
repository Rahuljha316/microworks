import './App.css';
import FilterBar from './components/FilterBar/FilterBar';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <NavBar />   
      <FilterBar />  
      <Products />
    </div>
  );
}

export default App;
