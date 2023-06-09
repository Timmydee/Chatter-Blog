import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Navbar } from "./component/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Write } from "./pages/Write";
import { Profile } from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Sign from "./pages/Sign";
import FeedScreen from "./pages/DashboardLayout";
import Bookmark from "./overviewPages/Bookmark";
import Analytics from "./overviewPages/Analytics";
import TeamBlog from "./overviewPages/TeamBlog";
import Draft from "./overviewPages/Drafts";
import Feed from "./FeedComponent/Feed";
import PrivateRoute from "./component/PrivateRoute";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/sign",
        element: <Sign />,
      },
      {
        path: "/feedscreen",
        element: (
          <PrivateRoute>
            <Feed />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/teamblog",
        element: <TeamBlog />,
      },
      {
        path: "/drafts",
        element: <Draft />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="w-full">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default App;
