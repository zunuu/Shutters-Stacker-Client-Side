import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Main/Banner/Banner';
import Services from './Components/Main/Services/Services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
}

export default App;
