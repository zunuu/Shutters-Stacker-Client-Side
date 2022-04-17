import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Main/Banner/Banner';
import Services from './Components/Main/Services/Services';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
