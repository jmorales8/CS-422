import './App.css';
import { useState, useEffect } from "react";
import { Login } from './Login/Login';

const selectedPage = {
  "/": { component: <>hi</> },
  "/login": { component: <Login /> }
};

export default function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </nav>
        {selectedPage[route].component || <h1>404 - Not Found</h1>}
    </div>
  );
}
