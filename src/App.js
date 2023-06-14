import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import Landing from "./routes/Landing";
import Header from "./components/Header";
import StepOne from "./routes/Register/StepOne";
function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <BrowserRouter>
          <Header isLoggedIn={true} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/step-one" element={<StepOne />} />
            {/* <Route path="/todo-detail/:id/:userId" element={<TodoDetail />} /> */}
          </Routes>
        </BrowserRouter>
      </ErrorBoundry>
    </div>
  );
}

export default App;
