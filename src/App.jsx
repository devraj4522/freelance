import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import { Grid } from "semantic-ui-react";
import { Sidebar, Menu, Segment, Icon, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import SideMenu from "./components/Layout/SideMenu";

function App() {
  const queryClient = new QueryClient();
  const user = JSON.parse(localStorage.getItem('currentUser'));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("currentUser");
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
        <div style={{ marginLeft: "1rem", marginRight: "2rem" }}>
            <Grid>

                  <Grid.Column
                    only="tablet computer"
                    className="menuCol"
                    floated="left"
                    tablet={1}
                    computer={2}
                  >
                    <SideMenu currentUser={user} />
                  </Grid.Column>

                  <Grid.Column mobile={16} tablet={15} computer={14}>
                    <Outlet />
                  </Grid.Column>
              
            </Grid>
          </div>
        </QueryClientProvider>
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
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
