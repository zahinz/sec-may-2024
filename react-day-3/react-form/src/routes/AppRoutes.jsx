import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FormA from "../pages/FormA";
import FormB from "../pages/FormB";
import FormC from "../pages/FormC";
import FormD from "../pages/FormD";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-a" element={<FormA />} />
        <Route path="/form-b" element={<FormB />} />
        <Route path="/form-c" element={<FormC />} />
        <Route path="/form-d" element={<FormD />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
