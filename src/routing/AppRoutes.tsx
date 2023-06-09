import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../modules/home/components/HomePage";
import { AboutUsPage } from "../modules/about-us/components/AboutUsPage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
