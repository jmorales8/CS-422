
import React, { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./NavigationBar/NavigationBar";
import Sidebar from "./SideBar/SideBar";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import "./App.css";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/*"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <>
                <Navbar />
                <div className="body">
                  <Sidebar />
                  <MainContent />
                </div>
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
