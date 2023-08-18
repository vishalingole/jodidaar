import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import Landing from "./routes/Landing";
import Header from "./components/Header";
import StepOne from "./routes/Register/StepOne";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import getUserLocation from "./utils/location";
import Footer from "./components/Footer";
import Search from "./routes/Search/index";
import ProfileDetail from "./routes/Search/ProfileDetail";

function App() {
  const { i18n, t } = useTranslation();
  getUserLocation();

  return (
    <div className="App">
      <ErrorBoundry>
        <BrowserRouter>
          <Header isLoggedIn={true} />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/step-one" element={<StepOne />} />
            {/* <Route path="/todo-detail/:id/:userId" element={<TodoDetail />} /> */}
            <Route exact path="/search" element={<Search />} />
            <Route
              exact
              path="/search/profile-detail/:profileId"
              element={<ProfileDetail />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ErrorBoundry>
    </div>
  );
}

export default App;
