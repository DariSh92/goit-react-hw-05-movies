import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';


const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));

// const AboutMovie = lazy(() => import('components/AboutMovie/AboutMovie'));
const Cast = lazy(() => import('components/Cast/Cast'));
// const MovieList = lazy(() => import('components/MovieList/MovieList'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));

export const App = () => {

  return (

    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
    
  );
};
