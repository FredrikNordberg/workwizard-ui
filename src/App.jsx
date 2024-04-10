import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

import Navbar from "./components/shared/Navbar";
import About from "./components/pages/About";
import Footer from "./components/shared/Footer";
import InfoSection from "./components/ui/InfoSection/InfoSection";
import CustomerReviews from "./components/ui/CustomerReviews/CustomerReviews";
import WorkOrders from "./components/workorders/WorkOrders";


// Importera css...
import "./assets/css/style.css";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <article className="page">
        <section>
          <Routes>
          <Route path="/" element={<><Home /> <InfoSection />  </>} />
          <Route path="/workorders" element={<WorkOrders /> } />
          <Route path="/about" element={<><About /> <CustomerReviews /> </>} />
          </Routes>
        </section>
      </article>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
