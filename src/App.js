import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home"

// Lazy-loaded pages for better performance
const About = lazy(() => import("./Pages/About"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Career = lazy(() => import("./Pages/Career"));
const OrderTaxi = lazy(() => import("./Pages/OrderTaxi"));
const LoginSignup = lazy(() => import("./Pages/LoginSignup"));

// Route configuration
const ROUTES = [
  { path: "/", component: <Home /> },
  { path: "/career", component: <Career /> },
  { path: "/aboutUs", component: <About /> },
  { path: "/contactUs", component: <ContactUs /> },
  { path: "/signin", component: <LoginSignup /> },
  { path: "/register", component: <LoginSignup /> },
  { path: "/OrderTaxi", component: <OrderTaxi /> },
];

// Routes where the header or footer should be hidden
const HIDE_HEADER_ROUTES = ["/signin", "/register"];
const HIDE_FOOTER_ROUTES = ["/signin", "/register", "/OrderTaxi"];

const AppContent = () => {
  const location = useLocation();

  // Determine visibility of header and footer
  const hideHeader = HIDE_HEADER_ROUTES.includes(location.pathname);
  const hideFooter = HIDE_FOOTER_ROUTES.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <main>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            {ROUTES.map(({ path, component }, index) => (
              <Route key={index} path={path} element={component} />
            ))}
          </Routes>
        </Suspense>
      </main>
      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
