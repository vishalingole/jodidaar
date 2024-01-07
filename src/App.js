import React from "react";
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
import SignUp from "./routes/SignUp";
import MyProfile from "./routes/MyProfile";
import AdminLogin from "./routes/Admin/Login";
import Dashboard from "./routes/Admin/Dashboard";
import AdminSearch from "./routes/Admin/Search";
import AddUser from "./routes/Admin/AddUser";
import Operator from "./routes/Admin/Operator";
import AddOperator from "./routes/Admin/Operator/AddOperator";

function App() {
  const { i18n, t } = useTranslation();

  return (
    <div className="App">
      <ErrorBoundry>
        <BrowserRouter>
          <Header />
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
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/myprofile/:profileId" element={<MyProfile />} />
            <Route exact path="/admin/login" element={<AdminLogin />} />
            <Route exact path="/admin/dashboard" element={<Dashboard />} />
            <Route exact path="/admin/search" element={<AdminSearch />} />
            <Route exact path="/admin/user/add" element={<AddUser />} />
            <Route exact path="/admin/operator" element={<Operator />} />
            <Route exact path="/admin/operator/add" element={<AddOperator />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </ErrorBoundry>
    </div>
  );
}

export default App;
