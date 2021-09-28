import './App.css';
import Countries from './components/Countries/Countries';
function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
export default App;

//-------------------------------------------------------
/* function Countries() { //Countries component
  const [countries, setCountries] = useState([]); //declaring useState
  useEffect(() => { //declaring useEffect with an anonymus func & an empty arry
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Countries all over the world</h2>
      <div className="grid">
        {
          countries.map(country => <Country flag={country.flag} name={country.name} capital={country.capital} 
            region={country.region} population={country.population}></Country>)
        }
      </div>
    </div>
  );
}
function Country(props) {
  return (
    <div className="container">
      <img style={{width: '100px'}} src={props.flag} alt="" />
      <h3>Name: {props.name}</h3>
      <p>Capital: {props.capital}</p>
      <p>Region: {props.region}, Population: {props.population}</p>
    </div>
  );
 }*/