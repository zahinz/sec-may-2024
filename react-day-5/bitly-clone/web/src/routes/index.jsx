import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Cookie from "js-cookie";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

function PublicRoutes() {
  const location = useLocation();
  const pathname = location.pathname;
  const selectedRoutes = ["/login", "/register"];
  const isRouteSelected = selectedRoutes.includes(pathname);

  const authToken = Cookie.get("authToken");
  // if authToken is present, means user is logged in then redirect to dashboard
  if (authToken && isRouteSelected) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
}

function PrivateRoutes() {
  const authToken = Cookie.get("authToken");
  if (!authToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default AppRoutes;
