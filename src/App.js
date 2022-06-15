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
import { ProductDetails } from "./Components/Layout/ProductDetails";
// import { Confirmed } from "./Components/Layout/Confirmed";
import { Terms } from "./Page/TermsComponents/Terms";
import { Privacy } from "./Page/PrivacyComponents/Privacy";
import { Blog } from "./Page/BlogComponents/Blog";
// import News from "./Components/Layout/News";
import Carslist from "./Page/Carslist/Carslist"
import SupermilerClub from "./Page/Supermiler/SupermilerClub";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carslist" element={<Carslist/>} />
          <Route path="/supermilerClub" element={<SupermilerClub/>} />
          {/* <Route path="/tariff" element={<Tariff />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/searchR" element={<SearchR />} />
          {/* <Route path="/confirm" element={<Confirmed />} /> */}
          <Route path="/searchR/:id" element={<ProductDetails />} />
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
