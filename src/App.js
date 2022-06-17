import "./App.css";

import Navbar from "./Components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/HomeComponets/Home";
import { Footer } from "./Components/Layout/Footer";
import { SearchR } from "./Components/Layout/SearchR.jsx/SearchR";
import { Login } from "./Components/Layout/Login/Login";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { Signup } from "./Components/Layout/Signup/Signup";
import { Terms } from "./Page/TermsComponents/Terms";
import { Privacy } from "./Page/PrivacyComponents/Privacy";
import { Blog } from "./Page/BlogComponents/Blog";
import Carslist from "./Page/Carslist/Carslist"
import SupermilerClub from "./Page/Supermiler/SupermilerClub";
import {Success} from "./Page/success/Success"
import Offer from "./Page/offer/Offer";
import Host from "./Page/host/Host";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carslist" element={<Carslist/>} />
          <Route path="/supermilerClub" element={<SupermilerClub/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/offer" element={<Offer/>} />
          <Route path="/host" element={<Host/>} />
          {/* <Route path="/tariff" element={<Tariff />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/searchR" element={<SearchR />} />
          {/* <Route path="/confirm" element={<Confirmed />} /> */}
          {/* <Route path="/searchR/:id" element={<ProductDetails />} /> */}
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
