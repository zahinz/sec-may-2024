import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dictionary from "../pages/Dictionary";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
