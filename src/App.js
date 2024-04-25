import { useReducer, useState } from 'react';
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ['11:00 AM', '12:30 PM', '2:30 PM', '5:00 PM', '7:00 PM'];
    default:
      return state;
  }
}

function App() {
  const [reservationData, setReservationData] = useState(null);
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  function initializeTimes(){
    return ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];
  }

  function updateTimes(selectedData){
    dispatch({ type: "UPDATE_TIMES", payload: selectedData });
  }

  const handleFormSubmit = (data) => {
    setReservationData(data);
  };


  return (
    <Router>
      <Nav />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order-online" element={<OrderOnline />} />
        <Route path="login" element={<Login />} />
        <Route path="reservations" element={<Reservations onSubmit={handleFormSubmit} availableTimes={availableTimes} reservationData={reservationData} updateTimes={updateTimes} />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
