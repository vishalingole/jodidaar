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
import TermsAndConditions from "./routes/TermsAndConditions";
import Groom from "./routes/Groom";
import Bridge from "./routes/Bridge";
import DivorceeGroom from "./routes/DivorceeGroom.js";
import DivorceeBridge from "./routes/DivorceeBridge.js/index.js";
import Window from "./routes/Window.js/index.js";
import Windower from "./routes/Windower.js/index.js";

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
            <Route exact path="/contact" element={<TermsAndConditions />} />
            <Route exact path="/groom" element={<Groom/>}/>
            <Route exact path="/bridge" element={<Bridge/>}/>
            <Route exact path="/divorcee-groom" element={<DivorceeGroom/>}/>
            <Route exact path="/divorcee-bridge" element={<DivorceeBridge/>}/>
            <Route exact path="/window" element={<Window/>}/>
            <Route exact path="/windower" element={<Windower/>}/>
            <Route exact path="/terms-conditions" element={<TermsAndConditions/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ErrorBoundry>
    </div>
  );
}

export default App;



// Create folder inside route
// name it as TermsAndConditions
// create index.js inside the folder
// define a functional component with terms and condition name
// export term& condition
// import that compo inside app.js
// create route element and define path and sepcific <Terms/> component.

