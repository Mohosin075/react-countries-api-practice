import logo from './logo.svg';
import './App.css';
import LoadCountriesData from './components/LoadCountriesData/LoadCountriesData';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>This is REST Country</h1>
      <Header></Header>
      <LoadCountriesData></LoadCountriesData>
      <Footer></Footer>
    </div>
  );
}

export default App;
