import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
// import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route
          exact
          path="/projects"
          element={
            <IsPrivate>
              {" "}
              <ProjectListPage />{" "}
            </IsPrivate>
          }
        /> */}
        {/* <Route
          exact
          path="/projects/:projectId"
          element={
            <IsPrivate>
              {" "}
              <ProjectDetailsPage />{" "}
            </IsPrivate>
          }
        /> */}
        {/* <Route
          exact
          path="/projects/edit/:projectId"
          element={
            <IsPrivate>
              {" "}
              <EditProjectPage />{" "}
            </IsPrivate>
          }
        /> */}

        <Route
          path="/signup"
          element={
            <IsAnon>
              {" "}
              <SignupPage />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              {" "}
              <LoginPage />{" "}
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
