import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "cabins",
        element: <Cabins></Cabins>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "settings",
        element: <Settings></Settings>,
      },
      {
        path: "account",
        element: <Account></Account>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
