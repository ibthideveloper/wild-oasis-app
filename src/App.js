import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

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
    // path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        // index: true,
        path: "/",
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      ></Toaster>
    </QueryClientProvider>
  );
}

export default App;
