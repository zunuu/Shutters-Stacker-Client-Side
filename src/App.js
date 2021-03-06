import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Main/Home/Banner/Banner';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Aboutme from './Components/Main/Aboutme/Aboutme';
import Home from './Components/Main/Home/Home';
import Blogs from './Components/Main/Blogs/Blogs';
import Checkout from './Components/Main/Checkout/Checkout';
import Login from './Components/Main/Login/Login';
import Services from './Components/Main/Home/Services/Services';
import NotFound from './Components/Main/NotFound404/NotFound';
import Register from './Components/Main/Register/Register';
import RequireAuth from './Components/Main/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home></Home>} />

        <Route path="home" element={<Home></Home>} />
        <Route path="services" element={<Services></Services>} />
        {/* <Route path="checkout" element={<Checkout></Checkout>} /> */}
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } />

        <Route path="aboutme" element={<Aboutme></Aboutme>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
