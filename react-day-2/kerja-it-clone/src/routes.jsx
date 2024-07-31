import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ViewJob from "./pages/ViewJob";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<ViewJob />} />
        <Route path="*" element={<NotFound />} />
        {/* list all page with routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
