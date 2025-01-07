import './app.scss';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Login from "../src/pages/login/Login";
import Register from './pages/register/Register';
import NavBar from "../src/components/navbar/NavBar";
import RightBar from "../src/components/rightbar/RightBar";
import LeftBar from "../src/components/leftbar/LeftBar";
import Home from "../src/pages/home/Home";
import Profile from "../src/pages/profile/Profile";
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authenticationContext';

const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);
  console.log("Dark mode is:", darkMode); // Debugging

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <NavBar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "profile/:id",
        element: <Profile />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
