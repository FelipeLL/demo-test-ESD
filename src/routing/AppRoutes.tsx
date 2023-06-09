import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../modules/home/components/HomePage";
import { AboutUsPage } from "../modules/about-us/components/AboutUsPage";
import { VideosPage } from "../modules/videos/VideosPage";
import { RecipeDetail } from "../modules/home/components/RecipeDetail";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="meal/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
