import css from "../src/App.module.css";
import Navigation from "./components/Navigation/Navigation";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element = {MovieDetailsPage}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
