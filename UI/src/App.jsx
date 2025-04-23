import "./App.css";
import { useState, useEffect } from "react";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { FindACard } from "./pages/FindACard/FindACard";
import { RecommendedCards } from "./pages/FindACard/RecommendedCards/RecommendedCards";
import { CreditScorePayments } from "./pages/CreditScorePayments/CreditScorePayments";
import { SpendingSimulator } from "./pages/SpendingSimulator/SpendingSimulator";
import { CreditEducationHub } from "./pages/CreditEducation/CreditEducationHub";
import { StartLesson } from "./pages/CreditEducation/StartLesson/StartLesson";

const selectedPage = {
  "/": {component: <></>},
  "/login": { component: <Login /> },
  "/home": {component: <Home />},
  "/find-a-card": { component: <FindACard /> },
  "/recommended-cards": { component: <RecommendedCards />},
  "/score-and-payments": { component: <CreditScorePayments />},
  "/spending-simulator": { component: <SpendingSimulator />},
  "/education-hub": { component: <CreditEducationHub />},
  "/start-lesson": { component: <StartLesson />},
  
};

export default function App() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  },[]);

  useEffect(() => {
    // Redirect to /login if the current path is "/"
    if (window.location.pathname === "/") {
      window.history.replaceState({}, "", "/login"); // Use replaceState to avoid history back to "/"
      setRoute("/login");
    }
  }, []);

  return (
    <div className="App">
      {selectedPage[route].component || <h1>404 - Not Found</h1>}
    </div>
  );
}
