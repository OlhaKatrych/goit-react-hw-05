import getTrendingMovies from "./movies-api";
import {
  getSearchMovies,
  getDetailsMovies,
  getCreditsMovies,
} from "./movies-api";
import Navigation from "./Navigation/Navigation";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
