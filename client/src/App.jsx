import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProjectsList from "./pages/ProjectsList/ProjectsList";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import AddProject from "./components/AddProjects/AddProjects";
import ProjectDetailsPage from "./pages/ProjectsList/ProjectDetails";
import EditProjects from "./pages/EditProjects/EditProjects";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route path="/projects" element={<ProjectsList />}/>
        <Route path="/add-project" element={<AddProject />}/>
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />}/>
        <Route path="/projects/edit/:projectId" element={<EditProjects />}/>

      </Routes>
    </div>
  );  
}

export default App;
