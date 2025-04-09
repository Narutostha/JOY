import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage/Homepage";
import NewArrivals from "./screens/NewArrivals/NewArrivals";
import NotFound from "./screens/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;